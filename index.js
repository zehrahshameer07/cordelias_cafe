var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

let conn=mysql.createConnection('mysql://root:pass@localhost:5436/lmp')
conn.connect((err) =>{
 conn.query('SELECT * FROM Students',(err,res)=>{
    console.log(res)
 })
})