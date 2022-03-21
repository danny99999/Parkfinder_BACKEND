import mongo from 'mongodb';
import connect from './db.js';
import bcrypt from "bcrypt";

 (async () => {
    let db = await connect();
    await db.collection('users').createIndex({korisnicko_ime: 1}, {unique: true});
})();

export default {
    async registerUser(userData) {
        let db = await connect();


        let doc = {
            korisnicko_ime: userData.korisnicko_ime,
            lozinka: await bcrypt.hash(userData.lozinka, 8),
            grad: userData.grad, 
        };
        try {
     let result = await db.collection('users').insertOne(doc);
     if (result && result.insertedId) {
         return result.insertedId;
     }
      }
      catch(e) {
          if (e.name == "MongoError" && e.code == 11000) {
              throw new Error ("Korisnik već postoji")
          }
          console.error(e);
      }
    },
};