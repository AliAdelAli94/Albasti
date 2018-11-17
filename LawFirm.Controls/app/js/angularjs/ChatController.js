
app.controller("chatController", function ($scope, $rootScope) {

    var msgContent = document.getElementById("msgContent");
    msgContent.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            $scope.sendMessage();
        }
    });


    signalR.startHub();

    $scope.client = {};
    $scope.messages = [];
    $scope.startChat = function () {

        if ($scope.client) {
            if ($scope.client.username && $scope.client.email) {
                signalR.StartChat($scope.client.username, $scope.client.email);
            }
        }
    };

    signalR.recieveMessage(function (msg, fromCID) {

        $scope.messages.push({ content: msg, dir: 0 });
        $scope.$apply();

    });


    signalR.getAdminData(function (cid) {

        $scope.adminConnectionID = cid;

    });


    $scope.sendMessage = function (e) {
        $scope.messages.push({ content: $scope.msgContent, dir: 1 })
        signalR.sendMessage($scope.msgContent, $scope.adminConnectionID);
        $scope.msgContent = "";
        $scope.$apply();
    };


    $scope.show = function () {

        console.log($scope.messages);
    };


});


