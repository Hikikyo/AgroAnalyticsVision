angular.module("impostoModule")
.controller("viewImpostoController", viewImpostoController);


viewImpostoController.$inject = ['$scope', '$timeout', '$window','impostoService'];


function viewImpostoController($scope, $timeout, $window, impostoService) {

    $scope.impostos = [];

    $scope.id_delete = null;

    getAllImpostos  ();

    function getAllImpostos() {
        impostoService.getAllImpostos().then(function (data){
            console.log(data.data.impostos)
            if(data.data
                && data.data.impostos
                && data.data.impostos.length > 0) {
                    for (var i = 0; i < data.data.impostos.length; i ++) {
                        data.data.impostos[i].taxa_imposto *= 100;
                        data.data.impostos[i].taxa_imposto = parseFloat(data.data.impostos[i].taxa_imposto).toFixed(2)
                    }
                    $scope.impostos = data.data.impostos;
                }
            console.log($scope.impostos )
        });
    }

    $scope.deleteImposto = function(codigo_imposto) {
            impostoService.deleteImposto(codigo_imposto)
            .then(function (data) {
                /* $timeout(function () {

                }, 3000) */
            })

    }

    $scope.setIdToDelete = function(codigo_imposto) {
            $scope.id_delete = codigo_imposto;
            console.log($scope.id_delete)
    }

    $scope.redirectViewImposto = function(codigo_imposto) {

        $window.location.href = '/viewImposto';
        
    }

    $scope.redirectUpdateImposto = function(codigo_imposto) {

        sessionStorage.codigo_imposto = codigo_imposto;

        $window.location.href = '/editImposto';
        
    }
}