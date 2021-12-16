Ext.define('QMS.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(btn) {
        var form = btn.up('login');
        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);
        if (localStorage) {
            Ext.Ajax.request({
                url: 'http://127.0.0.1:8000/calltoback',
                success: function(response) {
                    form.destroy();
                    Ext.create({
                        xtype: 'app-main',
                    });
                    console.log('success');
                },
                failure: function() {
                    alert("fail");
                },
            });

        }
        // Remove Login Window

        // Add the main view to the viewport


    },

});