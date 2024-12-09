const router = require('express').Router();
const MainPage = require('../../src/pages/MainPage')

router.get('/', async (req, res) => {
    const { user } = res.locals;
    res.send(res.renderComponent(MainPage, { user }));
})

module.exports = router;