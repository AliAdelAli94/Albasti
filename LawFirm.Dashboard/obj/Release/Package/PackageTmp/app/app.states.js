altairApp
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
                .when('/blank', '/')
                .otherwise('/login');

            $stateProvider
            // -- ERROR PAGES --
                .state("error", {
                    url: "/error",
                    templateUrl: 'app/views/error.html'
                })
                .state("error.404", {
                    url: "/404",
                    templateUrl: 'app/components/pages/error_404View.html'
                })
                .state("error.500", {
                    url: "/500",
                    templateUrl: 'app/components/pages/error_500View.html'
                })
            // -- LOGIN PAGE --
                .state("login", {
                    url: "/login",
                    templateUrl: 'app/components/custompages/loginView.html',
                    controller: 'loginCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_iCheck',
                                'lazy_parsleyjs',
                                'app/components/custompages/loginController.js'
                            ]);
                        }]
                    }
                })
            // -- RESTRICTED --
                .state("restricted", {
                    abstract: true,
                    url: "",
                    views: {
                        'main_header': {
                            templateUrl: 'app/shared/header/headerView.html',
                            controller: 'main_headerCtrl'
                        },
                        'main_sidebar': {
                            templateUrl: 'app/shared/main_sidebar/main_sidebarView.html',
                            controller: 'main_sidebarCtrl'
                        },
                        '': {
                            templateUrl: 'app/views/restricted.html'
                        }
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_selectizeJS',
                                'lazy_switchery',
                                'lazy_prismJS',
                                'lazy_autosize',
                                'lazy_iCheck',
                                'lazy_style_switcher'
                            ], { serie: true });
                        }]
                    }
                })        
       
            // -- COMPONENTS --
                .state("restricted.components", {
                    url: "/components",
                    template: '<div ui-view autoscroll="false"/>',
                    abstract: true
                })
               
           // ------------------------------------- My Pages --------------------------
                .state("restricted.custompages", {
                    url: "/custompages",
                    template: '<div ui-view autoscroll="false" ng-class="{ \'uk-height-1-1\': page_full_height }" />',
                    abstract: true
                })
                .state("restricted.custompages.faq_details", {
                    url: "/faq_details/:id",
                    templateUrl: 'app/components/custompages/faqs_details_view.html',
                    controller: 'faqs_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/components/custompages/faqs_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'FAQ Details'
                    }
                })
                 .state("restricted.custompages.faq_add", {
                     url: "/faq_add",
                     templateUrl: 'app/components/custompages/faq_editView.html',
                     controller: 'faqs_ctrl',
                     resolve: {
                         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                             return $ocLazyLoad.load([
                                 'lazy_parsleyjs',
                                 'app/components/custompages/faqs_ctrl.js'
                             ]);
                         }]
                     },
                     data: {
                         pageTitle: 'FAQ Add'
                     }
                 })

                .state("restricted.custompages.faq_edit", {
                    url: "/faq_edit/:id",
                    templateUrl: 'app/components/custompages/faq_editView.html',
                    controller: 'faqs_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_parsleyjs',
                                'app/components/custompages/faqs_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'FAQ Edit'
                    }
                })
                .state("restricted.custompages.faqlist", {
                    url: "/faqlist",
                    templateUrl: 'app/components/custompages/faqs_list_view.html',
                    controller: 'faqs_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_pagination',
                                'app/components/custompages/faqs_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'FAQ Items List'
                    }
                })
                .state("restricted.custompages.testimoniallist", {
                    url: "/testimoniallist",
                    templateUrl: 'app/components/custompages/testimonials_list_view.html',
                    controller: 'testemonials_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_pagination',
                                'app/components/custompages/testemonials_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Testimonials Items List'
                    }
                })
                .state("restricted.custompages.testemonial_details", {
                    url: "/testemonial_details/:id",
                    templateUrl: 'app/components/custompages/testemonial_details_view.html',
                    controller: 'testemonials_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/components/custompages/testemonials_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Testimonials Details'
                    }
                })
                 .state("restricted.custompages.testemonial_add", {
                     url: "/testemonial_add",
                     templateUrl: 'app/components/custompages/testemonial_editView.html',
                     controller: 'testemonials_ctrl',
                     resolve: {
                         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                             return $ocLazyLoad.load([
                                 'lazy_parsleyjs',
                                 'app/components/custompages/testemonials_ctrl.js'
                             ]);
                         }]
                     },
                     data: {
                         pageTitle: 'Add Testimonial'
                     }
                 })

                .state("restricted.custompages.testemonial_edit", {
                    url: "/testemonial_edit/:id",
                    templateUrl: 'app/components/custompages/testemonial_editView.html',
                    controller: 'testemonials_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_parsleyjs',
                                'app/components/custompages/testemonials_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Testimonial Edit'
                    }
                })

                .state("restricted.custompages.chat", {
                    url: "/chat",
                    templateUrl: 'app/components/custompages/chatView.html',
                    controller: 'chatCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([

                                'app/components/custompages/chatController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Chat'
                    }
                })

                //------------------------------ Careers ----------------------------

                .state("restricted.custompages.careerslist", {
                    url: "/careerslist",
                    templateUrl: 'app/components/custompages/careers_list_view.html',
                    controller: 'careers_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_pagination',
                                'app/components/custompages/careers_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Careers Items List'
                    }
                })
                .state("restricted.custompages.career_details", {
                    url: "/career_details/:id",
                    templateUrl: 'app/components/custompages/career_details_view.html',
                    controller: 'careers_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'app/components/custompages/careers_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'FAQ Details'
                    }
                })
                 .state("restricted.custompages.career_add", {
                     url: "/career_add",
                     templateUrl: 'app/components/custompages/career_editView.html',
                     controller: 'careers_ctrl',
                     resolve: {
                         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                             return $ocLazyLoad.load([
                                 'lazy_parsleyjs',
                                 'app/components/custompages/careers_ctrl.js'
                             ]);
                         }]
                     },
                     data: {
                         pageTitle: 'Add Career'
                     }
                 })

                .state("restricted.custompages.career_edit", {
                    url: "/career_edit/:id",
                    templateUrl: 'app/components/custompages/career_editView.html',
                    controller: 'careers_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_parsleyjs',
                                'app/components/custompages/careers_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Craeer Edit'
                    }
                })
                //------------------------------ End Careers ------------------------

                //------------------------------ Start Experts ---------------------------
                 .state("restricted.custompages.experts_list", {
                     url: "/experts_list",
                     templateUrl: 'app/components/custompages/experts_list_view.html',
                     controller: 'experts_ctrl',
                     resolve: {
                         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                             return $ocLazyLoad.load([
                                 'app/components/custompages/experts_ctrl.js'
                             ], { serie: true });
                         }]
                     },
                     data: {
                         pageTitle: 'Experts List'
                     }
                 })

                 .state("restricted.custompages.experts_insert_view", {
                     url: "/experts_insert_view",
                   templateUrl: 'app/components/custompages/experts_edit_view.html',
                   controller: 'experts_ctrl',
                   resolve: {
                       deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                           return $ocLazyLoad.load([
                               'lazy_parsleyjs',
                               'app/components/custompages/experts_ctrl.js'
                           ]);
                       }]
                   },
                   data: {
                       pageTitle: 'Add Expert'
                   }

                 })
                 
                 .state("restricted.custompages.experts_edit_view", {
                     url: "/experts_edit_view/:id",
                     templateUrl: 'app/components/custompages/experts_edit_view.html',
                     controller: 'experts_ctrl',
                     resolve: {
                         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                             return $ocLazyLoad.load([
                                 'lazy_parsleyjs',
                                 'app/components/custompages/experts_ctrl.js'
                             ]);
                         }]
                     },
                     data: {
                         pageTitle: 'Edit Expert'
                     }

                 })
                //------------------------------ End Experts ------------------------------


                //------------------------------- Start Blogs --------------------------------
                .state("restricted.custompages.blogs_list", {
                    url: "/blogs_list",
                    controller: 'blogs_ctrl',
                    templateUrl: 'app/components/custompages/blogs_list_view.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_parsleyjs',
                                'app/components/custompages/blogs_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Blogs List'
                    }
                })

                .state("restricted.custompages.blog_details_view", {
                    url: "/blog_details_view/:id",
                    controller: 'blogs_ctrl',
                    templateUrl: 'app/components/custompages/blog_details_view.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_parsleyjs',
                                'app/components/custompages/blogs_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Blog Details'
                    }
                })

                .state("restricted.custompages.blog_insert_view", {
                    url: "/blog_insert_view",
                    templateUrl: 'app/components/custompages/blog_edit_view.html',
                    controller: 'blogs_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_parsleyjs',
                                'app/components/custompages/blogs_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Add Blog'
                    }

                })
                .state("restricted.custompages.blog_edit_view", {
                    url: "/blog_edit_view/:id",
                    templateUrl: 'app/components/custompages/blog_edit_view.html',
                    controller: 'blogs_ctrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_parsleyjs',
                                'app/components/custompages/blogs_ctrl.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Edit Blog'
                    }

                })

                //------------------------------- End Blogs ----------------------------------



                // ------------------------------------- End My Pages -------------------------
        }
    ]);
