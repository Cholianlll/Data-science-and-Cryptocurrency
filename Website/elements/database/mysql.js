var mysql = require('mysql');

var con = mysql.createConnection({
    host: "43.132.196.216",
    user: "common_user",
    password: "123456",
    port:"3306"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

