// const express = require('express');

// const authController = require ('../controllers/auth.js');
// const router = express.Router();

// //<form action="/auth/register" ... <form>, click / register
// router.post( '/register', authController.register);

// //<form action="/auth/register" ... <form>, click / register
// router.post( '/login', authController.login);

//=======================================================================

/*  router/authentication.js */
/*
 *------
 * Data
 *------
 */
 const express = require('express');
 const authController = require('../controllers/auth');
 
 const router = express.Router();
 /*
  *------
  * POST
  *------
  */
 router.post( '/register', authController.register );
 router.post( '/login', authController.login);
 
 
 module.exports = router;
 