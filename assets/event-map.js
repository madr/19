(function(g, document, mapData) {
  "use strict";

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
      init();
    };

    document.body.appendChild(leaflet);
  };

  // inititate the map.
  // create markers for all events: one marker per venue. Display all
  // events on each venue through a popup by clicking on the marker.
  // set bounds to have all markers visible.
  var init = function() {
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
})(this, document, mapData);
