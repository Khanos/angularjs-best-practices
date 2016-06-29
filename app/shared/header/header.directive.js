angular
    .module('app.header')
    .directive('appHeader', appHeader);

    function appHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/header/partials/header.html'
        };
    }
