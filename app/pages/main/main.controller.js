angular
    .module('app.main')
    .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', 'mainSvc'];
    function mainCtrl($scope, mainSvc) {
        console.log(mainSvc);
        $scope.content = mainSvc;
        $scope.message = "Esta es una prueba";
    }
