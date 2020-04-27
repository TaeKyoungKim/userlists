var express = require('express');
var router = express.Router(); 
var mysql = require('mysql')

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'myapp'
})



router.get('/api',(req , res)=>{

    db.query('SELECT * FROM topic' ,(err, result)=>{
        console.log(result)
        res.json(result)
    })
    // res.render('index.ejs', {greeting:"hello", bye:"good bye"})
});

module.exports=router;

