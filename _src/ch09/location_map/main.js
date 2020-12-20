Ext.setup({
    onReady: function() {
        
        var map = new Ext.Map({
            title: 'Map',
            getLocation: true,
            mapOptions: {
                zoom: 16
            }
        });

        var panel = new Ext.Panel({
            fullscreen: true,
            items: [map]
        });

        var refresh = function() {
            var coords = map.geo.coords;
            var position = new google.maps.LatLng(coords.latitude, coords.longitude);
            setMarker(position);
				};

        var setMarker = function(position) {
            var marker = new google.maps.Marker({
                map: map.map,
                position: position
            });
        };

        map.geo.on('update', refresh);
    }
});
