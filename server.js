var express = require('express'),
	mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bankappdb');

var Bank = require('./models/bankModel');

var app = express();

var bankRouter = express.Router();

 bankRouter.route('/Banks')
		.get(function(req,res){
		
		var query = req.query;
		Bank.find(query, function(err,banks){
			if(err)
				console.log("error");
			else{
				res.json(banks);
			}
		});
	});

bankRouter.route('/Banks/:ifscCode')
    .get(function(req,res){
    	console.log(req.params.ifscCode);
    	var query = {ifsc : req.params.ifscCode};
        Bank.findOne(query, function(err,bank){
            if(err)
                res.status(500).send(err);
            else
                res.json(bank);
        });
    });



app.use('/api', bankRouter);


app.get('/', function(req, res){
    res.send('welcome to my API!');
});

app.listen(8000, function(){
	console.log('Listening on port 8000');
});
