require('@babel/register');

require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();
const PORT = process.env.PORT ?? 3000;

serverConfig(app);

const mainPage = require('./routes/views/mainPage.routes');
const authPage = require('./routes/views/auth.routes');
const authApiPage = require('./routes/api/apiAuth.routes');

app.use('/', mainPage);
app.use('/auth', authPage);
app.use('/auth/api/', authApiPage);


app.listen(PORT, () => console.log(`*** Start ${PORT} ***`));
