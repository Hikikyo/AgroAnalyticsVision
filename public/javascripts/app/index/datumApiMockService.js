angular.module("indexModule")
.factory("datumApiMockService", datumApiMockService);

datumApiMockService.$inject = ['$http'];

function datumApiMockService($http) {

    var mockStates = [
        {"id": "59867b535718ddc0b8efd98a", "name": "Amazonas", "name_abbr": "AM"},
        {"id": "59867b535718ddc0b8efd98b", "name": "Roraima", "name_abbr": "RR"},
        {"id": "59867b535718ddc0b8efd98c", "name": "Amapá", "name_abbr": "AP"},
        {"id": "59867b535718ddc0b8efd98d", "name": "Pará", "name_abbr": "PA"},
        {"id": "59867b535718ddc0b8efd98e", "name": "Tocantins", "name_abbr": "TO"},
        {"id": "59867b535718ddc0b8efd98f", "name": "Rondônia", "name_abbr": "RO"},
        {"id": "59867b535718ddc0b8efd990", "name": "Acre", "name_abbr": "AC"},
        {"id": "59867b535718ddc0b8efd991", "name": "Maranhão", "name_abbr": "MA"},
        {"id": "59867b535718ddc0b8efd992", "name": "Piauí", "name_abbr": "PI"},
        {"id": "59867b535718ddc0b8efd993", "name": "Ceará", "name_abbr": "CE"},
        {"id": "59867b535718ddc0b8efd994", "name": "Rio Grande do Norte", "name_abbr": "RN"},
        {"id": "59867b535718ddc0b8efd995", "name": "Pernambuco", "name_abbr": "PE"},
        {"id": "59867b535718ddc0b8efd996", "name": "Paraíba", "name_abbr": "PB"},
        {"id": "59867b535718ddc0b8efd997", "name": "Sergipe", "name_abbr": "SE"},
        {"id": "59867b535718ddc0b8efd998", "name": "Alagoas", "name_abbr": "AL"},
        {"id": "59867b535718ddc0b8efd999", "name": "Bahia", "name_abbr": "BA"},
        {"id": "59867b535718ddc0b8efd99a", "name": "São Paulo", "name_abbr": "SP"},
        {"id": "59867b535718ddc0b8efd99b", "name": "Rio de Janeiro", "name_abbr": "RJ"},
        {"id": "59867b535718ddc0b8efd99c", "name": "Espírito Santo", "name_abbr": "ES"},
        {"id": "59867b535718ddc0b8efd99d", "name": "Minas Gerais", "name_abbr": "MG"},
        {"id": "59867b535718ddc0b8efd99e", "name": "Mato Grosso", "name_abbr": "MT"},
        {"id": "59867b535718ddc0b8efd99f", "name": "Mato Grosso do Sul", "name_abbr": "MS"},
        {"id": "59867b535718ddc0b8efd9a0", "name": "Goiás", "name_abbr": "GO"},
        {"id": "59867b535718ddc0b8efd9a1", "name": "Paraná", "name_abbr": "PR"},
        {"id": "59867b535718ddc0b8efd9a2", "name": "Rio Grande do Sul", "name_abbr": "RS"},
        {"id": "59867b535718ddc0b8efd9a3", "name": "Santa Catarina", "name_abbr": "SC"},
        {"id": "59867b535718ddc0b8efd9a4", "name": "Distrito Federal", "name_abbr": "DF"}
    ];

    return {
            getFederalUnits : function(callback){
                callback(mockStates);
            }

            // createImposto : function (imposto) {
            //     return $http.post('/createImposto',
            //         {
            //         nome_imposto : imposto.nome_imposto,
            //         taxa_imposto : imposto.taxa_imposto/100
            //         }
            //     );
            // },
            // editImposto : function (imposto) {
            //     return $http.post('/editImposto/' + imposto.codigo_imposto,
            //         {
            //         nome_imposto : imposto.nome_imposto,
            //         taxa_imposto : imposto.taxa_imposto/100
            //         }
            //     );
            // },
            // deleteImposto : function (codigo_imposto) {
            //     return $http.post('/deleteImposto/' + codigo_imposto, {});
            // },
            // getAllImpostos : function () {
            //     return $http.get('/getAllImpostos');
            // },

            // getImposto : function (codigo_imposto) {
            //     return $http.get('/getImposto/' + codigo_imposto);
            // }
    }
}