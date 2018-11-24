angular
    .module('altairApp')
    .controller('chatCtrl', [
        '$rootScope',
        '$scope',

        function ($rootScope,$scope) {

            $scope.users = [];

            $scope.$on('addNewUser', function ($event, data) {

                $scope.users.push(data);
                $scope.$apply();
            });

            $scope.TakeThisUser = function (cID) {
                $scope.$parent.TakeThisUser(cID);
            };


            $scope.$on('userTaken', function ($event, data) {
                for (var i = 0 ; i < $scope.users.length ; i++)
                {
                    if($scope.users[i].CID == data)
                    {
                        $scope.users.splice(i, 1);
                        break;
                    }
                }
                $scope.$apply();
            });


            $rootScope.page_full_height = true;
            $rootScope.headerDoubleHeightActive = true;

            $scope.chat_messages = [
                {
                    "user_id": 0,
                    "content": [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum?",
                        "Lorem ipsum dolor sit amet."
                    ],
                    "date": "13:38"
                },
                {
                    "user_id": 1,
                    "content": [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus distinctio dolor earum est hic id impedit ipsum minima mollitia natus nulla perspiciatis quae quasi, quis recusandae, saepe, sunt totam."
                    ],
                    "date": "13:34"
                },
                {
                    "user_id": 0,
                    "content": [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ea mollitia pariatur porro quae sed sequi sint tenetur ut veritatis."
                    ],
                    "date": "23 JUN 1:10AM"
                },
                {
                    "user_id": 1,
                    "content": [
                        "Lorem ipsum dolor sit amet, consectetur.",
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    ],
                    "date": "FRIDAY 13:34"
                }
            ];

            // colors
            $scope.chat_colors = 'chat_box_colors_a';

            $scope.changeColor = function($event,colors) {
                $event.preventDefault();
                $scope.chat_colors = colors;
                $($event.currentTarget)
                    .closest('li').addClass('uk-active')
                    .siblings('li').removeClass('uk-active');
            };


        }
    ]);