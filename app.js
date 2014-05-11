var express = require('express'),
  app = express(),
  assetsRoot = __dirname + '/assets',
  mustacheExpress = require('mustache-express'),
  fs = require('fs'),
  templatesRoot = __dirname + '/templates';

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', templatesRoot);
app.use('/assets', express.static(assetsRoot));

app.get('/', function (q,r) {
  var viewModel = {
    message: "hello"
  };
  r.render('index.mustache',viewModel);
});

app.listen(process.env.PORT||30000);
