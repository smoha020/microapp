const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/api3', (req, res) => {
    res.send('welcome to serviceThree')
})

axios.get('/api3')
.then(res => console.log(res.data))
.catch(err => console.log(err))

//const PORT = process.env.PORT || 4002;
const PORT = 3000;
app.listen(PORT); 
