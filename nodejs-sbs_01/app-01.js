/*	app-01.js	*/
/*
 *------
 * Data
 *------
 */
const express = require('express');
const path = require('path');

const app = express();
/*
 * Setting...
 */
/* need to tell 'express' where to look for 'views' */
app.set('views', path.join(__dirname, 'views') );
/* tell to 'express' the view you use: here 'ejs' */
app.set('view engine', 'ejs');

/*
 *------
 * GET
 *------
 */
app.get('/', (req, res) => {
	res.render('index-01', {aitUsers: "Alex"} );
})
/*
app.get('/entity/:inc', (req, resp) => {
	resp.send(`
		<h1>
			Il était une fois, ${req.params.inc} sur son cheval ??? vers la route de l\'ouest...
		</h1>
		`);
})
*/

/*
app.listen('8000');
console.log(`-: Server listening on port 8000... :-`);
*/
app.listen('8000', () => {
	console.log(`-: Server listening on port 8000... :-`);
});
