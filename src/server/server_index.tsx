const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('result');
})

app.listen(PORT, () => {
	console.log(`Server is Running on port : ${ PORT }`);
})