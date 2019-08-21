require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const villainRouter = require('./routes/villains');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/villains', villainRouter);

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
