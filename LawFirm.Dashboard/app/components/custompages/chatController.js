angular
    .module('altairApp')
    .controller('chatCtrl', [
        '$rootScope',
        '$scope',

        function ($rootScope, $scope) {


            var msgContent = document.getElementById("submit_message");
            msgContent.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    $scope.sendMessage();
                }
            });

            $scope.TakeThisUser = function (cID) {
                $scope.$parent.$parent.$parent.TakeThisUser(cID);
            };

            $scope.RemoveUser = function (index,cID) {

                $scope.$parent.$parent.$parent.RemoveUser(index,cID);
            };

            $scope.model = {};

            $scope.sendMessage = function () {
                if ($scope.model.msgNow != null && $scope.model.msgNow != "") {
                    var x = new Date();
                    $scope.$parent.$parent.$parent.recentUser.Messages.push({ msg: $scope.model.msgNow, dir: 1, date: x.getHours() + ":" + x.getMinutes() });
                    $scope.$parent.$parent.$parent.sendMessage($scope.model.msgNow, $scope.$parent.$parent.$parent.recentUser.CID);
                    $scope.model.msgNow = "";
                }
            };


            $scope.changeRecentUser = function (id) {

                $scope.$parent.$parent.$parent.recentUser = $scope.$parent.$parent.$parent.users[id];

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


            $scope.isEmpty = function (obj) {
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop))
                        return false;
                }
                return true;
            }

        }
    ]);


