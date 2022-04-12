const express = require('express');
const app = express();
const data = require('./translations.json')
const port = 5000;

const engine = require("express-handlebars").engine

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

app.listen(port, ()=>{
    console.log(`le port ${port} est sur écoute`);
})

app.get('/:fr?', (req, res)=>{
    res.render('home', data.fr);
    console.log(`Data française ${data.fr.title}`);
})

app.get('/en', (req, res)=>{
    res.render('home', data.en);
    console.log(`Data anglaise ${data.en.title}`);
})

app.get('/es', (req, res)=>{
    res.render('home', data.es);
    console.log(`Data espagnol ${data.es.title}`);
})