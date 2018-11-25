'use strict';

app.factory("signalR", ['$rootScope', '$', function ($rootScope, $) {

    $.connection.hub.url = 'http://localhost:50131/signalr/';

    var $hub = $.connection.chatHub;
    var connection = null;
    var signalR = {

        startHub: function () {
            console.log("started");
            connection = $.connection.hub.start();
        },

        ////////////////////// SERVER METHODS/////////////////

        startChat: function (username, email) {
            connection.done(function () {
                $hub.server.startChat(username, email);
            });
        },

        sendMessage: function (message, toCID) {
            connection.done(function () {
                $hub.server.sendMessage(message, toCID);
            });
        },

        sendMessageBroadCast: function (message) {
            connection.done(function () {
                $hub.server.sendMessageBroadCast(message);
            });
        },

        

        //adminLogin: function (email) {
        //    connection.done(function () {
        //        $hub.server.adminLogin(email);
        //    });
        //},

        //////////////////////// CLIENT METHODS ////////////////////            

        //userAssigned: function (callback) {
        //    $hub.client.userAssigned = callback;
        //},

        getAdminData: function (callback) {
            $hub.client.getAdminData = callback;
        },

        recieveMessage: function (callback) {
            $hub.client.recieveMessage = callback;
        },

    }
    return signalR;
}]);
