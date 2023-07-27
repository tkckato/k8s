const express = require('express');
const app = express();
const router = express.Router();
const cnct = require('./connect');

// youtubeから取得したデータの挿入
router.post('/', (request, response) => {
  for(let n=0;n<request.body.length;n++){
      const newDescription = request.body[n].description.replace(/"/g, '')
      const newDatetime = request.body[n].time.replace('T', ' ').replace('Z', '')
      
      const sql = 'insert into youtube (id, title, img, description, time) values ( "' + request.body[n].id +'", "' + request.body[n].title + '", "' + request.body[n].img + '", "' + newDescription + '", "' + newDatetime +'");';
      cnct.query(sql, function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });
  }
});

module.exports = router;