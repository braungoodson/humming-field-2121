var express = require('express'),
  app = express(),
  assetsRoot = __dirname + '/assets',
  mustacheExpress = require('mustache-express'),
  fs = require('fs'),
  templatesRoot = __dirname + '/templates',
  bowerRoot = __dirname + '/bower_components';

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', templatesRoot);
app.use('/assets', express.static(assetsRoot));
app.use('/bower_components', express.static(bowerRoot));

app.get('/', function (q,r) {
  var viewModel = {
    tenant: {
      title: 'kinetictheory.com',
      description: 'concepts of meta-motion'
    },
    posts: [{
      subject: 'What is Lorem Ipsum?',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },{
      subject: 'What is Lorem Ipsum?',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },{
      subject: 'What is Lorem Ipsum?',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }]
  };
  r.render('index.mustache',viewModel);
});

app.listen(process.env.PORT||30000);
