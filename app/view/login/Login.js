    Ext.define('QMS.view.login..loginForm', {
        extend: 'Ext.window.Window',
        xtype: 'form-login',

        requires: [
            'QMS.view.login.LoginController',
            'Ext.form.Panel',
        ],

        title: 'Login',
        frame: true,
        width: 320,
        bodyPadding: 10,
        floating: true,

        defaultType: 'textfield',

        items: [{
            allowBlank: false,
            fieldLabel: 'User ID',
            name: 'user',
            emptyText: 'user id',
            msgTarget: 'under'
        }, {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password'
        }, {
            xtype: 'checkbox',
            fieldLabel: 'Remember me',
            name: 'remember'
        }],

        buttons: [{
                text: 'login',
                handler: 'onLoginClick'
            },
            { text: 'Login' }
        ],

        defaults: {
            anchor: '100%',
            labelWidth: 120
        }
    });