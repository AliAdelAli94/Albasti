angular
    .module('altairApp')
    .controller('experts_ctrl', [
        '$rootScope',
        '$scope',
        '$window',
        'dashService',
        '$stateParams',
        '$state',
        '$filter',

        function ($rootScope, $scope, $window, dashService, $stateParams, $state, $filter) {

            $scope.currentExpert = {
                Experiences : []
            };
            $scope.saveForm = false;

            GetAllExpertsData();

            function GetAllExpertsData() {

                dashService.GetAllExperts(
                    function (response) {

                        $scope.experts = response.data;
                        if ($stateParams != null) {
                            if ($stateParams.id != null) {
                                $scope.action = "edit";
                                $scope.title = "Edit Expert";
                                $scope.currentExpert = $filter('filter')($scope.experts, { id: parseInt($stateParams.id) }, true)[0];
                                $scope.temp = angular.copy($scope.currentExpert);
                            }
                            else {
                                $scope.title = "Add Expert";
                                $scope.action = "insert";
                            }
                        }
                    },
                    function (response) { });
            };

            $scope.$on('onLastRepeat', function (scope, element, attrs) {
                $scope.$apply(function () {
                    UIkit.grid($('#expert_list'), {
                        gutter: 20
                    });
                });
            })

            $scope.Submit = function () {
                $scope.saveForm = true;

                if ($scope.action == "edit") {

                    $scope.EditExpert();
                }
                else if ($scope.action == "insert") {

                    $scope.AddExpert();
                }
                
                
            };

            $scope.addExperience = function () {
                $scope.currentExpert.Experiences.push({});
            };


            $scope.removeExperience = function (id) {
                $scope.currentExpert.Experiences.splice(id,1);
            };

            $scope.AddExpert = function ()
            {
                var $form = $('#expert_insert_form');
                if ($form.parsley().validate()) {
                    if ($scope.expert_insert_form.expert_photo.$valid) {

                        dashService.uploadImages($scope.currentExpert.image, "Experts", null, function (response) {

                            $scope.sendCopy = angular.copy($scope.currentExpert);
                            $scope.sendCopy.image = response.data;
                            dashService.AddExpert($scope.sendCopy, function (re) {
                                alert('Expert is Added');
                                $state.go('restricted.custompages.experts_list');

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

            $scope.EditExpert = function ()
            {
                var $form = $('#expert_insert_form');
                if ($form.parsley().validate()) {
                    if ($scope.expert_insert_form.expert_photo.$valid) {

                        if(typeof $scope.currentExpert.image !== 'string')
                        {
                            
                            dashService.uploadImages($scope.currentExpert.image, "Experts", $scope.temp.image, function (response) {

                                    $scope.sendCopy = angular.copy($scope.currentExpert);
                                    $scope.sendCopy.image = response.data;
                                    dashService.EditExpert($scope.sendCopy, function (re) {
                                        alert('Expert is Edited');
                                        $state.go('restricted.custompages.experts_list');

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
                        else
                        {
                            $scope.currentExpert.image = $scope.currentExpert.image.substr($scope.currentExpert.image.indexOf('/', 7) + 0);
                            $scope.sendCopy = angular.copy($scope.currentExpert);
                            dashService.EditExpert($scope.sendCopy, function (re) {
                                alert('Expert is Edited');
                                $state.go('restricted.custompages.experts_list');

                            }, function (re) { })
                        }
                    }

                }
            }


            $scope.RemoveExpert = function (item) {

                dashService.RemoveExpert(item, function (re) {
                    GetAllExpertsData();
                    alert('Expert is Removed');
                }, function (re) { })
                
            }

        }
    ]);