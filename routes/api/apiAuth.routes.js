const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (! user) {
            const saltRounds = Number(process.env.SALT_ROUNDS) ?? 10;
            const hashPassword = await bcrypt.hash(password, saltRounds);
            const newUser = await User.create({ name, email, password: hashPassword });
            req.session.user_sid = newUser.id;
            res.status(201).json({ data: 'Пользователь зарегистрирован', redirectUrl: '/' });
        } else {
            res.status(403).json({ data: 'Данный пользователь уже зарегистрирован' });
        }
    } catch (error) {
        console.log(error, 'when receiving user data with registration');
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) {
            const dbPassword = await bcrypt.compare(password, user.password);
            if (dbPassword) {
                req.session.user_sid = user.id;
                res.status(200).json({ data: 'Успешный вход', redirectUrl: '/' })
            } else {
                res.status(401).json({ data: 'Неверный логин или пароль' });
            }
        } else {
            res.status(401).json({ data: 'Неверный логин или пароль' });
        }
    } catch (error) {
        console.log(error, 'when receiving user data with authentication');
    }
})

module.exports = router;