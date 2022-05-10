/*creation du server http*/

/*const http = require('http');


const callback = function(req, res){

	//Explore.l'objet.'request'
	const verb = req.method,
	      url = req.url;

	res.writeHead(200, {
		'content-type' : 'text/plain'
	});

	res.write('-:Hello World' + 'verb="' + verb + '" url="'+ url + '"');
	res.end();    
};

const server = http.createServer( callback );

server.listen(3004);*/




const http = require('http');

function getPageContent(verb, url) {
    return `objects (req, res) {\n\tverb: "${verb}",\n\turl: "${url}"\n}`;
}

const onCreateServer = function (req, res) {
    const verb = req.method,
          url  = req.url;

    res.writeHead(200, {
        'content-type':'text/plain'
    });
    
    res.write(getPageContent(verb, url));
    res.end();
};

const sv = http.createServer(onCreateServer);

sv.listen(3004);
