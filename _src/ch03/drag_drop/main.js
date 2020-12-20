Ext.setup({
    onReady: function(){
        new Ext.util.Draggable('draggable', {
            revert: true
        });

        new Ext.util.Droppable('droppable', {
            validDropMode: 'contains',
            listeners: {
                drop: function(droppable, draggable, e) {
                    draggable.el.setHTML('Dropped!');
                }
            }
        });
    }
});
