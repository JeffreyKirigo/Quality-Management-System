Ext.define('QMS.view.registration.RegistrationForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-register',

    controller: 'registration',

    frame: true,
    title: 'Register',
    bodyPadding: 10,
    scrollable: true,
    width: 355,
    floating: true,
    autoShow: true,
    jsonSubmit: true,


    fieldDefaults: {
        labelAlign: "right",
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'fieldset',
        title: 'User Info',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [
            { allowBlank: false, fieldLabel: 'User ID', name: 'user_id', emptyText: 'user id' },
            { allowBlank: false, fieldLabel: 'Password', name: 'password', emptyText: 'password', inputType: 'password' },
            // { allowBlank: false, fieldLabel: 'Verify', name: 'password', emptyText: 'password', inputType: 'password' }
        ]
    }, {
        xtype: 'fieldset',
        title: 'Contact Information',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'First Name',
            emptyText: 'First Name',
            name: 'first_name'
        }, {
            fieldLabel: 'Last Name',
            emptyText: 'Last Name',
            name: 'last_name'
        }, {
            fieldLabel: 'Company',
            name: 'company'
        }, {
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        }, {
            xtype: 'combobox',
            fieldLabel: 'State',
            name: 'state',
            store: {
                type: 'states'
            },
            valueField: 'abbr',
            displayField: 'state',
            typeAhead: true,
            queryMode: 'local',
            emptyText: 'Select a state...'
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'date_of_birth',
            allowBlank: false,
            maxValue: new Date()
        }]
    }],

    buttons: [{
        text: 'Register',
        disabled: true,
        formBind: true,
        listeners: {
            click: 'onRegistration'
        }
    }, {
        html: 'Already have an account?',
        text: 'log in',
        listeners: {
            click: 'backToLoggin'
        }
    }]
});