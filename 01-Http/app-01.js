/* creation du serveur Http */
const http = require ('http');

/*const total = mult (2, 3);
console.log ( total );*/

// reconnaitre une methode :
// nom2LaMethode([.,.,.])


const deuxArguments = function (req, res){
	res.write(' Hello World ');
	res.end();
};
const server = http.createServer( deuxArguments ) ;
	

server.listen(3001); 