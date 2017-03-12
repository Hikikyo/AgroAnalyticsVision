angular.module("faturaModule")
.factory("faturaService", faturaService);


faturaService.$inject = ['$http'];


function faturaService($http) {
    return {

        createFatura : function (fatura) {
            return $http.post('/createFatura', 
                {
                codigo_lote : fatura.codigo_lote,
                codigo_contrato : fatura.codigo_contrato,
                codigo_regra_fat : fatura.codigo_regra_fat,
                data_vencimento : fatura.data_vencimento,
                valor_bruto_fatura : fatura.valor_bruto_fatura,    
                valor_liquido_fatura : fatura.valor_bruto_fatura
                }
            );
        },

        getAllFaturas : function () {
            return $http.get('/getAllFaturas');
        }

    }
}