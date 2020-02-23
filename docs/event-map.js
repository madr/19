(function(g, document) {
  "use strict";

  const mapData = [
        {
            location: [
                59.3185177,
                18.0560855
            ],
            title: "Coraline",
            date: "2020-02-20",
            region: "Stockholm",
            venue: "Folkoperan"
        },
        {
            location: [
                59.3234441,
                18.0988807
            ],
            title: "Opeth",
            date: "2020-01-13",
            region: "Stockholm",
            venue: "Cirkus"
        },
        {
            location: [
                59.3361199,
                18.0660616
            ],
            title: "Star Wars Episode IX - The Rise of the Skywalker",
            date: "2020-01-02",
            region: "Stockholm",
            venue: "Rigoletto"
        },
        {
            location: [
                58.5932846,
                16.1754145
            ],
            title: "December Darkness II",
            date: "2019-12-28",
            region: "Norrköping",
            venue: "Dynamo"
        },
        {
            location: [
                59.3055719,
                18.1196197
            ],
            title: "Joker",
            date: "2019-12-11",
            region: "Stockholm",
            venue: "Filmstaden Sickla"
        },
        {
            location: [
                59.2938881,
                18.0789738
            ],
            title: "Amon Amarth: Berserker World Tour",
            date: "2019-12-07",
            region: "Stockholm",
            venue: "Annexet"
        },
        {
            location: [
                59.2938881,
                18.0789738
            ],
            title: "Wardruna",
            date: "2019-12-01",
            region: "Stockholm",
            venue: "Annexet"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Mayhem + support",
            date: "2019-11-29",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.2934981,
                18.0764466
            ],
            title: "Scandinavian Deathfest",
            date: "2019-10-13",
            region: "Stockholm",
            venue: "Kraken"
        },
        {
            location: [
                59.3205994,
                18.053676
            ],
            title: "Airbourne",
            date: "2019-10-05",
            region: "Stockholm",
            venue: "Münchenbryggeriet"
        },
        {
            location: [
                59.2934981,
                18.0764466
            ],
            title: "Svartidauði",
            date: "2019-09-26",
            region: "Stockholm",
            venue: "Kraken"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "King Diamond",
            date: "2019-08-08",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                60.678416,
                17.1761251
            ],
            title: "Gefle Metal Festival 4",
            date: "2019-07-19",
            region: "Stockholm",
            venue: "Gasklockorna"
        },
        {
            location: [
                56.1174188,
                14.6774666
            ],
            title: "Sweden Rock Festival 28",
            date: "2019-06-05",
            region: "Sölvesborg",
            venue: "Norje"
        },
        {
            location: [
                59.2925432,
                18.0779979
            ],
            title: "Stockholm Slaughter: act III",
            date: "2019-04-27",
            region: "Stockholm",
            venue: "Kraken och Slaktkyrkan"
        },
        {
            location: [
                60.435783,
                22.2037737
            ],
            title: "Close-Up båten 24",
            date: "2019-03-28",
            region: "Finland",
            venue: "Åbo"
        },
        {
            location: [
                59.3184267,
                18.0722233
            ],
            title: "Agatha Christie eller fint folk omkommer sent",
            date: "2019-03-25",
            region: "Stockholm",
            venue: "Södra Teatern"
        },
        {
            location: [
                63.8268491,
                20.2643658
            ],
            title: "House of Metal",
            date: "2019-03-01",
            region: "Umeå",
            venue: "Folkets hus"
        },
        {
            location: [
                59.3344933,
                18.060342
            ],
            title: "Röjar-Ralf kraschar internet",
            date: "2019-02-21",
            region: "Stockholm",
            venue: "Filmstaden Sergel"
        },
        {
            location: [
                59.3344933,
                18.060342
            ],
            title: "Glass",
            date: "2019-02-14",
            region: "Stockholm",
            venue: "Filmstaden Sergel"
        },
        {
            location: [
                59.2938881,
                18.0789738
            ],
            title: "Behemoth: Ecclesia Diabolica Evropa 2019",
            date: "2019-01-28",
            region: "Stockholm",
            venue: "Annexet"
        },
        {
            location: [
                59.3344933,
                18.060342
            ],
            title: "Fantastiska Vidunder: Grindelwalds brott",
            date: "2018-12-05",
            region: "Stockholm",
            venue: "Filmstaden Sergel"
        },
        {
            location: [
                59.334076,
                18.0536626
            ],
            title: "Myrkur",
            date: "2018-12-03",
            region: "Stockholm",
            venue: "Vasateatern"
        },
        {
            location: [
                59.3055719,
                18.1196197
            ],
            title: "Bohemian Rhapsody",
            date: "2018-11-18",
            region: "Stockholm",
            venue: "Filmstaden Sickla"
        },
        {
            location: [
                59.2925432,
                18.0779979
            ],
            title: "Enslaved: Army of the North Star",
            date: "2018-11-11",
            region: "Stockholm",
            venue: "Slaktkyrkan"
        },
        {
            location: [
                59.3320749,
                18.0627666
            ],
            title: "Snövit för vuxna",
            date: "2018-11-01",
            region: "Stockholm",
            venue: "Kulturhuset Stadsteatern"
        },
        {
            location: [
                59.3361199,
                18.0660616
            ],
            title: "The Nun",
            date: "2018-09-08",
            region: "Stockholm",
            venue: "Rigoletto"
        },
        {
            location: [
                59.3184267,
                18.0722233
            ],
            title: "Vlad Spetsaren eller Blod, Spett och Pålar",
            date: "2018-08-28",
            region: "Stockholm",
            venue: "Södra Teatern"
        },
        {
            location: [
                54.0215563,
                9.3704717
            ],
            title: "Wacken Open Air 29",
            date: "2018-08-02",
            region: "Tyskland",
            venue: "Wacken"
        },
        {
            location: [
                63.1790683,
                14.6336828
            ],
            title: "Storsjöyran",
            date: "2018-07-27",
            region: "Östersund",
            venue: "Stortorget"
        },
        {
            location: [
                60.678416,
                17.1761251
            ],
            title: "Gefle Metal Festival",
            date: "2018-07-13",
            region: "Gävle",
            venue: "Gasklockorna"
        },
        {
            location: [
                56.1174188,
                14.6774666
            ],
            title: "Sweden Rock Festival",
            date: "2018-06-06",
            region: "Sölvesborg",
            venue: "Norje"
        },
        {
            location: [
                60.0790199,
                15.0165886
            ],
            title: "Gamrocken",
            date: "2018-05-24",
            region: "Grängesberg",
            venue: "Folkets park"
        },
        {
            location: [
                59.3183842,
                18.0721215
            ],
            title: "Ulver",
            date: "2018-05-19",
            region: "Stockholm",
            venue: "Kägelbanan"
        },
        {
            location: [
                59.3371449,
                18.0654985
            ],
            title: "Batuschka",
            date: "2018-05-11",
            region: "Stockholm",
            venue: "Nalen"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Stockholm Slaughter",
            date: "2018-04-27",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                63.8268491,
                20.2643658
            ],
            title: "House of Metal",
            date: "2018-03-02",
            region: "Umeå",
            venue: "Folkets hus"
        },
        {
            location: [
                60.6752604,
                17.1434428
            ],
            title: "LIK",
            date: "2018-02-23",
            region: "Gävle",
            venue: "Dirty Harry"
        },
        {
            location: [
                59.3371449,
                18.0654985
            ],
            title: "Månegarm: Härnad i Norden",
            date: "2018-02-02",
            region: "Stockholm",
            venue: "Nalen"
        },
        {
            location: [
                59.2934981,
                18.0764466
            ],
            title: "Watain",
            date: "2018-01-05",
            region: "Stockholm",
            venue: "Kraken"
        },
        {
            location: [
                59.3146433,
                18.0296814
            ],
            title: "Solstafir",
            date: "2017-12-20",
            region: "Stockholm",
            venue: "Debaser Strand"
        },
        {
            location: [
                60.678416,
                17.1761251
            ],
            title: "Dirkschneider: back to the roots",
            date: "2017-11-18",
            region: "Gävle",
            venue: "Gasklockorna"
        },
        {
            location: [
                60.6773376,
                17.1403053
            ],
            title: "Apocalypse Orchestra",
            date: "2017-11-18",
            region: "Gävle",
            venue: "Rack n Roll"
        },
        {
            location: [
                60.435783,
                22.2037737
            ],
            title: "Close-Up båten 21",
            date: "2017-10-26",
            region: "Finland",
            venue: "Åbo"
        },
        {
            location: [
                59.3233591,
                18.0942014
            ],
            title: "Ghost",
            date: "2017-09-29",
            region: "Stockholm",
            venue: "Gröna lund"
        },
        {
            location: [
                59.3233591,
                18.0942014
            ],
            title: "Korn",
            date: "2017-08-17",
            region: "Stockholm",
            venue: "Gröna lund"
        },
        {
            location: [
                58.5727038,
                13.3660783
            ],
            title: "Grift: Tredingsriten",
            date: "2017-08-05",
            region: "Götene",
            venue: "Medelplana bygdegård"
        },
        {
            location: [
                59.3233591,
                18.0942014
            ],
            title: "Megadeth",
            date: "2017-07-30",
            region: "Stockholm",
            venue: "Gröna lund"
        },
        {
            location: [
                59.3233591,
                18.0942014
            ],
            title: "Alice Cooper",
            date: "2017-07-27",
            region: "Stockholm",
            venue: "Gröna lund"
        },
        {
            location: [
                60.678416,
                17.1761251
            ],
            title: "Gefle Metal Festival",
            date: "2017-07-14",
            region: "Gävle",
            venue: "Gasklockorna"
        },
        {
            location: [
                59.3233591,
                18.0942014
            ],
            title: "Rob Zombie",
            date: "2017-06-20",
            region: "Stockholm",
            venue: "Gröna lund"
        },
        {
            location: [
                60.6752604,
                17.1434428
            ],
            title: "Arkaid",
            date: "2017-06-17",
            region: "Gävle",
            venue: "Dirty Harry"
        },
        {
            location: [
                59.3350788,
                18.06081
            ],
            title: "The Horror: Kungliga filharmonikerna med Katarinakören",
            date: "2017-06-09",
            region: "Stockholm",
            venue: "Konserthuset"
        },
        {
            location: [
                62.3863965,
                17.3051202
            ],
            title: "Merciless",
            date: "2017-05-19",
            region: "Sundsvall",
            venue: "Club Deströyer"
        },
        {
            location: [
                63.8268491,
                20.2643658
            ],
            title: "House of Metal",
            date: "2017-03-03",
            region: "Umeå",
            venue: "Folkets hus"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Amon Amarth",
            date: "2016-12-17",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.2938881,
                18.0789738
            ],
            title: "Opeth",
            date: "2016-11-05",
            region: "Stockholm",
            venue: "Annexet"
        },
        {
            location: [
                60.6187955,
                15.6558542
            ],
            title: "Sabaton Open Air",
            date: "2016-08-17",
            region: "Falun",
            venue: "Lugnets skidstadion"
        },
        {
            location: [
                63.1752438,
                14.6385218
            ],
            title: "Raubtier",
            date: "2016-03-05",
            region: "Östersund",
            venue: "Gamla Teatern"
        },
        {
            location: [
                63.8268491,
                20.2643658
            ],
            title: "House of Metal Pre-party",
            date: "2014-02-08",
            region: "Umeå",
            venue: "Folkets hus"
        },
        {
            location: [
                63.1790683,
                14.6336828
            ],
            title: "Storsjöyran",
            date: "2013-07-27",
            region: "Östersund",
            venue: "Stortorget"
        },
        {
            location: [
                59.3727032,
                17.998043
            ],
            title: "Iron Maiden",
            date: "2013-07-13",
            region: "Stockholm",
            venue: "Friends Arena"
        },
        {
            location: [
                60.678416,
                17.1761251
            ],
            title: "Getaway Rock Festival",
            date: "2012-07-05",
            region: "Gävle",
            venue: "Gasklockorna"
        },
        {
            location: [
                57.7168041,
                12.0140512
            ],
            title: "Agalloch",
            date: "2012-04-08",
            region: "Göteborg",
            venue: "Fängelset"
        },
        {
            location: [
                63.1790683,
                14.6336828
            ],
            title: "Storsjöyran",
            date: "2011-07-20",
            region: "Östersund",
            venue: "Stortorget"
        },
        {
            location: [
                60.6187955,
                15.6558542
            ],
            title: "Rockstad Falun",
            date: "2011-06-02",
            region: "Falun",
            venue: "Lugnets skidstadion"
        },
        {
            location: [
                63.1752438,
                14.6385218
            ],
            title: "Sabaton",
            date: "2010-12-09",
            region: "Östersund",
            venue: "Gamla Teatern"
        },
        {
            location: [
                57.7000546,
                11.9914906
            ],
            title: "Blind Guardian",
            date: "2010-10-22",
            region: "Göteborg",
            venue: "Brewhouse"
        },
        {
            location: [
                61.2902566,
                16.8318805
            ],
            title: "Rockweekend",
            date: "2010-07-08",
            region: "Söderhamn",
            venue: "Moheds flygfält"
        },
        {
            location: [
                63.1794111,
                14.6372703
            ],
            title: "Amon Amarth",
            date: "2009-10-06",
            region: "Östersund",
            venue: "Gamla Tingshuset"
        },
        {
            location: [
                59.6505598,
                12.617908
            ],
            title: "Arvikafestivalen",
            date: "2009-07-02",
            region: "Arvika",
            venue: "Folkparken"
        },
        {
            location: [
                57.7162016,
                11.9576063
            ],
            title: "Metaltown",
            date: "2009-06-26",
            region: "Göteborg",
            venue: "Frihamnen"
        },
        {
            location: [
                63.1748576,
                14.638434
            ],
            title: "Sabaton",
            date: "2008-11-20",
            region: "Östersund",
            venue: "Plaza"
        },
        {
            location: [
                63.1794111,
                14.6372703
            ],
            title: "AeoN",
            date: "2008-09-12",
            region: "Östersund",
            venue: "Gamla Tingshuset"
        },
        {
            location: [
                61.2231209,
                16.5771097
            ],
            title: "Rockweekend",
            date: "2008-07-18",
            region: "Bollnäs",
            venue: "Kilafors herrgård"
        },
        {
            location: [
                57.7162016,
                11.9576063
            ],
            title: "Metaltown",
            date: "2008-06-27",
            region: "Göteborg",
            venue: "Frihamnen"
        },
        {
            location: [
                62.387408,
                17.3074155
            ],
            title: "6th Awakening",
            date: "2007-11-24",
            region: "Sundsvall",
            venue: "Red Rock"
        },
        {
            location: [
                62.387408,
                17.3074155
            ],
            title: "Watain",
            date: "2007-09-24",
            region: "Sundsvall",
            venue: "Red Rock"
        },
        {
            location: [
                57.6969266,
                11.971289
            ],
            title: "Schwarzmeer-don Kosaken",
            date: "2007-08-04",
            region: "Göteborg",
            venue: "Vasakyrkan"
        },
        {
            location: [
                57.7162016,
                11.9576063
            ],
            title: "Metaltown",
            date: "2007-06-30",
            region: "Göteborg",
            venue: "Frihamnen"
        },
        {
            location: [
                57.696232,
                11.982852
            ],
            title: "Göteborgsmusiken: John Williams - filmusikens gigant",
            date: "2007-05-04",
            region: "Göteborg",
            venue: "Artisten"
        },
        {
            location: [
                57.7038818,
                11.9749784
            ],
            title: "Kamelot",
            date: "2007-01-05",
            region: "Göteborg",
            venue: "Trädgårn"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Blind Guardian",
            date: "2006-09-24",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                57.4934295,
                15.8583985
            ],
            title: "Gates of Metal",
            date: "2006-08-04",
            region: "Hultsfred",
            venue: "Hultsfreds Hembygdspark"
        },
        {
            location: [
                64.7495918,
                20.9499729
            ],
            title: "Trästocksfestivalen",
            date: "2006-07-20",
            region: "Skelleftå",
            venue: "Nordanå"
        },
        {
            location: [
                57.7162016,
                11.9576063
            ],
            title: "Metaltown",
            date: "2006-07-07",
            region: "Göteborg",
            venue: "Frihamnen"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "In Flames",
            date: "2004-10-27",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.2935752,
                18.0813614
            ],
            title: "Sarah Brightman",
            date: "2004-09-23",
            region: "Stockholm",
            venue: "Globen"
        },
        {
            location: [
                59.0287885,
                12.2105089
            ],
            title: "2000 Decibel",
            date: "2004-05-21",
            region: "Bengtsfors",
            venue: "Folkets Park"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Dimmu Borgir",
            date: "2003-10-27",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Nightwish",
            date: "2002-11-16",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Blind Guardian",
            date: "2002-09-08",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Stratovarius",
            date: "2002-03-23",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Gamma Ray",
            date: "2001-10-30",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.3009661,
                18.086805
            ],
            title: "Hammerfall",
            date: "2001-01-12",
            region: "Stockholm",
            venue: "Fryshuset"
        },
        {
            location: [
                59.3444323,
                18.07061
            ],
            title: "Iron Maiden",
            date: "2000-06-27",
            region: "Stockholm",
            venue: "Stadion"
        }
  ]

  // insert Leaflet styles (<link>) to <head> and <script> to
  // bottom of <body>, and initiate the map when the assets have
  // loaded.
  var install = function() {
    var styles, leaflet;

    styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css";
    styles.integrity =
      "sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==";
    styles.crossOrigin = "";

    document.head.appendChild(styles);

    leaflet = document.createElement("script");
    leaflet.src = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js";
    leaflet.integrity =
      "sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==";
    leaflet.crossOrigin = "";
    leaflet.async = true;
    leaflet.onload = function() {
      init(mapData);
    };

    document.body.appendChild(leaflet);
  };

  // inititate the map.
  // create markers for all events: one marker per venue. Display all
  // events on each venue through a popup by clicking on the marker.
  // set bounds to have all markers visible.
  var init = function(mapData) {
    var events,
      markers = {},
      L = g.L;

    if (L) {
      // create map and set initial bounds
      events = L.map("leaflet", { zoomDelta: 0.25, zoomSnap: 0 }).fitBounds(
        mapData.map(function(e) {
          return e.location;
        })
      );

      // use OpenStreetMap tile layer: it's free!
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
        foo: "bar",
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
      }).addTo(events);

      // group events by venue
      mapData.forEach(function(e) {
        if (markers[e.venue]) {
          markers[e.venue].events.push(e.date + " - " + e.title);
        } else {
          markers[e.venue] = {
            region: e.region,
            location: e.location,
            events: [e.date + " - " + e.title]
          };
        }
      });

      // create markers
      for (var m in markers) {
        if (markers.hasOwnProperty(m)) {
          L.marker(markers[m].location)
            .addTo(events)
            .bindPopup(
              "<strong style='color: black'>" +
                m +
                ", " +
                markers[m].region +
                "</strong><br>" +
                markers[m].events.join("<br>")
            );
        }
      }
    }
  };

  install();
})(this, document);