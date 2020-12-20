Ext.setup({
    onReady: function(){

			new Ext.TabPanel({
            fullscreen: true,
            sortable: true,
            items: [{
                title: 'Cu',
                html: '<p>Tab 1. Cube</p>',
                cls: 'tab',
								animation: {
            			type: 'cube',
            			duration: 400
        				}
  
            }, {
                title: 'P',
                html: '<p>Tab 2. Pop</p>',
                cls: 'tab',
								animation: {
            			type: 'pop',
            			duration: 400
        				}

            }, {
                title: 'Fa',
                html: '<p>Tab 3. Fade</p>',
                cls: 'tab',
								animation: {
            			type: 'fade',
            			duration: 600
        				}
            },{
                title: 'Fl',
                html: '<p>Tab 4. Flip</p>',
                cls: 'tab',
								animation: {
            			type: 'flip',
            			duration: 400
        				}
            },{
                title: 'Sl',
                html: '<p>Tab 5. Slide</p>',
                cls: 'tab',
								animation: {
            			type: 'slide',
            			duration: 400
        				}
            }
						]
        });
}
});
