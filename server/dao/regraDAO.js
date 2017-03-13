var connectionProvider = require("../mysqlConnectionStringProvider.js");

var regraDAO = {

    createRegra : function(regra, OnSuccessfulCallback){

        var  insertStatement = "INSERT INTO regra_faturamento SET ?";

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(insertStatement, regra, function (err, result) {
                if (err) 
                     console.log("Error inserting : %s ",err );

                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }

    },

    deleteRegra : function(codigo_regra_fat, OnSuccessfulCallback){

        var  deleteStatement = "DELETE FROM regra_faturamento WHERE codigo_regra_fat=?";

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(deleteStatement, codigo_regra_fat, function (err, result) {
                if (err) 
                     console.log("Error inserting : %s ",err );

                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            }); 

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }

    },

    getAllServicos : function (callback) {

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        var queryStatement = "SELECT * FROM servico";

        if (connection) {
            
            connection.query(queryStatement, function (err, rows, fields) {
                if (err) 
                     console.log("Error selecting : %s ",err );
                
                console.log(rows);

                callback(rows);
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    },

    getAllRegras : function (callback) {

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        var queryStatement = "SELECT * FROM regra_faturamento";

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

module.exports.regraDAO = regraDAO;