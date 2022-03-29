import mongo from 'mongodb';
import connect from './db.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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

    async authenticateUser(korisnicko_ime, lozinka) {
        let db = await connect();
        let user = await db.collection('users').findOne({korisnicko_ime: korisnicko_ime});

        if (user && user.lozinka && (await bcrypt.compare(lozinka, user.lozinka))){
            delete user.lozinka
            let token = jwt.sign(user, process.env.JWT_SECRET, {
                algorithm: "HS512",
                expiresIn: "1 week"
            });
            return {
                token,
                korisnicko_ime: user.korisnicko_ime
            }
        }
        else {
            throw new Error ("Cannot authenticate")
        }
    },
    verify(req, res, next) {
        try {
            let authorization = req.headers.authorization.split(' ');
            let type = authorization[0];
            let token = authorization[1];
            
            if (type !== "Bearer") {
                res.status(401).send();
                return false;
            }
            else {
                req.jwt = jwt.verify(token, process.env.JWT_SECRET);
                return next();
            }}   
        catch (e) {
            return res.status(401).send()
    }}
};