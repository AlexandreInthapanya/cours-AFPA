/*  controllers/auth.js */

/*
 * http://localhost:3003/authentication/register?name=funny&password=___funny___&email=contact@funny.fr
 */
exports.register = (req, res) => {
    console.log ( req.url );
    console.log ( req.body );

    res.send ('controllers/auth: register ok!')

};

exports.login = (req, res) => {
    console.log ( req.url );
    console.log ( req.body );

    res.send ('controllers/auth: login ok!')

};