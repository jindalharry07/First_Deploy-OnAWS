var express=require('express')
var app=express();
var port =8000;
app.use(express.static('Basics'));


app.listen(port,function(){
    console.log(`Server in running on http://localhost:${port}`);
})