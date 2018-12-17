angular
    .module('altairApp')
    .controller('chatCtrl', [
        '$rootScope',
        '$scope',

        function ($rootScope, $scope) {

            $scope.TakeThisUser = function (cID) {
                $scope.$parent.TakeThisUser(cID);
            };

            $scope.RemoveUser = function (index,cID) {

                $scope.$parent.RemoveUser(index,cID);
            };

            $scope.model = {};

            $scope.sendMessage = function () {
                if ($scope.model.msgNow != null && $scope.model.msgNow != "") {
                    var x = new Date();
                    $scope.$parent.recentUser.Messages.push({ msg: $scope.model.msgNow, dir: 1, date: x.getHours() + ":" + x.getMinutes() });
                    $scope.$parent.sendMessage($scope.model.msgNow, $scope.$parent.recentUser.CID);
                    $scope.model.msgNow = "";
                }
            };


            $scope.changeRecentUser = function (id) {

                $scope.$parent.recentUser = $scope.$parent.users[id];

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


