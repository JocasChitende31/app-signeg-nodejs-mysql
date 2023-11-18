// USANDO O FRAMEWORK EXPRESS PARA CRIAR UM SERVIDOR PARA NOSSA APP

const jwt = require('jsonwebtoken');
const path = require('path');
const signegoRouter = require('./src/router/routes')
const session = require('express-session');
const flash  = require('connect-flash');
const express = require('express');
const errorRouter = require('./src/helpers/404')
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.SERVER_PORT;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'src/public')))


app.use(session({
    secret: process.env.SECRET_SESSION,
    saveUninitialized: true,
    resave: true,
    cookie:{
        maxAge: 3000
    }
}));

app.use(flash());

app.use(signegoRouter);
app.use(errorRouter);



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


// CRIANDO NOSSO SERVIDOR COM A BIBLITECA HTTP


// const userRouter = require('./src/router/user')

// const port = 3000;
// const localhost = '127.0.0.1';

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end("Olá, mundo!");
// });

// server.listen(port, localhost, () => {

//     console.log(`The server is listening in http://${localhost}:${port}`);;
// })