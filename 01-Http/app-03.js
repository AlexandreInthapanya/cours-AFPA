/* creation du serveur Http */
	
const http = require ('http');

/*const server = http.createServer( function (req,res){
	res.writeHead(206, {'content-type' : 'text/html' });
	res.write(' Hello World ');
	res.end();
};*/

const callback = function(req, res){
	res.writeHead(206, {'content-type' : 'text/html' });
	res.write(' Hello World ');
	res.end();
};

const server = http.createServer ( callback );
 
server.listen(3003); 