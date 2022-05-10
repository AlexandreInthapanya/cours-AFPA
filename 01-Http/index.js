const http = require('http');

function getPageContent(verb, url) {
	return `objects (req, res) {\n\tverb: "${verb}",\n\turl: "${url}"\n}`;
}

const onCreateServer = function (req, res) {
	const verb = req.method,
           url = req.url;

    res.writeHead(200, {
    	'content-type' : 'text/plain'
    });    

    res.write('-: Hello World'getPageContent(verb, url));
    res.end();	
};

const sv = http.createServer( onCreateServer );

sv.listen(3005);

