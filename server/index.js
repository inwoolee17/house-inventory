require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const inventoryController = require('./controllers/inventoryController');

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => { app.set('db', database); });

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        //one week
        maxAge: 60 * 60 * 24 * 7 * 1000
    }
}));

app.get('api/inventory', (req, res) => {
    const db = req.app.get('db');
    db.read_in
    .then( results => res.status(200).send(results) )
    .catch( () => res.status(500).send() );
});

const port = 4001;
app.listen(port, () => { console.log(`Server listening on Port ${port}`)} );