angular
    .module('altairApp')
    .controller('chatCtrl', [
        '$rootScope',
        '$scope',

        function ($rootScope, $scope) {

            $scope.TakeThisUser = function (cID) {
                $scope.$parent.TakeThisUser(cID);
            };


            $scope.sendMessage = function () {

                if ($scope.msgContent != null || $scope.msgContent != "") {
                    var x = new Date();
                    $scope.$parent.recentUser.Messages.push({ msg: $scope.msgContent, dir: 1, date: x.getHours() + ":" + x.getMinutes() });
                    $scope.$parent.sendMessage($scope.msgContent, $scope.$parent.recentUser.CID);
                    $scope.msgContent = "";
                }
            };


            $scope.changeRecentUser = function (id) {

                $scope.$parent.recentUser = $scope.users[id];

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