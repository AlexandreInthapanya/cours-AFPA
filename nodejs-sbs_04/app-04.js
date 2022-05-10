/*	app.js	*/
/*
 *------
 * Data
 *------
 */

const express = require('express');
const path = require('path');

const app = express();

const public = path.join(__dirname, 'public');
const dotenv = require('dotenv');
dotenv.config({
	path: './.env'
});

const port = process.env.PORT || 8008;
console.log(port);

const mysql = require('mysql2');
const host = process.env.DATABASE_HOST;
const db = mysql.createConnection({
	host: host,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PWD,
	database: process.env.DATABASE
});

db.connect( (error)  => {
	if ( error ){
		console.log(`[app.js:33] - ${error}`);
	} else {
		console.log(`-: connection established to the DATABASE 🔗 ...`);
	}
});
/*
 * Setting...
 */
/* need to tell 'express' where to look for 'views' */
app.set('views', path.join(__dirname, 'views') );
/* tell to 'express' the view you use: here 'ejs' */
app.set('view engine', 'ejs');

app.use(express.static(public));
/*
 *------
 * GET
 *------
 */
app.use('/', require('./router/pages'));
app.use( '/auth', require('./router/auth'));


/*
app.listen('5000');
console.log(`-: Server listening on port 8000... :-`);
*/
app.listen(port, () => {
	console.log(`-: Server listening on port ${port}... :-`);
});
