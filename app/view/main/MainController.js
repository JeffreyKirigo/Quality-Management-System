/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('QMS.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },

    onLogoutButton: function() {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'form-login'
        });

        Ext.Ajax.request({
            url: 'http://127.0.0.1:8000/logout',

            success: function(response) {
                Ext.Msg.alert("Status", "Logged out");
                // Set the localStorage value to true
                localStorage.removeItem("TutorialLoggedIn");
                // Remove Login Window
                this.getView().destroy();
                // Add the main view to the viewport
                Ext.create({
                    xtype: 'app-main',
                });
            },
            failure: function(response) {
                Ext.Msg.alert("Status", "Ops! Something went wrong!");
            }
        });
    }
});