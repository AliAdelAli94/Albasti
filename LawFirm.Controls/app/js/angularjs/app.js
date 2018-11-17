var app = angular.module("LawFirmApp", ['ui.router']);

app.run(function ($rootScope) {
    $rootScope.$on("$includeContentLoaded", function (event, templateName) {
        if (templateName == "/app/chat.html") {
            load_chat_js();
        }
    });
});

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state("home", {
            url: '/home',
            templateUrl: '/app/home.html'
        })
        .state("about-us", {
            url: '/about-us',
            templateUrl: "/app/about-us.html"
        })
        .state("litigation", {
            url: "/litigation",
            templateUrl: "/app/litigation.html"
        })
        .state("arbitration", {
            url: "/arbitration",
            templateUrl: "/app/arbitration.html"
        })
        .state("civil-law", {
            url: '/civil-law',
            templateUrl: "/app/civil-law.html"
        })
        .state("commercial-corporate", {
            url: "/commercial-corporate",
            templateUrl: "/app/commercial-corporate.html"
        })
        .state("intellectual-property-law", {
            url: "/intellectual-property-law",
            templateUrl: "/app/intellectual-property-law.html"
        })
        .state("realestate-construction", {
            url: "/realestate-construction",
            templateUrl: "/app/realestate-construction.html"
        })
        .state("family-law", {
            url: "/family-law",
            templateUrl: "/app/family-law.html"
        })
        .state("criminal-law", {
            url: "/criminal-law",
            templateUrl: "/app/criminal-law.html"
        })
        .state("labor-law", {
            url: "/labor-law",
            templateUrl: "/app/labor-law.html"
        })
        .state("practice-areas", {
            url: "/practice-areas",
            templateUrl: "/app/practice-areas.html"
        })
        .state("wills-trust", {
            url: "/wills-trust",
            templateUrl: "/app/wills-trust.html"
        })
        .state("maritime-law", {
            url: "/maritime-law",
            templateUrl: "/app/maritime-law.html"
        })
        .state("sharia-law", {
            url: "/sharia-law",
            templateUrl: "/app/sharia-law.html"
        })
        .state("medical-malpractice", {
            url: "/medical-malpractice",
            templateUrl: "/app/medical-malpractice.html"
        })
        .state("insurance-law", {
            url: "/insurance-law",
            templateUrl: "/app/insurance-law.html"
        })
        .state("government-regulations", {
            url: "/government-regulations",
            templateUrl: "/app/government-regulations.html"
        })
        .state("expert-opinion", {
            url: "/expert-opinion",
            templateUrl: "/app/expert-opinion.html"
        })

        .state("contract-drafting", {
            url: "/contract-drafting",
            templateUrl: "/app/contract-drafting.html"
        })

        .state("bankruptcy", {
            url: "/bankruptcy",
            templateUrl: "/app/bankruptcy.html"
        })

        .state("firm-overview", {
            url: "/firm-overview",
            templateUrl: "/app/firm-overview.html"
        })
         .state("why-retainer", {
             url: "/why-retainer",
             templateUrl: "/app/why-retainer-services.html"
         })
         .state("testimonials", {
             url: "/testimonials",
             templateUrl: "/app/testemonials.html"
         })
         .state("contactus", {
             url: "/contactus",
             templateUrl: "/app/contact-us.html"
         })
         .state("ourteam", {
             url: "/ourteam",
             templateUrl: "/app/our-team.html"
         })
        .state("careers", {
            url: "/careers",
            templateUrl: "/app/careers.html"
        })
        .state("appointment", {
            url: "/appointment",
            templateUrl: "/app/appointment.html"
        })
    
});


app.controller("mainController", function ($scope) {

    $scope.ShowTab = function (tabName) {


        var cardBody = $("#" + tabName)
        var cardHeadId = angular.element(cardBody).attr("aria-labelledby");
        var cardHead = angular.element($('#' + cardHeadId)[0].firstElementChild.firstElementChild);
        var val = cardHead.attr("aria-expanded");

        $(".card-collapse").each(function () {

            $(this).collapse('hide');
        });

        $(".card-title").each(function () {
            var temb = angular.element($(this.firstElementChild));
            temb.addClass('collapsed');
            temb.attr("aria-expanded", false);

        });



        cardBody.collapse('show');

        if (val == "true") {

            cardHead.addClass('collapsed');
            cardHead.attr("aria-expanded", false);

        }

        if (val == "false") {

            cardHead.removeClass('collapsed');
            cardHead.attr("aria-expanded", true);

        }

    };


});

app.controller("laborLawController", function () {

    load_js();

});

app.controller("contactusCtrl", function ($scope) {

    load_js();

});

app.controller("ourteamCtrl", function ($scope) {

    load_js();

});

app.controller("firmOverviewCtrl", function ($scope) {

    load_js();

});

app.controller("insuranceLawController", function () {

    load_js();

});

app.controller("testimonialsCtrl", function () {

    load_js();

});

app.controller("bankruptcyController", function () {

    load_js();

});

app.controller("insuranceLawController", function () {

    load_js();

});

app.controller("governmentRegulationsController", function () {

    load_js();

});

app.controller("contractDraftingController", function () {

    load_js();

});

app.controller("maritimeLawController", function () {

    load_js();

});

app.controller("medicalMalpracticeController", function () {

    load_js();

});

app.controller("shariaLawController", function () {

    load_js();

});

app.controller("expertOpinionController", function () {

    load_js();

});

app.controller("civillawController", function () {

    load_js();
});

app.controller("willTrustController", function () {

    load_js();
});

app.controller("about-us", function () {

    load_js();
});

app.controller("IntellectualPropertyController", function () {

    load_js();
});

app.controller("arbitrationController", function () {

    load_js();
});

app.controller("practiseAreasController", function () {

    load_js();
});

app.controller("litigationController", function () {

    load_js();
});

app.controller("commercialCorporateController", function () {

    load_js();
});

app.controller("whyRetainerCtrl", function () {

    load_js();
});

app.controller("realEstateConstructionController", function () {

    load_js();
});

app.controller("familyLawController", function () {

    load_js();
});

app.controller("criminalLawController", function () {

    load_js();
});

app.controller("careersController", function () {

    load_js();
});

app.controller("appointmentController", function () {

    load_js();
});


app.controller("home", ['$scope', 'lawfirmService', function ($scope, lawfirmService) {

    load_js();

    lawfirmService.GetAllFaq(function (response) {
        debugger;
        $scope.faqs = angular.copy(response.data, $scope.faqs);
        $scope.firstFaq = response.data[0];
        $scope.restFaqs = response.data.slice(1, response.data.length)

    },
        function (response) { });


    lawfirmService.GetAllTestimonial(function (response) {
        debugger;
        $scope.testemonials = response.data;
    },
        function (response) { });

    

}]);

'use strict';

app.factory("signalR", ['$rootScope', function ($rootScope) {

    var $hub = $.connection.chatHub;
    var connection = null;
    var signalR = {

        startHub: function () {
            console.log("started");
            connection = $.connection.hub.start();
        },

        ////////////////////// SERVER METHODS/////////////////

        StartChat: function (username, email) {
            connection.done(function () {
                $hub.server.startChat(username, email);
            });
        },

        sendMessage: function (message, toCID) {
            connection.done(function () {
                $hub.server.sendMessage(message, toCID);
            });
        },

        adminLogin: function (email) {
            connection.done(function () {
                $hub.server.adminLogin(email);
            });
        },

        //////////////////////// CLIENT METHODS ////////////////////            

        userAssigned: function (callback) {
            $hub.client.userAssigned = callback;
        },

        getAdminData: function (callback) {
            $hub.client.getAdminData = callback;
        },

        recieveMessage: function (callback) {
            $hub.client.recieveMessage = callback;
        },

    }
    return signalR;
}]);

function load_js() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = '/app/js/script.js';
    head.appendChild(script);
}

function load_chat_js() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = '/app/js/chatscript.js';
    head.appendChild(script);
}

