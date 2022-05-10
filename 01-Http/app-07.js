//app.js

//instanciation du module 'express' declare avec '> npm install express'
const express = require('express');
const app = express();

/*
GET
*/
app.get('/api/voiture/:brand/:color', (req, resp) => {
    resp.send('Afficher caracteristique voiture : ' + req.params.brand + ' ' + req.params.color); 
    /*resp.json(products);*/
})


app.get('/', (req, resp) => {
 	resp.send('<h1>GET-> HOME PAGE </h1>');
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

