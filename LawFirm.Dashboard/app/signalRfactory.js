
altairApp
    .factory('signalR', ['$rootScope', function ($rootScope) {

     $.connection.hub.url = 'http://localhost:50131/signalr/';

       //$.connection.hub.url = 'http://lawfirm.somee.com/signalr/';

    var $hub = $.connection.chatHub;
    var connection = null;
    var signalR = {

        startHub: function () {
            connection = $.connection.hub.start();
        },

        ////////////////////// SERVER METHODS /////////////////


        sendMessage: function (message, toCID) {
            connection.done(function () {
                $hub.server.sendMessage(message, toCID);
            });
        },

        adminLogin: function (email) {
            connection.done(function () {
                $hub.server.adminLogin(email);
            });
        },

        takeThisUser: function (cid) {
            connection.done(function () {
                $hub.server.takeThisUser(cid);
            });
        },

        removeUser: function (cid) {
            connection.done(function () {
                $hub.server.removeUser(cid);
            });
        },


        
        //////////////////////// CLIENT METHODS ////////////////////    


        userAssigned: function (callback) {
            $hub.client.userAssigned = callback;
        },

        userTaken: function (callback) {
            $hub.client.userTaken = callback;
        },

        removeThisUser: function (callback) {
            $hub.client.removeThisUser = callback;
        },

        recieveMessage: function (callback) {
            $hub.client.recieveMessage = callback;
        },

    }
    return signalR;
}])