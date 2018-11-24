
altairApp
    .factory('signalR', ['$rootScope', function ($rootScope) {

    $.connection.hub.url = 'http://localhost:50131/signalr/';

    var $hub = $.connection.chatHub;
    var connection = null;
    var signalR = {

        startHub: function () {
            console.log("Connection Estabished");
            connection = $.connection.hub.start();
        },

        ////////////////////// SERVER METHODS /////////////////

        //StartChat: function (username, email) {
        //    connection.done(function () {
        //        $hub.server.startChat(username, email);
        //    });
        //},

        //sendMessage: function (message, toCID) {
        //    connection.done(function () {
        //        $hub.server.sendMessage(message, toCID);
        //    });
        //},

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

        
        //////////////////////// CLIENT METHODS ////////////////////    


        userAssigned: function (callback) {
            $hub.client.userAssigned = callback;
        },

        userTaken: function (callback) {
            $hub.client.userTaken = callback;
        },

        //getAdminData: function (callback) {
        //    $hub.client.getAdminData = callback;
        //},

        //recieveMessage: function (callback) {
        //    $hub.client.recieveMessage = callback;
        //},

    }
    return signalR;
}])