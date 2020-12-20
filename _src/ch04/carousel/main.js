Ext.setup({
     onReady: function() {
        var carousel = new Ext.Carousel({
            defaults: {
                cls: 'card'
            },
            items: [{
                html: '<img src="pic01.png"/>'
            },
            {
                html: '<img src="pic02.png"/>'
            },
            {
                html: '<img src="pic03.png"/>'
            }]
        });
        
        new Ext.Panel({
            fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1
            },
            items: [carousel]
        });
    }
});

