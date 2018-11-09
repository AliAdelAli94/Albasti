angular
    .module('altairApp')
    .controller('faqs_ctrl', [
        '$scope',
        '$rootScope',
        'dashService',
        function ($scope, $rootScope, dashService) {


            $scope.pageSize = 10;

            $scope.filter_pageSize = ['5', '10', '15'];


            // faqs data

            dashService.GetAllFaq(function (response) {
                debugger;
                $scope.faqs = response.data;
            },
            function (response) { });


            $currentFAQ = 
          

        }
    ])
;
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};