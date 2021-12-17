Ext.define('QMS.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(btn) {
        var form = btn.up('login');
        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);
        if (localStorage) {

            form.destroy();
            Ext.create({
                xtype: 'app-main',
            });
            console.log('success');

        }
        // Remove Login Window

        // Add the main view to the viewport


    },

});