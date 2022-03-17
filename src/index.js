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
// Za zaprimanje rezervacije parkirnog mjesta sa frontenda.
app.post('/osobni_podaci', async (req, res) => {
    let doc= req.body;
    
    // Datum/dan kad je poslan upit na bazu?
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

app.post('/podaci_vozila', (req, res) => {
    let poruka= req.body;
    console.log(poruka)
    storage.podaci_vozila.push(poruka)
 
    res.json("OK");
});

app.post('/podaci_rezervacije', async (req, res) => {
    /*let doc= req.body;
    
    // Datum/dan kad je poslan upit na bazu?
    doc.postedAt = new Date().getTime();

    delete doc._id;

    /*if (!doc.datum_rezervacije || !doc.vrijeme_boravka || !doc.koji_parking){
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
    };*/
});

app.post('/kalkulator_cijene_parkinga', (req, res) => {
    let doc= req.body;

    storage.kalkulator_cijene_parkinga.push(doc);

    
    res.json({status: 'OK'});
});


// Za listanje svih rezervacija parkirnih mjesta iz administracije.

app.get('/osobni_podaci', async (req, res)=> {
    let db= await connect()
    let cursor = await db.collection("osobni_podaci").find()
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


app.get('/osobni_podaci_memory', (req, res) => {
    
    res.json(storage.osobni_podaci);
});

app.get('/podaci_vozila_memory', (req, res) => {
    
    res.json(storage.podaci_vozila);
});

app.get('/podaci_rezervacije_memory', (req, res) => {
    
    res.json(storage.podaci_rezervacije);
});

app.get('/kalkulator_cijene_parkinga_memory', (req, res) => {
    
    res.json(storage.kalkulator_cijene_parkinga);
});





app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));

