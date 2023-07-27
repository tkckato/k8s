// db接続設定
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql',  /* k8sのセレクタ */
    user: 'root',
    port : 32000,
    password: '****',
    database: 'app', 
  });

  module.exports = connection