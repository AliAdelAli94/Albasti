angular
    .module('altairApp')
    .controller('loginCtrl', [
        '$scope',
        '$rootScope',
        'utils',
        'signalR',
        'dashService',
        '$state',
        function ($scope, $rootScope, utils, signalR, dashService, $state) {

            $scope.userRegisterNow = {};
            $scope.loginUserNow = {};


            $scope.registerFormActive = false;

            var $login_card = $('#login_card'),
                $login_form = $('#login_form'),
                $login_help = $('#login_help'),
                $register_form = $('#register_form'),
                $login_password_reset = $('#login_password_reset');

            // show login form (hide other forms)
            var login_form_show = function () {
                $login_form
                    .show()
                    .siblings()
                    .hide();
            };

            // show register form (hide other forms)
            var register_form_show = function () {
                $register_form
                    .show()
                    .siblings()
                    .hide();
            };

            // show login help (hide other forms)
            var login_help_show = function () {
                $login_help
                    .show()
                    .siblings()
                    .hide();
            };

            // show password reset form (hide other forms)
            var password_reset_show = function () {
                $login_password_reset
                    .show()
                    .siblings()
                    .hide();
            };

            $scope.loginHelp = function ($event) {
                $event.preventDefault();
                utils.card_show_hide($login_card, undefined, login_help_show, undefined);
            };

            $scope.backToLogin = function ($event) {
                $event.preventDefault();
                $scope.registerFormActive = false;
                utils.card_show_hide($login_card, undefined, login_form_show, undefined);
            };

            $scope.registerForm = function ($event) {
                $event.preventDefault();
                $scope.registerFormActive = true;
                utils.card_show_hide($login_card, undefined, register_form_show, undefined);
            };

            $scope.passwordReset = function ($event) {
                $event.preventDefault();
                utils.card_show_hide($login_card, undefined, password_reset_show, undefined);
            };


            $scope.register = function () {

                var $form = $('#register_form_form');

                if ($form.parsley().validate()) {

                    dashService.RegisterUser($scope.userRegisterNow, function (response) {
                        if (response.data == true) {
                            alert('Your account is created but needs admin approval ');
                            login_form_show();
                        }
                    },
                    function (response) { });
                }
            };


            $scope.login = function () {

                var $form = $('#login_form_form');

                if ($form.parsley().validate()) {

                    dashService.Login($scope.loginUserNow, function (response) {
                        if(response.data != null)
                        {
                            if(response.data == "00")
                            {
                                alert('Your account not activated yet !');
                            }
                            else
                            {
                                sessionStorage.setItem("userID", response.data);
                                signalR.startHub();
                                signalR.adminLogin($scope.loginUserNow.Email);
                                $state.go('restricted.custompages.chat')
                            }
                        }
                        else
                        {
                            alert('Invalid username or password !');
                        }
                    },
                    function (response) { });
                }
            };
        }

    ]);