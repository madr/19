var hljs            = require('hilight/index');
var Metalsmith      = require('metalsmith');
var atomfeed        = require('metalsmith-feed-atom');
var collections     = require('metalsmith-collections');
var dateFormatter   = require('metalsmith-date-formatter');
var htmlMinifier    = require("metalsmith-html-minifier");
var layouts         = require('metalsmith-layouts');
var markdown        = require('metalsmith-markdown-remarkable');
var pagination      = require('metalsmith-pagination');
var partials        = require('metalsmith-discover-partials');
var permalinks      = require('metalsmith-permalinks');
var sitemap         = require('metalsmith-sitemap');
var static          = require('metalsmith-static');

var author = function (params) {
  return function (files, _, done) {
    Object.keys(files).forEach(function (file) {
      files[file].author = {
        name: params.name,
        email: params.email
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
  .destination('./docs')
  .clean(false)
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
  .use(author({
    name: 'Anders Ytterström',
    email: 'yttan@fastmail.se'
  }))
  .use(pagination({
    'collections.posts': {
      perPage: 10,
      layout: 'list.hbs',
      first: 'index.html',
      path: ':num/index.html'
    }
  }))
  .use(markdown({
    typographer:  false,
    highlight: function (str, lang) {
      if (lang && lang in hljs.languages) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
  
      try {
        return hljs.highlightAuto(str).value;
      } catch (__) {}
  
      return '';
    }
  }))
  .use(permalinks()) // must be *before* atomfeed, and *after* collections
  .use(atomfeed({    // must be *after* permalinks
    collection: 'articles',
    destination: 'prenumerera.xml',
    metadata: {
      title: 'madr.se',
      subtitle: 'Anders Ytterström om hårdrock, musik och webbutveckling',
      url: 'https://madr.se/'
    }
  }))
  .use(dateFormatter({
    dates: [{
      key: 'date',
      format: 'YYYY-MM-DD'
    }]
  }))
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
  .use(static({
    "src": "./assets",
    "dest": "./"
  }))
  .build(function(err, _files) {
    if (err) { throw err; }
  });
