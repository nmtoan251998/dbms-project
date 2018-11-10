require('dotenv').config();
const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');


const router = require('./routes/router');

const port = 3000;

const app = express();

bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));



app.get('/', (req,res) => {
    res.render('index');
});

//routing
app.use(router);

app.listen(port, () => console.log(`Server is started on port ${port}`))