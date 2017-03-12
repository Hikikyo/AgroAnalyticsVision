angular.module("impostoModule")
.controller("editImpostoController", editImpostoController);


editImpostoController.$inject = ['$scope', '$timeout', '$window', 'impostoService'];


function editImpostoController($scope, $timeout, $window, impostoService) {


    $scope.imposto = { };

    console.log(sessionStorage.codigo_imposto);

    getImposto(sessionStorage.codigo_imposto);

    function getImposto(codigo_imposto) {
        impostoService.getImposto(codigo_imposto).then(function(data){
            $scope.imposto = data.data.imposto[0];
            $scope.imposto.taxa_imposto *= 100;
            console.log(data.data.imposto[0]);
        });
    }

    $scope.editImposto = function(imposto) {
        if (imposto.nome_imposto == null || imposto.taxa_imposto == null){
            $window.alert('Todos os campos devem ser preenchidos!')
        } 
        else
            impostoService.editImposto(imposto)
            .then(function (data) {
                /* $timeout(function () {

                }, 3000) */
            })

    }

    $scope.redirectEditImposto = function() {
        
        $window.location.href = '/editImposto';
        
        }
    
    $scope.redirectHome = function() {

        $window.location.href = '/';
        
        }

    }
