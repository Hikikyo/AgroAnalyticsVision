angular.module("regraModule")
.controller("viewRegraController", viewRegraController);


viewRegraController.$inject = ['$scope', '$timeout', '$window', 'regraService'];


function viewRegraController($scope, $timeout, $window, regraService) {


    $scope.regras = { };
    $scope.servicos = { };
    $scope.id_delete = null;

    getAllServicos();
    getAllRegras();

    function getAllServicos() {
        regraService.getAllServicos().then(function (data){
            $scope.servicos = data.data.servicos;
            console.log($scope.servicos)
        });
    }

    function getAllRegras() {
        regraService.getAllRegras().then(function (data){
            $scope.regras = data.data.regras;
            for (i=0; i < $scope.regras.length; i++){
                for (j=0; j < $scope.servicos.length; j++){
                    if($scope.regras[i].codigo_servico == $scope.servicos[j].codigo_servico){
                        $scope.regras[i].nome_servico = $scope.servicos[j].nome_servico;
                    }
                }
            }
            console.log($scope.regras)
        });
    }

    $scope.deleteRegra = function(codigo_regra_fat) {
            regraService.deleteRegra(codigo_regra_fat)
            .then(function (data) {
                /* $timeout(function () {

                }, 3000) */
            })

    }

    $scope.setIdToDelete = function(codigo_regra_fat) {
            $scope.id_delete = codigo_regra_fat;
            console.log($scope.id_delete)
    }

    $scope.redirectViewRegra = function() {
        
        $window.location.href = '/viewRegra';
        
        }
    
    $scope.redirectHome = function() {

        $window.location.href = '/';
        
        }

    }
