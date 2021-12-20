    Ext.define('QMS.view.login.Login', {
        extend: 'Ext.form.Panel',
        xtype: 'form-login',


        controller: 'login',

        title: 'Login',
        frame: true,
        width: 350,
        bodyPadding: 10,
        floating: true,
        autoShow: true,
        position: 'center',
        jsonSubmit: true,



        defaultType: 'textfield',

        items: [{
            allowBlank: false,
            fieldLabel: 'User ID',
            name: 'user_id',
            emptyText: 'user id',
            msgTarget: 'under'
        }, {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'password',
            emptyText: 'password',
            inputType: 'password'
        }, {
            xtype: 'checkbox',
            fieldLabel: 'Remember me',
            name: 'remember_token'
        }],

        buttons: [{
                text: 'login',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                },
            },
            {
                text: 'Register',
                handler: 'onRegisterClick'
            }
        ],

        defaults: {
            anchor: '100%',
            labelWidth: 120
        }
    });