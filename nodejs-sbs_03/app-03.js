/*	app.js	*/
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
	/*
	resp.send(`
		<h1>A VOUS...</h1>
		`);
	*/
	res.render('index-03', {
			user: 'jean luc',
			hobbies: [
				'playing football', 
				'playing chess', 
				'cycling'
			]
		} 
	);

});
app.get('/entity/:inc', (req, resp) => {
	resp.send(`
		<h1>
			Il était une fois, ${req.params.inc} sur son cheval ??? vers la route de l\'ouest...
		</h1>
		`);
})
/*
app.listen('8000');
console.log(`-: Server listening on port 8000... :-`);
*/
app.listen('8000', () => {
	console.log(`-: Server listening on port 8000... :-`);
});
