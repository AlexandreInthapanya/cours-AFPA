/* creation du serveur Http */
const http = require ('http');

/*const total = mult (2, 3);
console.log ( total );*/

// reconnaitre une methode :
// nom2LaMethode([.,.,.])


const callback = function (req, res){
	res.write(' <html style="background-color: yellow;font-size: 54px;color: purple;font-weight: bold;/*! text-align: ; */text-align: center;text-decoration: underline;text-decoration-color: chartreuse;"><head></head><body><h3>chupapi munano </h3>  </body></html>  ');
	res.end();
};
const server = http.createServer( callback ) ;

	
server.listen(3002); 