var express = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

app.set('view engine','ejs');//sent views to EJS

//route for index page
app.get('/', (req,res)=>{
  var title = "Our Home Page";
  res.render('pages/index',{title:title});
});

//route for users (list) page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});


app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);
});

