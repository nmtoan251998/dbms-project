const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

const routerFalculty = require('./routes/falculty-route');
const routerMajor = require('./routes/major-route');
const routerSubject = require('./routes/subject-route');
const routerStudent = require('./routes/student-route');

const port = 3000;

const app = express();

bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index');
})

//routing
app.use(routerFalculty)
app.use(routerMajor)
app.use(routerSubject)
app.use(routerStudent)

app.listen(port, () => console.log(`Server is started on port ${port}`))