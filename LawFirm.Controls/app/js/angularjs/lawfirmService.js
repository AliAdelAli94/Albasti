app.service('lawfirmService', ['$http',

    function ($http) {

     var WebApiUrl = "http://devv.gearhostpreview.com/";
      // var WebApiUrl = "http://localhost:20833/";

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


     this.GetAllCareers = function (Success, Fail) {
         $http({
             method: 'GET',
             url: WebApiUrl + 'career/GetAllCareers'
         }).then(function (response) {
             Success(response);
         }, function (response) {
             Fail(response);
         });
     };


     this.GetAllExperts = function (Success, Fail) {
         $http({
             method: 'GET',
             url: WebApiUrl + 'Expert/GetAllExperts',
         }).then(function (response) {
             Success(response);
         }, function (response) {
             Fail(response);
         });
     };

     this.GetAllBlogs = function (Success, Fail) {
         $http({
             method: 'GET',
             url: WebApiUrl + 'Blog/GetAllBlogs',
         }).then(function (response) {
             Success(response);
         }, function (response) {
             Fail(response);
         });
     };

     

     this.GetNumberOfOnlineUsers = function (Success, Fail) {
         $http({
             method: 'GET',
             url: WebApiUrl + 'user/GetNumberOfOnlineUsers'
         }).then(function (response) {
             Success(response);
         }, function (response) {
             Fail(response);
         });
     };

     
     this.AddComment = function (item, Success, Fail) {
         $http({
             method: 'POST',
             url: WebApiUrl + 'Blog/AddComment/',
             data: item
         }).then(function (response) {
             Success(response);
         }, function (response) {
             Fail(response);
         });
     };


     this.SendEmail = function (data, Success, Fail) {
         $http({
             method: 'POST',
             url: WebApiUrl + 'Utils/SendEmail/',
             data: data
         }).then(function (response) {
             Success(response);
         }, function (response) {
             Fail(response);
         });
     };



 }]);




