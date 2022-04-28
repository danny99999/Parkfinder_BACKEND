import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connect from './db.js'
import auth from './auth.js';
import req from 'express/lib/request.js';
import path from 'path';
import res from 'express/lib/response.js';


const app = express(); // instanciranje aplikacije
const port =process.env.PORT || 3000; // port na kojem će web server slušati
app.use(cors());
app.use(express.json()); //autom. dekodiranje JSON poruka

app.get('/', (req, res)=> res.send("Hello World, ovaj put preko browsera!"));

app.get('/', [auth.verify], (req, res) => {
    let naslov = req.query.naslov
    console.log("Pretraga:", naslov)
    
   res.json({});
});

app.get('/tajna', [auth.verify], (req, res) => {
    res.json({message: "Ovo je tajna " + req.jwt.korisnicko_ime});
});

app.post('/auth', async (req, res) => {
    let user = req.body;

    try {
        let result = await auth.authenticateUser(user.korisnicko_ime, user.lozinka);
        res.json(result);
    }
    catch(e) {
        res.status(403).json({ error: e.message});
    }
}); 

app.patch('/users', [auth.verify], async (req, res) => {
    let changes = req.body;

    let korisnicko_ime = req.jwt.korisnicko_ime;

    if(changes.nova_lozinka && changes.stara_lozinka) {
        let result = await auth.changeUserPassword(korisnicko_ime, changes.stara_lozinka, changes.nova_lozinka);
        if(result) {
            res.status(201).send();
        } else {
            res.status(500).json({error: 'cannot change password'});
        }
    }
    else {
        res.status(400).json({error: 'krivi upit'});
    }
});

app.post('/users', async (req, res)=> {
    let user = req.body;
    let id;
    try {
        id =  await auth.registerUser(user);
    }
    catch (e) {
        res.status(500).json({error: e.message})
    }
    res.json({id: id});
});

//Obavijesti
app.post('/obavijesti', [auth.verify], async (req, res) => {
    let doc = req.body;
    
    // Datum/dan kad je poslan upit na bazu
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    doc.datum_obavijesti = today;

    let db = await connect();
    let result = await db.collection("obavijesti").insertOne(doc)

    if (result && result.insertedCount == 1){
        res.json(result.ops[0]);
    }   
    else {
        res.json({
            status: 'fail',
        })
    };
}); 

// Za zaprimanje rezervacije parkirnog mjesta sa frontenda

//Slanje podataka o rezervacijama
app.post('/rezervacije', [auth.verify], async (req, res) => {
    let doc = req.body;
    
    // Datum/dan kad je poslan upit na bazu
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    doc.upit_poslan = today;

    delete doc._id;

    if (!doc.Ime || !doc.Prezime || !doc.Broj_telefona){
        res.json({
            status: 'fail',
            reason: 'incomplete'
        })
        return;
    };

    let db = await connect();
    let result = await db.collection("rezervacije").insertOne(doc)

    if (result && result.insertedCount == 1){
        res.json(result.ops[0]);
    }   
    else {
        res.json({
            status: 'fail',
        })
    };
});


// Za listanje svih rezervacija parkirnih mjesta iz administracije.
app.get('/rezervacije/:email', [auth.verify],  async (req, res) => {
    let email = req.params.email
    let db = await connect()

    let doc = await db.collection("rezervacije").find({Email:email})
    let result = await doc.toArray();
    res.json(result)
    console.log(result)
});

//
//Za listanje svih obavijesti
app.get('/obavijesti', [auth.verify],  async (req, res) => {
    let db = await connect()

    let doc = await db.collection("obavijesti").find()
    let result = await doc.toArray();
    res.json(result)
    console.log(result)
});


app.get('/kartice', [auth.verify], async (req, res)=> {
    let db = await connect()
    let query = req.query;
    let selekcija = {}
    
    var string = query.naslov_b

    if (string) {
        selekcija.naslov_b = new RegExp (string, 'i')
    }

    console.log("Selekcija", selekcija) 
    let cursor = await db.collection("kartice").find(selekcija) 
    let results = await cursor.toArray()
  
    res.json(results)
    console.log(results)
});




app.listen(port, () => console.log(`Backend se vrti na ${port}`));

