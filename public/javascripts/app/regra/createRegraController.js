angular.module("regraModule")
.controller("createRegraController", createRegraController);

createRegraController.$inject = ['$scope', '$timeout', '$window', 'regraService'];

function createRegraController($scope, $timeout, $window, regraService) {

    console.log("Estou em Create Regra");

    // var request = require('request');

    // request('http://localhost:3000/api/v1/federal_units', function (error, response, body) {
    //   console.log(body);
    // });

    $scope.regra = { };
    $scope.servicos = { };

    getAllServicos();

    function getAllServicos() {
        regraService.getFederalUnits().then(function (data){
            $scope.servicos = data.data.servicos;
            // console.log($scope.servicos)

            // request('http://localhost:3000/api/v1/federal_units', function (error, response, body) {
            //   console.log(body);
            // });
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
