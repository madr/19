var Metalsmith   = require('metalsmith');
var collections  = require('metalsmith-collections');
var htmlMinifier = require("metalsmith-html-minifier");
var layouts      = require('metalsmith-layouts');
var markdown     = require('metalsmith-markdown');
var pagination   = require('metalsmith-pagination');
var partials     = require('metalsmith-discover-partials');
var permalinks   = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    name: "Anders Ytterströms hemsida",
    url: "https://madr.se",
    image: ""
  })
  .source('./src')
  .destination('./doc')
  .use(collections({
    events: {
      sortBy: 'date',
      reverse: true
    },
    "brutal-legends": {
      sortBy: 'date',
      reverse: true
    },
    articles: {
      sortBy: 'date',
      reverse: true
    },
    posts: {
      pattern: 'posts/**/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(pagination({
    'collections.posts': {
      perPage: 2,
      layout: 'list.hbs',
      first: 'index.html',
      path: ':num/index.html',
      pageMetadata: {
        title: 'Arkiv'
      }
    }
  }))
  .use(markdown())
  .use(permalinks())
  .use(partials({
    directory: 'layouts/partials'
  }))
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(htmlMinifier())
  .build(function(err, files) {
    if (err) { throw err; }
  });
