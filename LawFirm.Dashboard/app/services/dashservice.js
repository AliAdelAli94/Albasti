altairApp.service('dashService', ['$http',

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


        this.EditFaq = function (faq,Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'faq/UpdateFaqDashboard',
                data:faq
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.DeleteFaqDashboard = function (id, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'faq/DeleteFaqDashboard/'+id,
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.AddFaqDashboard = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'faq/AddFaqDashboard/',
                data: item
            }).then(function (response) {
                Success(response);mo
            }, function (response) {
                Fail(response);
            });
        };

        this.GetAllTestemonials = function (Success, Fail) {
            $http({
                method: 'GET',
                url: WebApiUrl + 'Testemonial/GetAllTestemonials/',
            }).then(function (response) {
                Success(response); 
            }, function (response) {
                Fail(response);
            });
        };

        this.EditTestimonial = function (item,Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Testemonial/UpdateTestemonial/',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };


        this.AddTestemonial = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Testemonial/AddTestemonial/',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.DeleteTestimonial = function (id, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Testemonial/DeleteTestemonialDashboard/' + id,
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        
        this.GetAllCareers = function (Success, Fail) {
            $http({
                method: 'GET',
                url: WebApiUrl + 'career/getallcareers',
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.EditCareer = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Career/UpdateCareerDashboard/',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.AddCareer = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Career/AddCareerDashboard/',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        
        this.DeleteCareer = function (id, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Career/DeleteCareerDashboard/' + id,
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

    }]);




