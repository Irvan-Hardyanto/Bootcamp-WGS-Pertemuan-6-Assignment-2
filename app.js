//import library express.js
const express=require('express');
var morgan = require('morgan');

//inisialisasi objek express.js
const app= express();
const port = 3000;//port number

//set view engine menggunakan ejs
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  app.use(express.static('public'))
// app.use(morgan(':method :url :status :response-time ms :res[content-length] - '))
app.use(morgan('dev'))

//route default ke halaman index
app.get('/',(req,res)=>{
    const contact = [
        {"name":"Irvan",
        "email":"asd@gmail.com"},
        {"name":"Osas",
        "email":"osas@gmail.com"},
        {"name":"Dobleh",
        "email":"dobleh@gmail.com"},
    ]
    //render itu untuk merender view template tertentu.
    res.render(__dirname+'/view/index.ejs',{"nama":"index","cont":contact,"title":"Index"});
    res.status(200);
})

//route ke halaman contact
app.get('/contact',(req,res)=>{
    //render templatenya
    res.render(__dirname+'/view/contact.ejs',{"title":"Contact"});
    res.status(200);
})

//route ke halaman about
app.get('/about',(req,res)=>{
    //render templatenya
    res.render(__dirname+'/view/about.ejs',{"title":"About"});
    res.status(200);
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})