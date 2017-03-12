angular.module("faturaModule")
.controller("viewFaturaController", viewFaturaController);


viewFaturaController.$inject = ['$scope', '$timeout','faturaService'];


function viewFaturaController($scope, $timeout, faturaService) {

    $scope.faturas = [];

    getAllFaturas();

    function getAllFaturas() {
        faturaService.getAllFaturas().then(function (data){
            console.log(data.data.faturas)
            if(data.data
                && data.data.faturas
                && data.data.faturas.length > 0) {
                    $scope.faturas = data.data.faturas;
                }
            console.log($scope.faturas )
        });
    }
}