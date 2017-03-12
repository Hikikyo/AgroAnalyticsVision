var connectionProvider = require("../mysqlConnectionStringProvider.js");

var faturaDAO = {

    createFatura : function(fatura, OnSuccessfulCallback){

        var  insertStatement = "INSERT INTO fatura SET ?";

        var fatura = {
            codigo_lote : fatura.codigo_lote,
            codigo_contrato : fatura.codigo_contrato,
            codigo_regra_fat : fatura.codigo_regra_fat,
            data_inicio : new Date(),
            data_vencimento : new Date(),
            valor_bruto_fatura :fatura.valor_bruto_fatura,    
            valor_liquido_fatura : fatura.valor_liquido_fatura
        };

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        
        console.log(fatura)

        if (connection) {

            connection.query(insertStatement, fatura, function (err, result) {
                if (err) 
                     console.log("Error inserting : %s ",err );

                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }

    },

    getAllFaturas : function (callback) {

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        var queryStatement = "SELECT * FROM fatura";

        if (connection) {
            
            connection.query(queryStatement, function (err, rows, fields) {
                if (err) 
                     console.log("Error selecting : %s ",err );
                
                console.log(rows);

                callback(rows);
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

}

module.exports.faturaDAO = faturaDAO;