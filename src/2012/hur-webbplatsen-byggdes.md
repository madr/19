---
title: Hur nya madr.se byggdes
date: 2012-07-22
template: post.html
layout: single.hbs
collection: articles
---
Madr.se har varit det ständiga offret när jag vill lära mig något nytt. Den nyaste versionen av sajten är inget undantag.

## Tack och adjö, Posterous

Jag har verkligen ingenting ont att säga om [Posterous](http://madrse.posterous.com) då det verktyget hade mycket positiv inverkan på mitt bloggande under två år. Jag känner dock att jag saknat möjligheten att öppna huven och skruva på (läs: pilla på) saker. 

Alla gamla inlägg som tidigare låg på Posterous är kvar på sina gamla permalänkar, främst eftersom jag inte har tillåtelse att sätta den här sajten till huvuddomänen då det kräver åtkomst till `CNAME`.

Jag är inte beredd att gå tillbaka till ett eget webbramverk från scratch som driftas på en egen server i vardagsrummet: snarare vill jag välja något som **är utanför min konfortzon** och som **verkar vara riktigt häftigt och väl igenomtänkt**. 

## Utvecklat i Django

Därav föll mitt val på  **Django** då dess slogan [The Web framework for perfectionists with deadlines](https://www.djangoproject.com/) är alldeles för provocerande för att motstå. Python är ingenting jag använt till stor utsträckning, men det är ett språk som jag alltid haft en bra magkänsla inför.

Att få ihop grundläggande bloggfunktionalitet var **busenkelt**. Helt på köpet fick jag ett **minimalt, men ändå funktionsdugligt** CMS för att skriva och hantera inlägg.

Tre saker jag gillar med Django:

 * Mallspråket, som lyckas med bragden att göra sitt jobb utan att vara i vägen eller bromsa.
 * Konventionerna för filer och kataloger. Det går att hitta saker spontant bara genom att se hur saker är döpta.
 * Definitionen av url-routes. Ett enkelt regex.

## Drift i Heroku och Amazon S3

[Heroku](http://heroku.com) är något jag använder mycket såväl i jobbet som för privata projekt, och en av anledningarna till att den här sajten blev av är för att Heroku sedan en tid stödjer system utvecklade i Python. 

På Heroku använder jag följande addons:

 * **Scheduler**, för schemalagda bakgrundsjobb (t ex cachning av sidspalterna på den här sajten).

För att inte lasta Heroku mer än nödvändigt ligger mina statiska filer (CSS, JavaScript, bilder) i [Amazon S3](http://aws.amazon.com/s3/) där jag enkelt kan hantera expires-headers och annat.

## Mobile first

I dagar där följsam design är poppis är det en yrkesskyldighet att applicera media queries. Jag har dock även valt att köra [Mobile first](http://www.lukew.com/ff/entry.asp?933) genom att applicera följande principer:

 * Minimal vikt. Inga CSS- eller JS-bibliotek, bara handskriven, domänspecifik kod som dessutom är minifierad. CSS3 istället för CSS-bilder.
 * Stor typografi för löptext med (relativt) hög kontrast. [Web Design Manifesto 2012](http://www.zeldman.com/2012/05/18/web-design-manifesto-2012/)
 * Favikoner och diverse anpassningar (`viewport` och annat) för webbläsare i mobiler.
 * Appcache-manifest för att erbjuda permanent lagring av CSS, favikoner och JavaScript.

## Kort om kod

Jag validerar och lintar sajtens frontend-kod med [Grunt](http://gruntjs.com/). Grunt används även för att ladda upp filer till Amazon S3. Här är min Gruntfile:

    module.exports = function(grunt) {
      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('../../../Dropbox/madrse/grunt-aws.json'),
        s3: {
          options: {
            key: '<%= aws.key %>',
            secret: '<%= aws.secret %>',
            bucket: '<%= aws.bucket %>',
            access: 'public-read',
            headers: {
              // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
              "Cache-Control": "max-age=630720000, public",
              "Expires": new Date(Date.now() + 63072000000).toUTCString()
            }
          },
          dev: {
            options: {
              maxOperations: 20
            },
            upload: [
              {
                src: '../../../Dropbox/madrse/assets/*.png',
                dest: 'assets/'
              },
              {
                src: 'madrse.appcache',
                dest: 'madrse.appcache'
              },
              {
                src: 'admin/*',
                dest: 'admin/'
              },
              {
                src: 'img/*.png',
                dest: 'img/'
              },
              {
                src: 'dist/*',
                dest: 'dist/'
              }
            ]
          }
        },
        csslint: {
          strict: {
            src: ['dist/design.css']
          }
        },
        devserver: {
          "options": {
            "port": 8888
          },
          server: {}
        },
        less: {
          development: {
            files: {
              "dist": "src/less"
            },
            files: {
              "dist/design.css": "src/less/*.less"
            }
          },
          production: {
            options: {
              cleancss: true
            },
            files: {
              "dist/design.min.css": "src/less/*.less"
            }
          }
        },
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'dist/app.js',
            dest: 'dist/app.min.js'
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-csslint');
      grunt.loadNpmTasks('grunt-contrib-less');
      grunt.loadNpmTasks('grunt-devserver');
      grunt.loadNpmTasks('grunt-s3');
      
      grunt.registerTask('deploy', ['less:production', 'less:development', 's3']);
      grunt.registerTask('test', ['csslint']);
      grunt.registerTask('default', ['test']);
    };

Gällande CSS använder jag senaste kopian av [site.less](https://gist.github.com/madr/6622974), en gist jag ständigt uppdaterar och förbättrar.

Koden i produktion är minifierad enligt rekommendation, men för den som är intresserad finns även orginalen uppladdade på S3:

 * [CSS för nya madr.se](http://madrse.s3.amazonaws.com/dist/design.css)

## Tack

Ära den som äras bör. Jag skapade den här sajten utifrån några principer, de främsta här nedan:

* Ethan Schoonover, för färgsättningen [Solarized](http://ethanschoonover.com/solarized).
* Rachel Andrew, för stor inspiration: [Stop solving problems you don't yet have](http://www.rachelandrew.co.uk/archives/2012/03/21/stop-solving-problems-you-dont-yet-have/).
* All samlad och delad visdom i [HTML5 Boilerplate](http://html5boilerplate.com).
* Nicolas Gallagher & Jonathan Neal för [normalise.css](necolas.github.com/normalize.css/).