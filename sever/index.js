require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

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

const port = 4001;
app.listen(port, () => { console.log(`Server listening on Port ${port}`)} );