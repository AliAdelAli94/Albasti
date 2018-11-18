angular
    .module('altairApp')
    .controller('testemonials_ctrl', [
        '$scope',
        '$rootScope',
        'dashService',
        '$stateParams',
        '$filter',
function ($scope, $rootScope, dashService, $stateParams, $filter) {


    $scope.pageSize = 10;

    $scope.filter_pageSize = ['5', '10', '15'];

    GetAllTestemonialsData();

    EditTestimonial = function () {

        dashService.EditTestimonial($scope.currenTestemonial, function (response) {
        },
    function (response) { });

    };


    AddTestemonial = function () {

        dashService.AddTestemonial($scope.currenTestemonial, function (response) {
        },
    function (response) { });

    };

    $scope.DeleteTestimonial = function (id) {
        dashService.DeleteTestimonial(id, function (response) {

            GetAllTestemonialsData();

        },
          function (response) { });


    };


    Array.prototype.contains = function (obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    }


    function GetAllTestemonialsData() {

        dashService.GetAllTestemonials(
            function (response) {
                $scope.testimonials = response.data;
                
                if ($stateParams != null) {
                    if ($stateParams.id != null) {
                        $scope.action = "edit";
                        $scope.currenTestemonial = $filter('filter')($scope.testimonials, { id: parseInt($stateParams.id) }, true)[0];
                    }
                    else {
                        $scope.action = "insert";
                    }
                }

            },
            function (response) { });
    };


    $scope.Submit = function (item) {

        if ($scope.action == "edit") {
            EditTestimonial(item);
        }
        else if ($scope.action == "insert") {
            AddTestemonial(item);
        }
    };


}]);
