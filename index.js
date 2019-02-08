var Metalsmith   = require('metalsmith');
var collections  = require('metalsmith-collections');
var htmlMinifier = require("metalsmith-html-minifier");
var layouts      = require('metalsmith-layouts');
var markdown     = require('metalsmith-markdown');
var pagination   = require('metalsmith-pagination');
var permalinks   = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "Anders Ytterströms hemsida",
    description: "Blogg och digital lekstuga för webbutvecklaren, hobbymusikanten och hårdrockaren Anders Ytterström.",
    generator: "Metalsmith",
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
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(htmlMinifier())
  .build(function(err, files) {
    if (err) { throw err; }
  });
