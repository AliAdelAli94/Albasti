angular
    .module('altairApp')
    .controller('faqs_ctrl', [
        '$scope',
        '$rootScope',
        'dashService',
        '$stateParams',
        '$filter',
function ($scope, $rootScope, dashService, $stateParams, $filter) {


    $scope.pageSize = 10;

    $scope.filter_pageSize = ['5', '10', '15'];


    dashService.GetAllFaq(function (response) {
        debugger;
        $scope.faqs = response.data;

        if ($stateParams != null) {
            if ($stateParams.id != null) {

                $scope.currenFaq = $filter('filter')($scope.faqs, { id: parseInt($stateParams.id) }, true)[0];
            }
        }

    },
    function (response) { });


    $scope.EditFaq = function () {

    };


    $scope.AddFaq = function() {

    };

    $scope.DeleteFaq = function () {

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


}]);
