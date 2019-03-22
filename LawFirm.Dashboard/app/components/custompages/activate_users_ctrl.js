angular
    .module('altairApp')
    .controller('activate_users_ctrl', [
        '$rootScope',
        '$scope',
        '$window',
        'dashService',

        function ($rootScope, $scope, $window, dashService) {


            GetNotActivatedUsers();

            function GetNotActivatedUsers() {

                dashService.GetNotActivatedUsers(
                    function (response) {

                        $scope.users = response.data;

                    },
                    function (response) { });
            };


            $scope.ActivateUser = function (index) {

                $scope.currentUser = $scope.users[index];

                dashService.ActivateUser($scope.currentUser.email,
                   function (response) {

                       if(response.data == true)
                       {
                           alert("This user has been activated .. ");
                           GetNotActivatedUsers();
                       }
                   },
                   function (response) { });

            }
        }
    ]);