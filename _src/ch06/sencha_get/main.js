Ext.setup({
	onReady: function() {
		        
	var panel = new Ext.Panel({
	    fullscreen: true,
	    layout: {
	        type: 'vbox',
	        align: 'center',
	        pack: 'center'
	    },
	    items: [{
	        xtype: 'button',
	        ui: 'normal',
	        text: 'Get data!',
	        handler: function() {
             Ext.Ajax.request({
                 url: 'remote.php',
                 success: function(response, opts) {
						 				alert("Request was done!");
                 }
             });
	        }
	    }]
	});
	}
});

