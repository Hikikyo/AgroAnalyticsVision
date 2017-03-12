angular.module("impostoModule")
.controller("createImpostoController", createImpostoController);


createImpostoController.$inject = ['$scope', '$timeout', '$window', 'impostoService'];


function createImpostoController($scope, $timeout, $window, impostoService) {


    $scope.imposto = { };

    $scope.createImposto = function(imposto) {
        if (imposto.nome_imposto == null || imposto.taxa_imposto == null){
            $window.alert('Todos os campos devem ser preenchidos!')
        } 
        else
            impostoService.createImposto(imposto)
            .then(function (data) {
                /* $timeout(function () {

                }, 3000) */
            })

    }

    $scope.redirectCreateImposto = function() {
        
        $window.location.href = '/createImposto';
        
        }
    
    $scope.redirectHome = function() {

        $window.location.href = '/';
        
        }

    }
