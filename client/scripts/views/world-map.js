Template.worldMap.onRendered(function() {
  var self  = this;
  this.map  = createMap();
  this.attackLayers = [];

  //addHoneypot(51.508, -0.11);
  //addHoneypot(43, -87);

  setTimeout(function() { // TODO: sync this properly
    InternetHoneypots.find().fetch().forEach(function(elem) {
      var coords = Meteor.settings.public.coords[elem.location];
      addHoneypot(coords[0], coords[1]);
    });
  }, 1000);

  Streamy.on('attacks', function(d) {
    paintAttacks(d.data);
  });

  Streamy.on('new_honeypot', function(d) {
    addHoneypot(d.data[0], d.data[1]);
  });

  function createMap() {
    var map;
    L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
    map = L.map('worldMap',{
      fullscreenControl: true
    }).setView([40, -4], 2);
    L.tileLayer.provider('CartoDB.Positron').addTo(map);
    return map;
  }

  function addHoneypot (lat, lon) {
    var customMarker = L.AwesomeMarkers.icon({
      icon: 'empire',
      markerColor: 'darkred',
      prefix: 'fa'
    });

    L.marker([lat, lon], {icon: customMarker}).addTo(self.map);
  }

  function paintAttacks(attacks) {
    // python send.py attacks '[["USA", 5000], ["ESP", 20], ["ITA", 500]]'
    // Remove previous layers, if any
    console.log(self.map);
    if (typeof attackLayers != 'undefined') {
      self.attackLayers.forEach(function(layer) {
        map.removeLayer(layer);
      });
    }
    self.attackLayers = [];

    attacks.forEach(function(attack) {
      $.getJSON('countries/' + attack[0] + '.geo.json', function(data) {
        var layer = L.geoJson(data, {style: style(attack[1])});
        self.attackLayers.push(layer);
        layer.addTo(self.map);
      });
    });
  }
  function getColor(d) {
      return d > 1000 ? '#800026' :
             d > 500  ? '#BD0026' :
             d > 200  ? '#E31A1C' :
             d > 100  ? '#FC4E2A' :
             d > 50   ? '#FD8D3C' :
             d > 20   ? '#FEB24C' :
             d > 10   ? '#FED976' :
                        '#FFEDA0';
  }

  function style(density) {
      return {
          fillColor: getColor(density),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
      };
  }
});
