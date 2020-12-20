Ext.setup({
     onReady: function() {
new Ext.Panel({
    fullscreen: true,
    items: [
        {
            xtype: 'video',
            url  : "video.m4v",
						width: 320,
						height: 240,
        }
    ],
		layout: {
                type: 'vbox',
                pack: 'center'
            },
});
}
});

