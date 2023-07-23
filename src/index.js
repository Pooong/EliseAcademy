// import {engine} from'express-handlebars'
const {engine} = require('express-handlebars');
const route = require('./routes');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const db = require('./config/db')


//Connect db
db.connect();

//express
const app = express();
const port = 3000;

app.use(express.urlencoded({
  extended:"true",
}));

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))


//morgan 
app.use(morgan('combined'));



//View engine HBS 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

route(app)


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})