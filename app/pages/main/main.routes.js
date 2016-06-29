angular
    .module('app')
    .config(router);

    router.$inject = ['$routeProvider'];
    function router($routeProvider) {
        $routeProvider
        // route for the login-1 page
        .when('/', {
            templateUrl: 'app/pages/main/partials/main.html',
            controller: 'mainCtrl'
        })
        .when('/examples/modules', {
            templateUrl: 'app/pages/examples/1-modules.html'
        })
        .when('/examples/controllers', {
            templateUrl: 'app/pages/examples/2-Controllers-style-guide.html'
        })
        .when('/examples/services', {
            templateUrl: 'app/pages/examples/3-Services-style-guide.html'
        })
        .otherwise({redirectTo:'/'});
    }
