const express = require('express');
const path = require('path');
const res = require('express/lib/response');
const app = express();
const port = 3000;
const mongoose = require('mongoose');


const linkRoute = require('./routes/linkRoute')


/* criando esquema para fazer inclusao ao banco do mongo*/





// let link = new Link({
//     title: "progbr",
//     description: "Link para o twitter",
//     url: "http://twitter.com",
//     click: 0
// })
// link.save().then(doc => {
//     console.log(doc)
// }).catch(err => { console.log(err) });


// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number,

// })

// const Person = mongoose.model('Person', personSchema)

// let person = new Person({
//     nome: "jose",
//     age: 23
// })
// person.save().then(doc => {
//     console.log(doc)
// }).catch(err => { console.log(err) });














mongoose.connect("mongodb://localhost/newlinks")

let db = mongoose.connection;

db.on("error", () => { console.log('houve um erro') })
db.once("open", () => { console.log('Banco Carregado') })
app.use('/', linkRoute)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))







app.listen(port, () => console.log('example listening on port'))