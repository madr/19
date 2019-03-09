var Metalsmith      = require('metalsmith');
var atomfeed        = require('metalsmith-feed-atom');
var dateFormatter   = require('metalsmith-date-formatter');
var collections     = require('metalsmith-collections');
var htmlMinifier    = require("metalsmith-html-minifier");
var layouts         = require('metalsmith-layouts');
var markdown        = require('metalsmith-markdown');
var pagination      = require('metalsmith-pagination');
var partials        = require('metalsmith-discover-partials');
var permalinks      = require('metalsmith-permalinks');
var sitemap         = require('metalsmith-sitemap');

var author = function () {
  return function (files, _, done) {
    Object.keys(files).forEach(function (file) {
      files[file].author = {
        name: 'Anders Ytterström',
        email: 'yttan@fastmail.se'
      }
    })
    done();
  }
}

Metalsmith(__dirname)
  .metadata({
    name: "Anders Ytterströms hemsida",
    url: "https://madr.se/",
    image: "https://sv.gravatar.com/avatar/981e98db0f85baaa05dddd1ee46a3276"
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
      pattern: '20*/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(author())
  .use(atomfeed({
    collection: 'articles',
    destination: 'prenumerera.xml',
    metadata: {
      title: 'madr.se',
      subtitle: 'Anders Ytterströms hemsida om hårdrock, musik och webbutveckling',
      url: 'https://madr.se/'
    }
  }))
  .use(pagination({
    'collections.posts': {
      perPage: 10,
      layout: 'list.hbs',
      first: 'index.html',
      path: ':num/index.html'
    }
  }))
  .use(dateFormatter({
    dates: [{
      key: 'date',
      format: 'YYYY-MM-DD'
    }]
  }))
  .use(markdown())
  .use(permalinks())
  .use(sitemap({
    hostname: 'https://madr.se'
  }))
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
