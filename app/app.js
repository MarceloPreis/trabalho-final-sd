const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const db = require('./database/mongo');

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

const addDefaultInfoMiddleware = (req, res, next) => {
    res.setHeader('X-Custom-Message', process.env.SERVER_NAME || 'localhost');

    res.locals.defaultInfo = {
        timestamp: new Date().toISOString(),
        message: 'This response was modified by middleware.'
    };

    next();
};

app.use(addDefaultInfoMiddleware);

// Rotas
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(router);
app.use(express.json())

// Iniciar o servidor
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
