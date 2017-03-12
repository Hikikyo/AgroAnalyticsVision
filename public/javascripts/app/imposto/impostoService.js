angular.module("impostoModule")
.factory("impostoService", impostoService);


impostoService.$inject = ['$http'];


function impostoService($http) {

    var codigo_imposto = "";

    return {

        createImposto : function (imposto) {
            return $http.post('/createImposto', 
                {
                nome_imposto : imposto.nome_imposto,
                taxa_imposto : imposto.taxa_imposto/100
                }
            );
        },
        editImposto : function (imposto) {
            return $http.post('/editImposto/' + imposto.codigo_imposto, 
                {
                nome_imposto : imposto.nome_imposto,
                taxa_imposto : imposto.taxa_imposto/100
                }
            );
        },
        deleteImposto : function (codigo_imposto) {
            return $http.post('/deleteImposto/' + codigo_imposto, {});
        },
        getAllImpostos : function () {
            return $http.get('/getAllImpostos');
        },

        getImposto : function (codigo_imposto) {
            return $http.get('/getImposto/' + codigo_imposto);
        }

    }
}