angular.module("faturaModule")
.controller("createFaturaController", createFaturaController);


createFaturaController.$inject = ['$scope', '$timeout','faturaService'];


function createFaturaController($scope, $timeout, faturaService) {


    $scope.fatura = { };

    $scope.createFatura = function(fatura) {
        
        faturaService.createFatura(fatura)
        .then(function (data) {
            /* $timeout(function () {

            }, 3000) */
        })

    }
}