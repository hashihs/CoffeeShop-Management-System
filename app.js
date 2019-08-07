const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const fs = require('fs');
const multer = require('multer');
const router = express.Router();

const DIR = './uploads';
 

// Connect To Database
mongoose.connect(config.database);


// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});


const app = express();


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null,file.originalname);
    // cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
  }
});
let upload = multer({storage: storage});


const users = require('./routes/users');
const messages = require('./routes/messages');
const orders = require('./routes/orders');
const tables = require('./routes/tables');
const concessions = require('./routes/concessions');
const events = require('./routes/events');
const drinks = require('./routes/drinks');
const snacks = require('./routes/snacks');
const products = require('./routes/products');

const port = process.env.PORT || 8000;

app.use(cors());


app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './uploads')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/messages', messages);
app.use('/orders', orders);
app.use('/tables', tables);
app.use('/concessions', concessions);
app.use('/events', events);
app.use('/drinks', drinks);
app.use('/snacks', snacks);
app.use('/products', products);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api', function (req, res) {
  res.end('file catcher example');
});

app.post('/api/upload',upload.single('photo'), function (req, res) {
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
});

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(port, () => {
  console.log('Server started on port '+port);
});
