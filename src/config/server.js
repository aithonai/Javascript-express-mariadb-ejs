const express = require('express');
const path = require('path');

const app = express();

// Settings
app.set('port', process.env.PORT || 5500);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// Middleware
app.use(express.urlencoded({extended:false}));

module.exports = app;