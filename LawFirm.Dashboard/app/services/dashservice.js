altairApp.service('dashService', ['$http', 'Upload',

    function ($http, Upload) {

        //var WebApiUrl = "http://chatappp.somee.com/";

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


        this.EditFaq = function (faq, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'faq/UpdateFaqDashboard',
                data: faq
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.DeleteFaqDashboard = function (id, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'faq/DeleteFaqDashboard/' + id,
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
                Success(response); mo
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

        this.EditTestimonial = function (item, Success, Fail) {
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

        /* -------------------- User Services ------------------------------ */

        this.RegisterUser = function (dto, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'User/RegisterUser/',
                data: dto
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };


        this.CheckUserExist = function (email, Success, Fail) {
            $http({
                method: 'GET',
                url: WebApiUrl + 'User/CheckUserExist?email = ' + email,
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };


        this.Login = function (dto, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'User/Login/',
                data: dto
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        /* -------------------- End User Services ------------------------------ */


        /* -------------------- Expert Services -------------------------------- */

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

        this.AddExpert = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Expert/AddExpert',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.EditExpert = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Expert/EditExpert',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.RemoveExpert = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Expert/RemoveExpert',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };


        /* -------------------- Expert Services -------------------------------- */

        /* -------------------- Blog Services -------------------------------- */

        this.GetAllBlogs = function (Success, Fail) {
            $http({
                method: 'GET',
                url: WebApiUrl + 'Blog/GetAllBlogs/',
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };


        this.AddBlog = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Blog/AddBlog',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.EditBlog = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Blog/EditBlog',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };

        this.RemoveBlog = function (item, Success, Fail) {
            $http({
                method: 'POST',
                url: WebApiUrl + 'Blog/RemoveBlog',
                data: item
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            });
        };


        
        /* -------------------- Blog Services -------------------------------- */


        this.uploadImages = function (filee, folder, oldProp, Success, Fail, Progress) {
            Upload.upload({
                url: WebApiUrl + 'Utils/UploadImages',
                data: { file: filee, FolderName: folder, OldProp: oldProp }
            }).then(function (response) {
                Success(response);
            }, function (response) {
                Fail(response);
            }, function (evt) {
                Progress(evt);

            });
        }


    }]);




