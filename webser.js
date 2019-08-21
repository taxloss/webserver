var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 9999;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');
app.use(express.static('./views'));
app.get('/',function(req,res){
    res.render('index');
});
app.get('/CorgiMain',function(req,res){
    res.render('CorgiMain');
});
app.get('/Beagle',function(req,res){
    res.render('Beagle');
});

app.get('/contact',function(req,res){
    //console.log(req.query);
    res.render('contact',{qs:req.query});
});

app.post('/contact',urlencodedParser, function(req,res){
     //console.log(req.body);
     res.render('contact-success',{data:req.body});
});

app.listen(port,function(){
    console.log(`Web server listening to port ${port}`);
});