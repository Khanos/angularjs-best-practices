angular
    .module('app.footer')
    .directive('appFooter', appFooter);

    function appFooter() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/footer/partials/footer.html'
        }
    }
