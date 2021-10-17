const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api2', (req, res) => {
    res.send('welcome to serviceTwo')
})

const PORT = process.env.PORT || 4001;
app.listen(PORT); 