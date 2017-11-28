angular.module("regraModule")
.factory("regraService", regraService);

regraService.$inject = ['$http'];

function regraService($http) {
    var codigo_regra = "";

    return {

        createRegra : function (regra) {
            return $http.post('/createRegra', regra);
        },
        editRegra : function (regra) {
            return $http.post('/editRegra/' + regra.codigo_regra_fat,
                {
                nome_regra : regra.nome_regra,
                taxa_regra : regra.taxa_regra/100
                }
            );
        },
        deleteRegra : function (codigo_regra_fat) {
            return $http.post('/deleteRegra/' + codigo_regra_fat, {});
        },
        getAllRegras : function () {
            return $http.get('/getAllRegras');
        },
        getAllServicos : function () {
            return $http.get('/getAllServicos');
        },
        getAllRegras : function () {
            return $http.get('/getAllRegras');
        },
        getRegra : function (codigo_regra_fat) {
            return $http.get('/getRegra/' + codigo_regra_fat);
        },
        getFederalUnits : function() {
            return $http.get('http://localhost:3000/api/v1/federal_units');
        }

    }
}