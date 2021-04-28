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
app.post('/rezervacija_parkinga', (req, res) => {
    let doc= req.body;

    storage.rezervacije_parkinga.push(doc);

    
    res.json({status: 'OK'});
});

// Za listanje svih rezervacija parkirnih mjesta iz administracije.
app.get('/rezervacija_parkinga', (req, res) => {
    
    res.json(storage.rezervacije_parkinga);
});


app.get('/rezervacija_parkinga/user/:username', (req, res) => {
    
    let username = req.params.username;
    console.log('Tražene su rezervacije samo za ', username);
    res.json(storage.rezervacije_parkinga.filter((x)=> x.prezime_korisnika == username));
});


app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));
