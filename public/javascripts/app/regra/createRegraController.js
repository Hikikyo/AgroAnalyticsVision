angular.module("regraModule")
.controller("createRegraController", createRegraController);


createRegraController.$inject = ['$scope', '$timeout', '$window', 'regraService'];


function createRegraController($scope, $timeout, $window, regraService) {


    $scope.regra = { };
    $scope.servicos = { };

    getAllServicos();

    function getAllServicos() {
        regraService.getAllServicos().then(function (data){
            $scope.servicos = data.data.servicos;
            console.log($scope.servicos)
        });
    }

    $scope.createRegra = function(regra) {
        if (regra.nome_regra == null || regra.codigo_servico == null){
            $window.alert('Todos os campos devem ser preenchidos!')
        } 
        else
            regraService.createRegra(regra)
            .then(function (data) {
                /* $timeout(function () {

                }, 3000) */
            })

    }

    $scope.redirectCreateRegra = function() {
        
        $window.location.href = '/createRegra';
        
        }
    
    $scope.redirectHome = function() {

        $window.location.href = '/';
        
        }

    }
