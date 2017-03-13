var mysqlConnectionString = {

    connection : {

        dev : {
            host : "localhost",
            user : "root",
            password : "katsu123",
            database : "faturamento",
            port : 3306
        },
        heroku : {
            host : "us-cdbr-iron-east-03.cleardb.net",
            user : "b6eb838bcc1e8d",
            password : "926f76f7",
            database : "heroku_5861d0673438130",
            port : 3306
        }

    }
};

module.exports.mysqlConnectionString = mysqlConnectionString;