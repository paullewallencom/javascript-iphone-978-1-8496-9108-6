Ext.setup({
     onReady: function() {
new Ext.Panel({
    fullscreen: true,
    items: [
        {
            xtype: 'audio',
            url  : "frogs.mp3",
		html: '<p id="title">Playing Audio</p>'
        }
    ],
		layout: {
                type: 'vbox',
                pack: 'center'
            },
});
}
});

