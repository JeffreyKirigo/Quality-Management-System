Ext.define('QMS.store.States', {
    extend: 'Ext.data.Store',
    alias: 'store.states',
    model: 'QMS.model.State',
    storeId: 'states',

    data: {
        items: [
            { "abbr": "AL", "state": "Alabama" },
            { "abbr": "AK", "state": "Alaska" },
            { "abbr": "AZ", "state": "Arizona" }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }


});