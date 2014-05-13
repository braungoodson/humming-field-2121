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
      description: 'concepts of meta-motion',
      image: {
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIj48L3JlY3Q+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+',
        dataSrc: 'holder.js/64x64'
      }
    },
    posts: [{
      subject: 'Guess what? I developed something!',
      body: 'I want this thing to be some sweet SaaS and it is certianly on its way. It is written primarily in JavaScript. The back-end runs a node process leveraging a restful framework called express that integrates nicely with the mustache engine for logicless views whose models are nearly seemlessly hydrated from a local datastore. It also leverages bower, a front-end package manager, to install dependencies like twitter and jquery.'
    },{
      subject: 'Guess what? I developed something!',
      body: 'I want this thing to be some sweet SaaS and it is certianly on its way. It is written primarily in JavaScript. The back-end runs a node process leveraging a restful framework called express that integrates nicely with the mustache engine for logicless views whose models are nearly seemlessly hydrated from a local datastore. It also leverages bower, a front-end package manager, to install dependencies like twitter and jquery.'
    },{
      subject: 'Guess what? I developed something!',
      body: 'I want this thing to be some sweet SaaS and it is certianly on its way. It is written primarily in JavaScript. The back-end runs a node process leveraging a restful framework called express that integrates nicely with the mustache engine for logicless views whose models are nearly seemlessly hydrated from a local datastore. It also leverages bower, a front-end package manager, to install dependencies like twitter and jquery.'
    },{
      subject: 'Guess what? I developed something!',
      body: 'I want this thing to be some sweet SaaS and it is certianly on its way. It is written primarily in JavaScript. The back-end runs a node process leveraging a restful framework called express that integrates nicely with the mustache engine for logicless views whose models are nearly seemlessly hydrated from a local datastore. It also leverages bower, a front-end package manager, to install dependencies like twitter and jquery.'
    },{
      subject: 'Guess what? I developed something!',
      body: 'I want this thing to be some sweet SaaS and it is certianly on its way. It is written primarily in JavaScript. The back-end runs a node process leveraging a restful framework called express that integrates nicely with the mustache engine for logicless views whose models are nearly seemlessly hydrated from a local datastore. It also leverages bower, a front-end package manager, to install dependencies like twitter and jquery.'
    },{
      subject: 'Guess what? I developed something!',
      body: 'I want this thing to be some sweet SaaS and it is certianly on its way. It is written primarily in JavaScript. The back-end runs a node process leveraging a restful framework called express that integrates nicely with the mustache engine for logicless views whose models are nearly seemlessly hydrated from a local datastore. It also leverages bower, a front-end package manager, to install dependencies like twitter and jquery.'
    },{
      subject: 'Guess what? I developed something!',
      body: 'I want this thing to be some sweet SaaS and it is certianly on its way. It is written primarily in JavaScript. The back-end runs a node process leveraging a restful framework called express that integrates nicely with the mustache engine for logicless views whose models are nearly seemlessly hydrated from a local datastore. It also leverages bower, a front-end package manager, to install dependencies like twitter and jquery.'
    },{
      subject: 'Guess what? I developed something!',
      body: 'I want this thing to be some sweet SaaS and it is certianly on its way. It is written primarily in JavaScript. The back-end runs a node process leveraging a restful framework called express that integrates nicely with the mustache engine for logicless views whose models are nearly seemlessly hydrated from a local datastore. It also leverages bower, a front-end package manager, to install dependencies like twitter and jquery.'
    }]
  };
  r.render('index.mustache',viewModel);
});

app.listen(process.env.PORT||30000);
