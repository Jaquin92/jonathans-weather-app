const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(`${__dirname}/../build`));

const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})


const port = 3030;

app.listen(port, () => console.log(`listening on port ${port} ya dig`));
