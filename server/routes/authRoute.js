const router = require("express").Router();
const { signUp, login } = require('../controllers/authController.js');
const { userVerification } = require('../middleware/authMiddleware.js');

router.post('/', userVerification);
router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;