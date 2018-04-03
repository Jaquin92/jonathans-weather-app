const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const { getWeather } = require("./controller");

app.get("/api/weather/:id", getWeather);

const port = 3002;

app.listen(port, () => console.log(`listening on port ${port} ya dig`));
