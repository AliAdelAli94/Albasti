angular
    .module('altairApp')
    .controller('blogs_ctrl', [
        '$rootScope',
        '$scope',
        '$window',
        'dashService',
        '$stateParams',
        '$state',
        '$filter',

        function ($rootScope, $scope, $window, dashService, $stateParams, $state, $filter) {

            $scope.currentBlog = {
                Paragraphs: [],
                Comments : []
            };
            $scope.saveForm = false;

            GetAllBlogsData();

            function GetAllBlogsData() {

                dashService.GetAllBlogs(
                    function (response) {

                        $scope.blogs = response.data;
                        for (var i = 0; i < $scope.blogs.length; i++)
                        {
                            $scope.blogs[i].postDateShow = $scope.blogs[i].blogDate.split('T')[0].split('-').reverse().join('.');
                        }
                        if ($stateParams != null) {
                            if ($stateParams.id != null) {
                                $scope.action = 1;
                                $scope.title = "Edit Blog";
                                $scope.currentBlog = $filter('filter')($scope.blogs, { id: parseInt($stateParams.id) }, true)[0];
                                $scope.temp = angular.copy($scope.currentBlog);
                            }
                            else {
                                $scope.title = "Add Blog";
                                $scope.action = 0;
                            }
                        }
                    },
                    function (response) { });
            };

          
            $scope.Submit = function () {
                $scope.saveForm = true;

                if ($scope.action == 1) {

                    $scope.EditBlog();
                }
                else if ($scope.action == 0) {

                    $scope.AddBlog();
                }
            };

            $scope.addParagraph = function () {
                $scope.currentBlog.Paragraphs.push({});
            };


            $scope.removeParagraph = function (id) {
                $scope.currentBlog.Paragraphs.splice(id, 1);
            };

            $scope.removeComment = function (id) {
                $scope.currentBlog.Comments.splice(id, 1);
            };

            $scope.AddBlog = function () {
                var $form = $('#blog_insert_form');
                if ($form.parsley().validate()) {
                    if ($scope.blog_insert_form.blog_photo.$valid) {

                        dashService.uploadImages($scope.currentBlog.image, "Blogs", null, function (response) {

                            $scope.sendCopy = angular.copy($scope.currentBlog);
                            $scope.sendCopy.image = response.data;
                            dashService.AddBlog($scope.sendCopy, function (re) {
                                alert('Blog is Added');
                                $state.go('restricted.custompages.blogs_list');

                            }, function (re) { })
                        },
                        function (response) {
                            console.log('Error status: ' + response.status);

                        },
                        function (event) {
                            $scope.progressPercentage = parseInt(100.0 * event.loaded / event.total);
                            $scope.progressStyle = {
                                'width': $scope.progressPercentage + '%'
                            };
                        });
                    }

                }

            }

            $scope.EditBlog = function () {
                var $form = $('#blog_insert_form');
                if ($form.parsley().validate()) {
                    if ($scope.blog_insert_form.blog_photo.$valid) {

                        if (typeof $scope.currentBlog.image !== 'string') {

                            dashService.uploadImages($scope.currentBlog.image, "Blogs", $scope.temp.image, function (response) {

                                $scope.sendCopy = angular.copy($scope.currentBlog);
                                $scope.sendCopy.image = response.data;
                                dashService.EditBlog($scope.sendCopy, function (re) {
                                    alert('Blog is Edited');
                                    $state.go('restricted.custompages.blogs_list');

                                }, function (re) { })
                            },
                                function (response) {
                                    console.log('Error status: ' + response.status);
                                },
                                function (event) {
                                    $scope.progressPercentage = parseInt(100.0 * event.loaded / event.total);
                                    $scope.progressStyle = {
                                        'width': $scope.progressPercentage + '%'
                                    };
                                });
                        }
                        else {
                            $scope.currentBlog.image = $scope.currentBlog.image.substr($scope.currentBlog.image.indexOf('/', 7) + 0);
                            $scope.sendCopy = angular.copy($scope.currentBlog);
                            dashService.EditBlog($scope.sendCopy, function (re) {
                                alert('Blog is Edited');
                                $state.go('restricted.custompages.blogs_list');

                            }, function (re) { })
                        }
                    }

                }
            }


            $scope.RemoveBlog = function (item) {

                dashService.RemoveBlog(item, function (re) {
                    GetAllBlogsData();
                    alert('Blog is Removed');
                }, function (re) { })

            }

        }
    ]);