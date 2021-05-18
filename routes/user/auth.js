
const router = require('express').Router();

const {register , login, forgotpassword, resetpassword} = require('../../controllers/user/auth')

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);



module.exports = router;