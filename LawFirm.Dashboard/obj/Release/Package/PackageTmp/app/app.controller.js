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
        function ($scope, $rootScope, signalR, $filter ) {

            $scope.users = [];
            $scope.recentUser = {};

            signalR.userAssigned(function (name, cID, email) {
                $scope.newUser = { Name: name, CID: cID, Email: email, Messages: [], EnableChat : true };

                $scope.found = true;
                for (var x = 0; x < $scope.users.length; x++)
                {
                    if($scope.users[x].CID == cID )
                    {
                        $scope.found = false;
                    }
                }

                if ($scope.found == true)
                {
                    $scope.users.push($scope.newUser);
                    $scope.$apply();
                }

                console.log(name + "          " + cID + "                 " + email);

            });


            $scope.TakeThisUser = function (CID) {

                $filter('filter')($scope.users, { CID: CID }, true)[0].EnableChat = false;

                signalR.takeThisUser(CID);
            }

            $scope.RemoveUser = function (index,cID) {

                $scope.users.splice(index, 1);
                signalR.removeUser(cID);
            };


            signalR.userTaken(function (cid) {

                for (var i = 0 ; i < $scope.users.length ; i++) {
                    if ($scope.users[i].CID == cid) {
                        $scope.users.splice(i, 1);
                        break;
                    }
                }
                $scope.$apply();

            });

            signalR.recieveMessage(function (msg, fromCID) {

                $scope.package = { Msg: msg, User: fromCID };

                console.log("new Message : ", $scope.package);

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
                    {
                        "title": "Reiciendis aut rerum.",
                        "content": "In adipisci amet nostrum natus recusandae animi fugit consequatur.",
                        "sender": "Korbin Doyle",
                        "color": "cyan"
                    },
                    {
                        "title": "Tenetur commodi animi.",
                        "content": "Voluptate aut quis rerum laborum expedita qui eaque doloremque a corporis.",
                        "sender": "Alia Walter",
                        "color": "indigo",
                        "avatar": "assets/img/avatars/avatar_07_tn.png"
                    },
                    {
                        "title": "At quia quis.",
                        "content": "Fugiat rerum aperiam et deleniti fugiat corporis incidunt aut enim et distinctio.",
                        "sender": "William Block",
                        "color": "light-green"
                    },
                    {
                        "title": "Incidunt sunt.",
                        "content": "Accusamus necessitatibus officia porro nisi consectetur dolorem.",
                        "sender": "Delilah Littel",
                        "color": "blue",
                        "avatar": "assets/img/avatars/avatar_02_tn.png"
                    },
                    {
                        "title": "Porro ut.",
                        "content": "Est vitae magni eum expedita odit quisquam natus vel maiores.",
                        "sender": "Amira Hagenes",
                        "color": "amber",
                        "avatar": "assets/img/avatars/avatar_09_tn.png"
                    }
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
            $scope.langSwitcherModel = 'gb';
            var langData = $scope.langSwitcherOptions = [
                { id: 1, title: 'English', value: 'gb' },
                { id: 2, title: 'French', value: 'fr' },
                { id: 3, title: 'Chinese', value: 'cn' },
                { id: 4, title: 'Dutch', value: 'nl' },
                { id: 5, title: 'Italian', value: 'it' },
                { id: 6, title: 'Spanish', value: 'es' },
                { id: 7, title: 'German', value: 'de' },
                { id: 8, title: 'Polish', value: 'pl' }
            ];
            $scope.langSwitcherConfig = {
                maxItems: 1,
                render: {
                    option: function (langData, escape) {
                        return '<div class="option">' +
                            '<i class="item-icon flag-' + escape(langData.value).toUpperCase() + '"></i>' +
                            '<span>' + escape(langData.title) + '</span>' +
                            '</div>';
                    },
                    item: function (langData, escape) {
                        return '<div class="item"><i class="item-icon flag-' + escape(langData.value).toUpperCase() + '"></i></div>';
                    }
                },
                valueField: 'value',
                labelField: 'title',
                searchField: 'title',
                create: false,
                onInitialize: function (selectize) {
                    $('#lang_switcher').next().children('.selectize-input').find('input').attr('readonly', true);
                }
            };

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
    ])

;
