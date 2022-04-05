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

var vragen = {"vraag":{"vraag":"","totaal":"0"}};
var live = "";
 

function countProperties(obj) {
  var count = 0;

  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          ++count;
  }

  return count;
}


app.get('/', function (req, res) {
  res.header("Refresh", "20");
  if(live == ""){
    res.render("index",{
      data:  live
    });
  }
  else{
    var user = false;
    for (key of users) {
      if (key == req.headers['user-agent']){
        user = true;
      }
    }
    res.render("wachten",{
      data:  live,
      user: user 
    });
  }
});

var users = ["test","test2"];


app.post('/keuze1:id', function (req, res) {
  users.push(req.headers['user-agent']);
  live["keuze1"]["totaal"] = parseInt(live["keuze1"]["totaal"])+1;
  live["vraag"]["totaal"] = parseInt(live["keuze1"]["totaal"]) + parseInt(live["keuze2"]["totaal"]);
  res.redirect('/')
});

app.post('/keuze2:id', function (req, res) {
  users.push(req.headers['user-agent']);
  live["keuze2"]["totaal"] = parseInt(live["keuze2"]["totaal"])+1;
  live["vraag"]["totaal"] = parseInt(live["keuze1"]["totaal"]) + parseInt(live["keuze2"]["totaal"]);
  res.redirect('/')
});


app.get('/admin:id', function (req, res) {
  res.render("vraagSettings",{
    data: vragen[req.params.id],
    para:   req.params.id
  });
});

app.post('/admin:id', function (req, res) {
  delete vragen[req.params.id];
  res.redirect('/admin')
});

app.post('/live:id', function (req, res) {
  live = vragen[req.params.id];
  res.redirect('/live')
});

app.get('/live', function (req, res) {
  res.render("live",{
    data:  live
  });
});

app.post('/live', function (req, res) {
  live = "";
  users = [];
  res.redirect('/admin')
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
  vragen[countProperties(vragen)] = {"vraag":{"titel":req.body.vraag,"totaal":"0"},"keuze1":{"titel":req.body.andwoord1,"totaal":"0"},"keuze2":{"titel":req.body.andwoord2,"totaal":"0"}};
  res.redirect('/admin'+(countProperties(vragen)-1))
})


app.set('port', process.env.PORT || 7000);

const server = app.listen(app.get('port'), function () {
  console.log(`App gestart op poort: ${app.get('port')}`);
})