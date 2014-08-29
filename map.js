 var map = L.map('map').setView([41, -77], 5);

// add an OpenStreetMap tile layer
            L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors,Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>'
            }).addTo(map);
    
    L.geoJson(cities, {
        onEachFeature: function(feature, latlng) {
           return L.marker(latlng);
        }
    }).addTo(map);