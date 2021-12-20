Ext.define('QMS.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(btn) {
        var form = btn.up('form-login');
        form.submit({

            url: "http://127.0.0.1:8000/login",
            success: function(frm, action) {

                Ext.Msg.alert("Status", "Logged in successfully.");

                // Set the localStorage value to true
                localStorage.setItem("TutorialLoggedIn", true);

                // Remove Login Window
                form.destroy();

                // Add the main view to the viewport
                Ext.create({
                    xtype: 'app-main',
                });
            },
            failure: function() {
                // alert('Failure');
                Ext.Msg.alert("Status", "Loggin Failed, Invalid details");
            },
        });
    },
    onRegisterClick: function() {
        //Destroy login form
        this.getView().destroy();

        //create register form
        Ext.create({
            xtype: 'form-register',
        });


    }

});