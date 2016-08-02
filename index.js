'use strict';
const PORT = 5000;

//const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const router = require('./api/router');
//const bodyParser = require('body-parser');
const app = express();

//app.use(helmet);
app.use(router);
//app.use(bodyParser.json());

app.listen(PORT, () => console.log(`App started and listening on port ${PORT}`));
