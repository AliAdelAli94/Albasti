
app.controller("chatController", function ($scope, $rootScope, signalR, lawfirmService) {

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
        lawfirmService.GetNumberOfOnlineUsers(function(response)
        {
            if(parseInt(response.data) > 0)
            {
                if ($scope.client) {
                    if ($scope.client.username && $scope.client.email) {
                        signalR.startChat($scope.client.username, $scope.client.email);
                    }
                }
            }

        }, function () { })
    };

    //signalR.recieveMessage(function (msg, fromCID) {

    //    $scope.messages.push({ content: msg, dir: 0 });
    //    $scope.$apply();

    //});


    signalR.getAdminData(function (cid) {

        $scope.adminConnectionID = cid;
        console.log($scope.adminConnectionID);

    });


    //$scope.sendMessage = function (e) {
    //    $scope.messages.push({ content: $scope.msgContent, dir: 1 })
    //    signalR.sendMessage($scope.msgContent, $scope.adminConnectionID);
    //    $scope.msgContent = "";
    //    $scope.$apply();
    //};


    //$scope.show = function () {

    //    console.log($scope.messages);
    //};


});


