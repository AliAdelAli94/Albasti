angular
    .module('altairApp')
    .controller('careers_ctrl', [
        '$scope',
        '$rootScope',
        'dashService',
        '$stateParams',
        '$filter',
function ($scope, $rootScope, dashService, $stateParams, $filter) {


    $scope.pageSize = 10;

    $scope.filter_pageSize = ['5', '10', '15'];

    GetAllCareersData();

    EditCareer = function () {

        dashService.EditCareer($scope.currentCareer, function (response) {
        },
    function (response) { });

    };


    AddCareer = function () {

        dashService.AddCareer($scope.currentCareer, function (response) {
        },
    function (response) { });

    };

    $scope.DeleteCareer = function (id) {
        dashService.DeleteCareer(id, function (response) {

            GetAllCareersData();
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


    function GetAllCareersData() {

        dashService.GetAllCareers(
            function (response) {
                $scope.careers = response.data;

                if ($stateParams != null) {
                    if ($stateParams.id != null) {
                        $scope.action = "edit";
                        $scope.currentCareer = $filter('filter')($scope.careers, { id: parseInt($stateParams.id) }, true)[0];
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
            EditCareer(item);
        }
        else if ($scope.action == "insert") {
            var x = formatDate(new Date());
            item.postDate = x;
            AddCareer(item);
        }
    };


}]);


function formatDate(date) {

    var day = date.getDate();
    var monthIndex = date.getMonth() + 1 ;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    return day + '/' + parseInt(monthIndex) + '/' + year + ' ' + hours + ':' + minutes + ':'+"00";
}
