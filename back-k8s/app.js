const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors')

const getdata = require('./db/getdata');
const insert = require('./db/insert');

app.use(bodyParser.json()); // JSONデータのパースに使用
app.use(bodyParser.urlencoded({ extended: true })); // URLエンコードされたデータのパースに使用

app.use(cors());
app.use('/', getdata);
app.use('/insert', insert);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));