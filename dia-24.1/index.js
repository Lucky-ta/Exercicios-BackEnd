require('dotenv').config();

const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`)
});