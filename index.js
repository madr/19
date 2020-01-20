var hljs = require("hilight/index");
var Metalsmith = require("metalsmith");
var atomfeed = require("metalsmith-feed-atom");
var collections = require("metalsmith-collections");
var dateFormatter = require("metalsmith-date-formatter");
var headingsidentifier = require("metalsmith-headings-identifier");
var helpers = require("metalsmith-discover-helpers");
var htmlMinifier = require("metalsmith-html-minifier");
var layouts = require("metalsmith-layouts");
var markdown = require("metalsmith-markdown-remarkable");
var pagination = require("metalsmith-pagination");
var partials = require("metalsmith-discover-partials");
var permalinks = require("metalsmith-permalinks");
var sitemap = require("metalsmith-sitemap");
var static = require("metalsmith-static");

var author = function(params) {
  return function(files, _, done) {
    Object.keys(files).forEach(function(file) {
      files[file].author = {
        name: params.name,
        email: params.email
      };
    });
    done();
  };
};

Metalsmith(__dirname)
  .metadata({
    name: "Skrivna ord av Anders Ytterström",
    url: "https://madr.se/",
    image: "https://madr.se/mugshot.jpg"
  })
  .source("./src")
  .destination("./docs")
  .clean(false)
  .use(
    collections({
      events: {
        sortBy: "date",
        reverse: true
      },
      "brutal-legends": {
        sortBy: "date",
        reverse: true
      },
      articles: {
        sortBy: "date",
        reverse: true
      },
      posts: {
        pattern: "20*/*.md",
        sortBy: "date",
        reverse: true
      }
    })
  )
  .use(
    author({
      name: "Anders Ytterström",
      email: "yttan@fastmail.se"
    })
  )
  .use(
    pagination({
      "collections.posts": {
        perPage: 10,
        layout: "list.hbs",
        path: ":num/index.html"
      }
    })
  )
  .use(
    markdown({
      html: true,
      typographer: false,
      highlight: function(str, lang) {
        if (lang && lang in hljs.languages) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch (__) {}

        return "";
      }
    })
  )
  .use(
    headingsidentifier({
      selector: "h2,h3,h4",
      linkTemplate: "<a class='anchor' href='#%s'>¶</a>",
      position: "right"
    })
  )
  .use(permalinks()) // must be *before* atomfeed, and *after* collections
  .use(
    atomfeed({
      // must be *after* permalinks
      collection: "articles",
      destination: "prenumerera.xml",
      metadata: {
        title: "madr.se",
        subtitle:
          "Anders Ytterström om hårdrock, musik, styrketräning och webbutveckling",
        url: "https://madr.se/"
      }
    })
  )
  .use(
    dateFormatter({
      dates: [
        {
          key: "date",
          format: "YYYY-MM-DD"
        }
      ]
    })
  )
  .use(
    sitemap({
      hostname: "https://madr.se"
    })
  )
  .use(
    partials({
      directory: "layouts/partials"
    })
  )
  .use(
    helpers({
      directory: "layouts/helpers"
    })
  )
  .use(
    layouts({
      engine: "handlebars"
    })
  )
  .use(htmlMinifier())
  .use(
    static({
      src: "./assets",
      dest: "./"
    })
  )
  .build(function(err, _files) {
    if (err) {
      throw err;
    }
  });
