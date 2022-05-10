//app.js

//instanciation du module 'express' declare avec '> npm install express'
const express = require('express');
const path = require('path');
const app = express();

/*
SETting
*/
//need to tell 'express' where to look for 'views'
console.log("path.join(__dirname, 'views') : " + path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views'));
//tell to 'express' the view you use: 'ejs'
app.set('view engine', 'ejs'); // moteur  = ejs (nodejs), twig (symfony), pug , hbs
//moteur ENGINE + templates VIEWS = html


/*
GET
*/
app.get('/api/voiture/:brand/:color', (req, resp) => {
    resp.send('Afficher caracteristique voiture : ' + req.params.brand + ' ' + req.params.color); 
    /*resp.json(products);*/
})


app.get('/', (req, resp) => {
 	/*resp.send('<h1>GET-> HOME PAGE </h1>');*/
    resp.render('index-09', {
                            user: "jerome", 
                             hobbies: [
                                    'playing football'
                                        ]

                                });
 })

app.get('/celia', (req, resp) => {
 	resp.send('<h1>GET-> test </h1>');
 })

app.get('/tv/samsung', (req, resp) => {
 	resp.send('<h1>GET-> page traitement de samsung </h1>');
 })

/*
POST
*/
app.post('/', (req, resp) => {
 	resp.send('<h1>POST-> HOME PAGE </h1>');
 })

app.post('/celia', (req, resp) => {
 	resp.send('<h1>POST-> test </h1>');
 })

app.post('/tv/samsung', (req, resp) => {
 	resp.send('<h1>POST-> page traitement de samsung </h1>');
 })

/*
PUT
*/

app.put('/', (req, resp) => {
 	resp.send('<h1>PUT-> HOME PAGE </h1>');
 })

app.put('/direction', (req, resp) => {
 	resp.send('<h1>PUT-> Vous allez être rediriger sur la page d\'accueil google </h1>');
 })

app.put('/direction/google', (req, resp) => {
 	resp.send(`<h1>Vous voici sur google</h1>
`);
 })

app.listen('5000');
console.log(' Server listening on port 5000... ');

