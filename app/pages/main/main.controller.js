angular
    .module('app.main')
    .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope'];
    function mainCtrl($scope) {
        $scope.message = "Esta es una prueba";
    }
