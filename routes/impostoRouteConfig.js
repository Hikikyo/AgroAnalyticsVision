function impostoRouteConfig (app) {

    this.app = app;
    this.routeTable = [];
    this.init();
}

impostoRouteConfig.prototype.init = function () {

    var self = this;

    this.addRoutes();
    this.processRoutes();
}

impostoRouteConfig.prototype.processRoutes = function () {

    var self = this;

    self.routeTable.forEach(function(route) {

        if (route.requestType == 'get') {
            console.log(route);
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') {
            console.log(route);
            self.app.post(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'delete') {}

    });
}

impostoRouteConfig.prototype.addRoutes = function () {

    var self = this;

/* PAGES ------------------------------------------------------------------------------------------------------------------------------------------------- */
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/createImposto',
        callbackFunction : function (request, response) {

            response.render('createImposto',  { title : "Cadastro de Imposto"});
        }

    })
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/viewImposto',
        callbackFunction : function (request, response) {

            response.render('viewImposto',  { title : "Consulta de impostos cadastrados"});
        }

    })
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/editImposto',
        callbackFunction : function (request, response) {

            response.render('editImposto',  { title : "Edição de dados do imposto"});
        }

    })
/* GET METHODS ------------------------------------------------------------------------------------------------------------------------------------------- */
    /* PROCURA TODOS OS IMPOSTOS */
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/getAllImpostos',
        callbackFunction : function (request, response) {
            var impostoDAO = require("../server/dao/impostoDAO.js");

            impostoDAO.impostoDAO.getAllImpostos(
                function (impostos) {
                    //console.log(impostos);
                    response.json({impostos : impostos});
                }
            );
        }

    })
    /* PROCURA POR IMPOSTO */
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/getImposto/:codigo_imposto',
        callbackFunction : function (request, response) {
            var impostoDAO = require("../server/dao/impostoDAO.js");

            console.log(request.params.codigo_imposto);

            impostoDAO.impostoDAO.getImposto(request.params.codigo_imposto,
                function (imposto) {
                    response.json({imposto : imposto});
                }
            );
        }

    })
/* POST METHODS ------------------------------------------------------------------------------------------------------------------------------------------- */
    /* CRIA IMPOSTO */
    self.routeTable.push({
        
        requestType : 'post',
        requestUrl : '/createImposto',
        callbackFunction : function (request, response) {

          console.log(request.body);
          var impostoDAO = require("../server/dao/impostoDAO.js");

          impostoDAO.impostoDAO.createImposto(request.body,
          function (status) {
              response.json(status);
              console.log(status);
          });
        }

    })
    /* EDITA IMPOSTO */
    self.routeTable.push({
        
        requestType : 'post',
        requestUrl : '/editImposto/:codigo_imposto',
        callbackFunction : function (request, response) {

          console.log(request.body);
          var impostoDAO = require("../server/dao/impostoDAO.js");

          impostoDAO.impostoDAO.updateImposto(request.body, request.params.codigo_imposto,
          function (status) {
              response.json(status);
              console.log(status);
          });
        }

    })
    /* DELETA IMPOSTO */
    self.routeTable.push({
        
        requestType : 'post',
        requestUrl : '/deleteImposto/:codigo_imposto',
        callbackFunction : function (request, response) {

          console.log(request.params.codigo_imposto);
          var impostoDAO = require("../server/dao/impostoDAO.js");

          impostoDAO.impostoDAO.deleteImposto(request.params.codigo_imposto,
          function (status) {
              response.json(status);
              console.log(status);
          });
        }

    })
    
}

module.exports = impostoRouteConfig;