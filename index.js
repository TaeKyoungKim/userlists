var express = require('express')
var path = require('path')
var bodyPaser = require('body-parser')
var app = express()
var apiRouter  = require('./router')

//set(기본세팅) , use(미들웨어 등록)
app.set('views',  path.join (__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(bodyPaser.urlencoded({extended:false}))
app.use(bodyPaser.json())
app.use('/',apiRouter)


// //app.get(요청경로 , 콜백함수(반응및 요청에 의한 행동))
// app.get('/main', function(request ,response){
//     console.log(request);
//     response.send(`<h1>Hello World!!</h1>
//         <h2>Hello World!!</h2>
//     `)
   
// })
// app.listen(포트 , 호스트(서버url),backlog, 콜백함수)

app.listen(5000, function(){
    console.log("Server is Runing at http://localhost:5000")
})
