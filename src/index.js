import express from 'express';
import storage from './memory_storage.js';
import cors from 'cors';
import connect from './db.js'


const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati


app.use(cors());
app.use(express.json());
app.get('/', (req, res)=> res.send("Hello World, ovaj put preko browsera!"));

app.get('/', (req, res) => {
    let naslov = req.query.naslov
    console.log("Pretraga:", naslov)
    
   res.json({});
});


// Za zaprimanje rezervacije parkirnog mjesta sa frontenda

//Podaci vozača
app.post('/osobni_podaci', async (req, res) => {
    let doc = req.body;
    
    // Datum/dan kad je poslan upit na bazu
    doc.postedAt = new Date().getTime();

    delete doc._id;

    if (!doc.ime_korisnika || !doc.prezime_korisnika || !doc.br_telefona){
        res.json({
            status: 'fail',
            reason: 'incomplete'
        })
        return;
    };

    let db = await connect();
    let result = await db.collection("osobni_podaci").insertOne(doc)

    if (result && result.insertedCount == 1){
        res.json(result.ops[0]);
    }   
    else {
        res.json({
            status: 'fail',
        })
    };
});

//Podaci o vozilu
app.post('/podaci_vozila', async (req, res) => {
    let doc = req.body;
    
    // Datum/dan kad je poslan upit na bazu
    doc.postedAt = new Date().getTime();

    delete doc._id;

    if (!doc.naziv_vozila || !doc.boja_vozila || !doc.registracija){
        res.json({
            status: 'fail',
            reason: 'incomplete'
        })
        return;
    }; 

    let db = await connect();
    let result = await db.collection("podaci_vozila").insertOne(doc)

    if (result && result.insertedCount == 1){
        res.json(result.ops[0]);
    }   
    else {
        res.json({
            status: 'fail',
        })
    };
});

//Podaci o rezervaciji
app.post('/podaci_rezervacije', async (req, res) => {
    let doc = req.body;
    
    // Datum/dan kad je poslan upit na bazu
    doc.postedAt = new Date().getTime();

    delete doc._id;

    if (!doc.Izabrani_datum || !doc.Vrijeme_boravka || !doc.Koji_parking){
        res.json({
            status: 'fail',
            reason: 'incomplete'
        })
        return;
    } 

    let db = await connect();
    let result = await db.collection("podaci_rezervacije").insertOne(doc)

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

app.get('/osobni_podaci', async (req, res)=> {
    let db = await connect()
    let cursor = await db.collection("osobni_podaci").find()
    let results = await cursor.toArray()
  
    res.json(results)
    console.log(results)
});

app.get('/podaci_vozila', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection("podaci_vozila").find()
    let results = await cursor.toArray()
  
    res.json(results)
    console.log(results)
});

app.get('/podaci_rezervacije', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection("podaci_rezervacije").find()
    let results = await cursor.toArray()
  
    res.json(results)
    console.log(results)
});

app.get('/kartice', async (req, res)=> {
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


app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));

