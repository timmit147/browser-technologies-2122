const express = require('express');

const bodyParser = require('body-parser');

// Use express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


// Stel een static map in
app.use(express.static('public'));

// Stel ejs in als template engine
app.set('view engine', 'ejs');
app.set('views', './views');

var vragen = {0:"pizza"};
var live = {0:""};


function countProperties(obj) {
  var count = 0;

  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          ++count;
  }

  return count;
}


app.get('/', function (req, res) {
  res.render("wachten",{
    data: vragen
  });
});

app.get('/admin:id', function (req, res) {
  res.render("vraagSettings",{
    data: vragen[req.params.id],
    para:   req.params.id
  });
});

app.post('/admin:id', function (req, res) {
  console.log(vragen[req.params.id]);
  delete vragen[req.params.id];
  res.redirect('/admin')
});

app.post('/live:id', function (req, res) {
  live[0] = vragen[req.params.id];
  console.log(live[0]);
  res.render("live",{
    data: live[0]
  });
});

app.get('/admin', function (req, res) {
  res.render("admin",{
    data: vragen
  });
});

app.get('/vraag', function (req, res) {
  res.render('vraag');
});



  
app.post('/vraag', (req, res) => {
  vragen[countProperties(vragen)+1] = req.body.vraag;
  // console.log(req.body.andwoord1);
  // console.log(req.body.andwoord2);
  res.redirect('/admin')
})


app.set('port', process.env.PORT || 7000);

const server = app.listen(app.get('port'), function () {
  console.log(`App gestart op poort: ${app.get('port')}`);
})