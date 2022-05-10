/** router/pages.js **/

/**
 * DATA
 */

const express = require('express');
const router = express.Router();

/**
 * GET
 */
//router.get('',() =>{
//});


router.get('/', (req, res) => {

	const data = {
		user: 'jean luc',
		hobbies: [
			'playing football', 
			'playing chess', 
			'cycling'
		]
	};

	res.render('index-04', data
	);

});
router.get('/register', (req, resp) => {
	resp.render('register');
})

router.get('/login', (req, resp) => {
	resp.render('login');
})

module.exports = router;