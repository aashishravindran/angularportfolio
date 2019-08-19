var express = require('express');
var app = express();




app.use(express.static(__dirname));


app.get('/',function(req,res){
	res.render('index')
})



app.listen(4200,process.env.IP,function () {
        console.log("Started")
})


