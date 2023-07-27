const express = require('express');
const app = express();
const cnct = require('./connect');
const router = express.Router();


// dbからデータの取得
router.get('/', (request, response) => {
  const sql = 'select * from youtube;';
  console.log(sql)
  cnct.query(sql, function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });
});

module.exports = router;