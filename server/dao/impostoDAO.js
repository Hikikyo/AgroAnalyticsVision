var connectionProvider = require("../mysqlConnectionStringProvider.js");

var impostoDAO = {

    createImposto : function(imposto, OnSuccessfulCallback){

        var  insertStatement = "INSERT INTO imposto SET ?";

        var imposto = {
            nome_imposto : imposto.nome_imposto,
            taxa_imposto : imposto.taxa_imposto
        };

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        
        console.log(imposto)

        if (connection) {

            connection.query(insertStatement, imposto, function (err, result) {
                if (err) 
                     console.log("Error inserting : %s ",err );

                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            }); 

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }

    },

    updateImposto : function(imposto, codigo_imposto, OnSuccessfulCallback){

        var  updateStatement = "UPDATE imposto SET ? WHERE codigo_imposto=?";

        var imposto = {
            nome_imposto : imposto.nome_imposto,
            taxa_imposto : imposto.taxa_imposto
        };

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        
        console.log(imposto)

        if (connection) {

            connection.query(updateStatement, [imposto, codigo_imposto], function (err, result) {
                if (err) 
                     console.log("Error inserting : %s ",err );

                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            }); 

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }

    },

    deleteImposto : function(codigo_imposto, OnSuccessfulCallback){

        var  deleteStatement = "DELETE FROM imposto WHERE codigo_imposto=?";

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if (connection) {

            connection.query(deleteStatement, codigo_imposto, function (err, result) {
                if (err) 
                     console.log("Error inserting : %s ",err );

                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            }); 

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }

    },

    getAllImpostos : function (callback) {

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        var queryStatement = "SELECT * FROM imposto";

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

    getImposto : function (codigo_imposto, callback) {

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        var queryStatement = "SELECT * FROM imposto WHERE codigo_imposto=?";

        console.log(queryStatement)

        if (connection) {
            
            connection.query(queryStatement, codigo_imposto, function (err, rows, fields) {
                if (err) 
                     console.log("Error selecting : %s ",err );
                
                console.log(rows);

                callback(rows);
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

}

module.exports.impostoDAO = impostoDAO;