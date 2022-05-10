const http = require('http');

console.log( `---HEADER---`);

/*const server = http.createServer(function (req, res){
	console.log ('req.url.substring(0) = ' + req.url.substring(0));
	console.log ('req.url.substring(1) = ' + req.url.substring(1));
	console.log ('req.url.substring(2) = ' + req.url.substring(2));
	console.log ('req.url.substring(3, 6) = ' + req.url.substring(3, 6));
});*/


const mappings = {
	g : 'http://www.google.com',
	f : 'http://www.facebook.com/',
	w : 'http://www.wikipedia.org/',
	instagram : 'http://www.instagram.com/'

};
console.log (mappings['f']);
console.log(`indice : C'est un reseau social`);

const server = http.createServer(function (req, res){
	const alias = req.url.substring(1);

	res.writeHead(302, {
		location: mappings[alias]  /*mappings[alias]*/
	});
	res.end();
});
 const callback = function(req, res){
 	res.writeHead(206, {'content-type' : 'text/html'});
 	res.write('Hello World');
 	res.end();
 };

 const sv = http.createServer(callback);


server.listen(3005);

console.log( `---FOOTER---`);
