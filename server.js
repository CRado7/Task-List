const express = require('express');
const API = require('./routes/API')
const html = require('./routes/html')
const app = express()
const PORT = process.env.PORT || 3001

//Middleware
app.use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(html)
app.use(API)
  
  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );