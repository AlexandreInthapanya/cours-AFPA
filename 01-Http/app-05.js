const http = require('http');
/*const mappings = require('./app-06');*/
const port = 3008;
const calc = require('./calculatrice');


/*const server = http.createServer(function (req, res){
	console.log ('req.url.substring(0) = ' + req.url.substring(0));
	console.log ('req.url.substring(1) = ' + req.url.substring(1));
	console.log ('req.url.substring(2) = ' + req.url.substring(2));
	console.log ('req.url.substring(3, 6) = ' + req.url.substring(3, 6));
});*/


/*const mappings = {
	g : 'http://www.google.com',
	f : 'http://www.facebook.com/',
	w : 'http://www.wikipedia.org/',
	instagram : 'http://www.instagram.com/'

};*/

const server = http.createServer(function (req, res){
	const alias = req.url.substring(1);
	if ( !mappings[alias] ){
		console.log("alias = " + alias + " undefined");
		res.writeHead(404);
		return res.end();
	};
	res.writeHead(302, {
		location: mappings[alias]  
	});
	res.end();
});


server.listen(port);

/*
console.log (`Server listening on port ${port}`);
console.log (' server listening on port ' + port + 'l\'accueil');
console.log (" server listening on port " + port);
*/

console.log (`Server listening on port ${port}`);
