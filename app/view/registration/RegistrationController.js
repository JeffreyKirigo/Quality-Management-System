Ext.define('QMS.view.registration.RegistrationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registration',

    onRegistration: function(btn) {
        var form = btn.up('form-register');
        form.submit({
            method: "POST",
            url: "http://127.0.0.1:8000/register",
            success: function(frm, action) {
                //alert('Updated Succesifully');
                Ext.Msg.alert("Status", "Record added successfully.");
                Ext.create({
                    xtype: 'form-login',
                });
                form.destroy();

            },
            failure: function() {
                // alert('Failure');
                Ext.Msg.alert("Status", "Registration Failed.");
                form.destroy();
            },
        });
        //Destroy login form
        //create register form
    },
    backToLoggin: function() {
        this.getView().destroy();
        Ext.create({
            xtype: 'form-login',
        });
    }

});