import express from 'express';
import storage from './memory_storage.js';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    
    res.json({});
});
// Za zaprimanje rezervacije parkirnog mjesta sa frontenda.
app.post('/osobni_podaci', (req, res) => {
    let doc= req.body;

    storage.osobni_podaci.push(doc);

    
    res.json({status: 'OK'});
});

app.post('/podaci_vozila', (req, res) => {
    let doc= req.body;

    storage.podaci_vozila.push(doc);

    
    res.json({status: 'OK'});
});

app.post('/podaci_rezervacije', (req, res) => {
    let doc= req.body;

    storage.podaci_rezervacije.push(doc);

    
    res.json({status: 'OK'});
});

app.post('/kalkulator_cijene_parkinga', (req, res) => {
    let doc= req.body;

    storage.kalkulator_cijene_parkinga.push(doc);

    
    res.json({status: 'OK'});
});


// Za listanje svih rezervacija parkirnih mjesta iz administracije.
app.get('/osobni_podaci', (req, res) => {
    
    res.json(storage.osobni_podaci);
});

app.get('/podaci_vozila', (req, res) => {
    
    res.json(storage.podaci_vozila);
});

app.get('/podaci_rezervacije', (req, res) => {
    
    res.json(storage.podaci_rezervacije);
});

app.get('/kalkulator_cijene_parkinga', (req, res) => {
    
    res.json(storage.kalkulator_cijene_parkinga);
});





app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));

