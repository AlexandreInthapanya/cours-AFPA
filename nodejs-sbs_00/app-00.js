/*	app.js	*/
// instanciation du module 'express' declare avec '> npm install express'
const express = require('express');

const app = express();

/*
 * GET
 */
app.get('/', (req, resp) => {
	resp.send(`
		<h1>A VOUS...</h1>
		`);
})
app.get('/entity/:inc', (req, resp) => {
	resp.send(`
		<h1>
			Il était une fois, ${req.params.inc} sur son cheval ??? vers la route de l\'ouest...
		</h1>
		`);
})
app.get('/entity/:inc/funny', (req, resp) => {
	resp.send(`
		<h1>
		Il était une fois, ${req.params.inc} sur son cheval 'funny' vers la route de l\'ouest...
</h1>	</h1>
		`);
})

/*
app.listen('8000');
console.log(`-: Server listening on port 8000... :-`);
*/

app.listen('8000', () => {
	console.log(`-: Server listening on port 8000... :-`);
});

















