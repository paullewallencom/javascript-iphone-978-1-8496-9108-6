Ext.setup({
    onReady: function() {
        new Ext.TabPanel({
            fullscreen: true,
            sortable: true,
            items: [{
                title: 'Tab 1',
                html: '<p>Content for tab 1</p>',
                cls: 'card1'
            }, {
                title: 'Tab 2',
                html: '<span>Here is the tab 2</span>',
                cls: 'card2'
            }, {
                title: 'Tab 3',
                html: 'Third tab',
                cls: 'card3'
            }]
        });
    }
});
