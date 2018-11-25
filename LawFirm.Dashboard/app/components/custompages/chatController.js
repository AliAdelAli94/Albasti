angular
    .module('altairApp')
    .controller('chatCtrl', [
        '$rootScope',
        '$scope',

        function ($rootScope, $scope) {

            $scope.users = [];

            $scope.$on('addNewUser', function ($event, data) {

                $scope.users.push(data);
                $scope.$apply();
            });

            $scope.TakeThisUser = function (cID) {
                $scope.$parent.TakeThisUser(cID);
            };


            $scope.$on('userTaken', function ($event, data) {
                for (var i = 0 ; i < $scope.users.length ; i++) {
                    if ($scope.users[i].CID == data) {
                        $scope.users.splice(i, 1);
                        break;
                    }
                }
                $scope.$apply();
            });


            $scope.$on('addNewMessage', function ($event, data) {
                for (var i = 0 ; i < $scope.users.length ; i++) {
                    if ($scope.users[i].CID == data.User) {
                        var x = new Date();
                        $scope.users[i].Messages.push({ msg: data.Msg, dir: 0, date: x.getHours() + ":" + x.getMinutes() });
                        break;
                    }
                }
                $scope.$apply();
            });



            $scope.sendMessage = function () {

                if ($scope.msgContent != null || $scope.msgContent != "") {
                    var x = new Date();
                    $scope.recentUser.Messages.push({ msg: $scope.msgContent, dir: 1, date: x.getHours() + ":" + x.getMinutes() });
                    $scope.$parent.sendMessage($scope.msgContent, $scope.recentUser.CID);
                    $scope.msgContent = "";
                }
            };


            $scope.changeRecentUser = function (id) {

                $scope.recentUser = $scope.users[id];

            };



            $rootScope.page_full_height = true;
            $rootScope.headerDoubleHeightActive = true;

            // colors
            $scope.chat_colors = 'chat_box_colors_a';

            $scope.changeColor = function ($event, colors) {
                $event.preventDefault();
                $scope.chat_colors = colors;
                $($event.currentTarget)
                    .closest('li').addClass('uk-active')
                    .siblings('li').removeClass('uk-active');
            };

        }
    ]);