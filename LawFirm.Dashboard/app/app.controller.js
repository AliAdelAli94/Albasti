/*
 *  Altair Admin angularjs
 *  controller
 */

angular
    .module('altairApp')
    .controller('mainCtrl', [
        '$scope',
        '$rootScope',
        'signalR',
        '$filter',
        function ($scope, $rootScope, signalR, $filter) {

            $scope.users = [];

            signalR.userAssigned(function (name, cID, email) {
                $scope.newUser = { Name: name, CID: cID, Email: email, Messages: [], EnableChat: true };

                $scope.found = true;
                for (var x = 0; x < $scope.users.length; x++) {
                    if ($scope.users[x].CID == cID) {
                        $scope.found = false;
                    }
                }

                if ($scope.found == true) {
                    $scope.users.push($scope.newUser);
                    $scope.$apply();
                }

            });


            $scope.TakeThisUser = function (CID) {

                $filter('filter')($scope.users, { CID: CID }, true)[0].EnableChat = false;

                signalR.takeThisUser(CID);
            }

            $scope.RemoveUser = function (index, cID) {

                for (var i = 0 ; i < $scope.users.length ; i++) {
                    if ($scope.users[i].CID == cID) {
                        if ($scope.users[i].CID == $scope.recentUser.CID) {
                            $scope.recentUser = {};
                        }
                        $scope.users.splice(i, 1);
                        break;
                    }
                }
                signalR.removeUser(cID);
            };


            signalR.userTaken(function (cid) {

                for (var i = 0 ; i < $scope.users.length ; i++) {
                    if ($scope.users[i].CID == cid) {
                        if ($scope.users[i].CID == $scope.recentUser.CID) {
                            $scope.recentUser = {};
                        }
                        $scope.users.splice(i, 1);
                        break;
                    }
                }
                $scope.$apply();

            });


            signalR.removeThisUser(function (cid) {

                for (var i = 0 ; i < $scope.users.length ; i++) {
                    if ($scope.users[i].CID == cid) {
                        if ($scope.users[i].CID == $scope.recentUser.CID) {
                            $scope.recentUser = {};
                            $scope.$apply();
                        }
                        $scope.users.splice(i, 1);
                        break;
                    }
                }
                $scope.$apply();
            });


            signalR.recieveMessage(function (msg, fromCID) {

                $scope.package = { Msg: msg, User: fromCID };

                for (var i = 0 ; i < $scope.users.length ; i++) {
                    if ($scope.users[i].CID == $scope.package.User) {
                        var x = new Date();
                        $scope.users[i].Messages.push({ msg: $scope.package.Msg, dir: 0, date: x.getHours() + ":" + x.getMinutes() });
                        break;
                    }
                }
                $scope.$apply();

            });

            $scope.sendMessage = function (msg, toCID) {

                signalR.sendMessage(msg, toCID);

            };



        }
    ])


    .controller('main_headerCtrl', [
        '$timeout',
        '$scope',
        '$window',
        function ($timeout, $scope, $window) {

            $scope.user_data = {
                name: "Lue Feest",
                avatar: "assets/img/avatars/avatar_11_tn.png",
                alerts: [
                    {
                        "title": "Hic expedita eaque.",
                        "content": "Nemo nemo voluptatem officia voluptatum minus.",
                        "type": "warning"
                    },
                    {
                        "title": "Voluptatibus sed eveniet.",
                        "content": "Tempora magnam aut ea.",
                        "type": "success"
                    },
                    {
                        "title": "Perferendis voluptatem explicabo.",
                        "content": "Enim et voluptatem maiores ab fugiat commodi aut repellendus.",
                        "type": "danger"
                    },
                    {
                        "title": "Quod minima ipsa.",
                        "content": "Vel dignissimos neque enim ad praesentium optio.",
                        "type": "primary"
                    }
                ],
                messages: [
                 
                ]
            };

            $scope.alerts_length = $scope.user_data.alerts.length;
            $scope.messages_length = $scope.user_data.messages.length;


            $('#menu_top').children('[data-uk-dropdown]').on('show.uk.dropdown', function () {
                $timeout(function () {
                    $($window).resize();
                }, 280)
            });


        }
    ])
    .controller('main_sidebarCtrl', [
        '$timeout',
        '$scope',
        '$rootScope',
        function ($timeout, $scope, $rootScope) {

            $scope.$on('onLastRepeat', function (scope, element, attrs) {
                $timeout(function () {
                    if (!$rootScope.miniSidebarActive) {
                        // activate current section
                        $('#sidebar_main').find('.current_section > a').trigger('click');
                    } else {
                        // add tooltips to mini sidebar
                        var tooltip_elem = $('#sidebar_main').find('.menu_tooltip');
                        tooltip_elem.each(function () {
                            var $this = $(this);

                            $this.attr('title', $this.find('.menu_title').text());
                            UIkit.tooltip($this, {});
                        });
                    }
                })
            });

            // language switcher
            var langData = $scope.langSwitcherOptions = [
               
            ];


            // menu entries
            $scope.sections = [
                {
                    title: 'Chat',
                    icon: '&#xE0B9;',
                    link: 'restricted.custompages.chat'
                },
                {
                    title: 'FAQ',
                    icon: '&#xE8C0;',
                    link: 'restricted.custompages.faqlist'
                },
                {
                    title: 'Testimonials',
                    icon: '&#xE8C0;',
                    link: 'restricted.custompages.testimoniallist'
                }
                ,
                {
                    title: 'Careers',
                    icon: '&#xE8C0;',
                    link: 'restricted.custompages.careerslist'
                }
                ,
                {
                    title: 'Experts',
                    icon: '&#xE8C0;',
                    link: 'restricted.custompages.experts_list'
                }
                ,
                {
                    title: 'Blogs',
                    icon: '&#xE8C0;',
                    link: 'restricted.custompages.blogs_list'
                }
            ]

        }
    ]);
