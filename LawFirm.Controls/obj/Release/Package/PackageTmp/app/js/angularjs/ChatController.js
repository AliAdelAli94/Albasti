/// <reference path="ChatController.js" />

app.controller("chatController", function ($scope, $rootScope, signalR, lawfirmService) {

    var msgContent = document.getElementById("msgContent");
    msgContent.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            $scope.sendMessage();
        }
    });


    $scope.client = {};
    $scope.messages = [];
    $scope.startChat = function () {
        lawfirmService.GetNumberOfOnlineUsers(function (response) {
            $scope.numberOfOnlineAdmins = parseInt(response.data);
            if ($scope.numberOfOnlineAdmins > 0) {
                if ($scope.client) {
                    if ($scope.client.username && $scope.client.email) {

                        signalR.startHub();
                        signalR.startChat($scope.client.username, $scope.client.email);
                        $scope.adminConnectionID = "00";
                    }
                }
            }
            else {
                $scope.messages.push({ content: "We are not available now leave your inquiry, we will respond by sending email", dir: 0 });
            }

        }, function () { })
    };

    signalR.recieveMessage(function (msg, fromCID) {

        $scope.messages.push({ content: msg, dir: 0 });
        $scope.$apply();

        ScrollChat();
    });


    signalR.chatEnded(function () {
        $scope.adminConnectionID = "000";
        $scope.messages.push({ content: "Chat is ended from admin side click to <a class='log'> <span class='htag'>login</span> </a> again", dir: 0 });
        $scope.$apply();

        ScrollChat();

        $('.log').on('click', function () {
            $('.chatbox').addClass('chatbox--empty')
        });

    });


    signalR.getAdminData(function (cid) {

        $scope.adminConnectionID = cid;

    });


    $scope.sendMessage = function () {

        if ($scope.numberOfOnlineAdmins == 0) {

            $scope.messages.push({ content: $scope.msgContent, dir: 1 });

            if($scope.msgContent)
            {
                var dto = {};
                dto.UserName = $scope.client.username;
                dto.Email = $scope.client.email;
                dto.Message = $scope.msgContent;
                dto.ToEmail = contactUsEmail;
                dto.Subject = "Chat";

                lawfirmService.SendEmail(dto, function (response) {

                    if (response.data == true) {

                        $scope.messages.push({ content: "Your message has been sent, we will respond soon ", dir: 0 });
                        ScrollChat();

                    }
                },
                function (response) { });
            }      

            $scope.msgContent = "";
            $scope.$apply();
        }
        else {
            if ($scope.adminConnectionID != "00" && $scope.adminConnectionID != "000") {
                $scope.messages.push({ content: $scope.msgContent, dir: 1 })
                signalR.sendMessage($scope.msgContent, $scope.adminConnectionID);
                $scope.msgContent = "";
                $scope.$apply();
            }
            else {
                $scope.messages.push({ content: $scope.msgContent, dir: 1 })
                signalR.startChat($scope.client.username, $scope.client.email);
                signalR.sendMessageBroadCast($scope.msgContent);
                $scope.msgContent = "";
                $scope.$apply();
            }

        }

        ScrollChat();
    };

    $scope.returnToLogin = function () {
        $('.chatbox').addClass('chatbox--empty')
    };

    $scope.CloseConnection = function () {

        if ($scope.numberOfOnlineAdmins == 0)
        {
            $('.chatbox').addClass('chatbox--closed');
        }
        else
        {
            var result = confirm("Are you sure that you want to end chat ? ");
            if (result == true) {
                $('.chatbox').addClass('chatbox--closed');
                signalR.clientEndChat();
                signalR.CloseConnection();

            }
        }
    };


    function ScrollChat() {

        var chatBody = document.getElementById('chatBoxBody');
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});


