const router = require("express").Router();
const {signUp} = require('../controllers/authController.js');

router.post('/signup', signUp);

module.exports = router;