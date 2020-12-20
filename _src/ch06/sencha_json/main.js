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
	        text: 'Get JSON',
	        handler: function() {
             Ext.Ajax.request({
                 url: 'data.json',
                 success: function(response, opts) {
										var data = Ext.util.JSON.decode(response.responseText.trim());
										alert("User: " + data.username + "; Age:" + data.age);
                 }
             });
	        }
	    }]
	});
	}
});

