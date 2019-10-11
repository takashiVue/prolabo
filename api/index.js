const app = require('express')();
module.exports = { path: '/api', handler: app }

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'prolabo'
});

app.get('/add_user', function (req, res) {
    const name = req.query.name;
    const sql = `select * from data where name="${name}"`;
    console.log(sql);
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
});

app.get('/login_user',function(req,res){
  const id = req.query.id;
  const password = req.query.password;
  const sql = `select * from user_list where id = '${id}' and password = '${password}'`;
  console.log(sql);
  connection.query(sql,function(error, results, fields){
    if (error) throw error;
    if(results.length){
        res.send('1')
    }else{
        res.send('0')
    }
  })
})
app.get('/dbtest', function (req, res) {
  res.send('success');    
});

module.exports = {
path: "/api/",
handler: app
};