angular
    .module('altairApp')
    .controller('careers_ctrl', [
        '$scope',
        '$rootScope',
        'dashService',
        '$stateParams',
        '$filter',
        '$state',
function ($scope, $rootScope, dashService, $stateParams, $filter, $state) {


    $scope.pageSize = 10;

    $scope.filter_pageSize = ['5', '10', '15'];

    GetAllCareersData();

    EditCareer = function () {

        dashService.EditCareer($scope.currentCareer, function (response) {

            alert('Career is Edited');
            $state.go('restricted.custompages.careerslist');
  
        },
    function (response) { });
        
    };


    AddCareer = function () {

        dashService.AddCareer($scope.currentCareer, function (response) {

            alert('Career is Added');
            $state.go('restricted.custompages.careerslist');

        },
    function (response) { });

    };

    $scope.DeleteCareer = function (id) {
        dashService.DeleteCareer(id, function (response) {
            alert('Career is Deleted');

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
                        $scope.title = "Career Edit";
                        $scope.currentCareer = $filter('filter')($scope.careers, { id: parseInt($stateParams.id) }, true)[0];
                    }
                    else {
                        $scope.title = "Add Career";
                        $scope.action = "insert";
                    }
                }
            },
            function (response) { });
    };


    $scope.Submit = function (item) {

        var $form = $('#career_edit_form');

        if ($scope.action == "edit") {

            if ($form.parsley().validate()) {
                EditCareer(item);
            }
        }
        else if ($scope.action == "insert") {

            if ($form.parsley().validate()) {

                var x = formatDate(new Date());
                item.postDate = x;
                AddCareer(item);
            }
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
