const router = require('express').Router();
const Registration = require('../../src/pages/Registration');
const Auth = require('../../src/pages/Auth');

router.get('/registration', (req, res) => {
    res.send(res.renderComponent(Registration, {}));
})

router.get('/login', (req, res) => {
    res.send(res.renderComponent(Auth, {}));
})

router.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if(error) {
            res.status(500).json({ data: 'logout is not worked' })
        }
        res.clearCookie('user_sid').redirect('/');
    })
})

module.exports = router;