const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/api3', (req, res) => {
    res.send('welcome to serviceThree')
})

const PORT = process.env.PORT || 4002;
app.listen(PORT); 
