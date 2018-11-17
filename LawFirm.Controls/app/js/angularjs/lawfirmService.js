app.service('lawfirmService', ['$http',

    function ($http) {

     var WebApiUrl = "http://localhost:20833/";

     this.GetAllFaq = function (Success, Fail) {
         $http({
             method: 'GET',
             url: WebApiUrl + 'faq/GetAllFaq'
         }).then(function (response) {
             Success(response);
         }, function (response) {
             Fail(response);
         });
     };


     this.GetAllTestimonial = function (Success, Fail) {
         $http({
             method: 'GET',
             url: WebApiUrl + 'Testemonial/GetAllTestemonials'
         }).then(function (response) {
             Success(response);
         }, function (response) {
             Fail(response);
         });
     };


 }]);




