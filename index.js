const express = require('express');
const app = express();
const port = 5000;

const engine = require("express-handlebars").engine

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

app.listen(port, ()=>{
    console.log(`le port ${port} est sur écoute`);
})

app.get('/ok', (req, res)=>{
    res.render('home')
})