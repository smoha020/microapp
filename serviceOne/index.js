const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.get('/api1', (req, res) => {
    res.send('welcome to serviceOne')
})
console.log('hey there from serviceOne')
const PORT = process.env.PORT || 4000;
app.listen(PORT); 