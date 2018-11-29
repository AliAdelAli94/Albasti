angular
    .module('altairApp')
    .controller('testemonials_ctrl', [
        '$scope',
        '$rootScope',
        'dashService',
        '$stateParams',
        '$filter',
        '$state',
function ($scope, $rootScope, dashService, $stateParams, $filter, $state) {


    $scope.pageSize = 10;

    $scope.filter_pageSize = ['5', '10', '15'];

    GetAllTestemonialsData();

    EditTestimonial = function () {

        dashService.EditTestimonial($scope.currenTestemonial, function (response) {
            alert('Testimonial is Edited');
            $state.go('restricted.custompages.testimoniallist');
        },
    function (response) { });

    };


    AddTestemonial = function () {

        dashService.AddTestemonial($scope.currenTestemonial, function (response) {
            alert('Testimonial is Added');
            $state.go('restricted.custompages.testimoniallist');
        },
    function (response) { });

    };

    $scope.DeleteTestimonial = function (id) {
        dashService.DeleteTestimonial(id, function (response) {

            alert('Testimonial is Deleted');
            $state.go('restricted.custompages.testimoniallist');

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
                        $scope.title = "Testimonial Edit";
                        $scope.currenTestemonial = $filter('filter')($scope.testimonials, { id: parseInt($stateParams.id) }, true)[0];
                    }
                    else {
                        $scope.action = "insert";
                        $scope.title = "Add Testimonial";
                    }
                }

            },
            function (response) { });
    };


    $scope.Submit = function (item) {

        var $form = $('#testimonial_edit_form');

        if ($scope.action == "edit") {

            if ($form.parsley().validate()) {

                EditTestimonial(item);
            }
        }
        else if ($scope.action == "insert") {

            if ($form.parsley().validate()) {
                AddTestemonial(item);
            }
        }
    };


}]);
