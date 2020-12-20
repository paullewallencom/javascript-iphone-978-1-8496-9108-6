Ext.setup({
    onReady: function(options) {
        var datePicker = new Ext.DatePicker({
						yearFrom: 2000,
						yearTo: 2020,
            value: {
                day: 13,
                month: 6,
                year: 2011
            }
        });
        
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
                text: 'Click for DatePicker',
                handler: function() {
                    datePicker.show();
                }
            }]
        });
    }
});
