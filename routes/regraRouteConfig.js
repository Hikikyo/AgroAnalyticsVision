function regraRouteConfig (app) {
    this.app = app;
    this.routeTable = [];
    this.init();
}

regraRouteConfig.prototype.init = function () {
    var self = this;

    this.addRoutes();
    this.processRoutes();
}

regraRouteConfig.prototype.processRoutes = function () {
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

regraRouteConfig.prototype.addRoutes = function () {
    var self = this;

/* PAGES ------------------------------------------------------------------------------------------------------------------------------------------------- */
    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/createRegra',
        callbackFunction : function (request, response) {
            response.render('createRegra',  { title : "Cadastro de Regra de Faturamento"});
        }

    })
    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/viewRegra',
        callbackFunction : function (request, response) {
            response.render('viewRegra',  { title : "Consulta de Regras de Faturamento"});
        }

    })
    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/editRegra',
        callbackFunction : function (request, response) {
            response.render('editRegra',  { title : "Edição de regras do regra"});
        }

    })
/* GET METHODS ------------------------------------------------------------------------------------------------------------------------------------------- */
    /* PROCURA TODOS OS SERVICOS */
    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/getAllServicos',
        callbackFunction : function (request, response) {
            var regraDAO = require("../server/dao/regraDAO.js");
            regraDAO.regraDAO.getAllServicos(
                function (servicos) {
                    //console.log(servicos);
                    response.json({servicos : servicos});
                }
            );
        }

    })
    /* PROCURA TODOS OS REGRAS */
    self.routeTable.push({
        requestType : 'get',
        requestUrl : '/getAllRegras',
        callbackFunction : function (request, response) {
            var regraDAO = require("../server/dao/regraDAO.js");
            regraDAO.regraDAO.getAllRegras(
                function (regras) {
                    //console.log(servicos);
                    response.json({regras : regras});
                }
            );
        }

    })
/* POST METHODS ------------------------------------------------------------------------------------------------------------------------------------------- */
   /* CRIA REGRA */
    self.routeTable.push({
        requestType : 'post',
        requestUrl : '/createRegra',
        callbackFunction : function (request, response) {

          var regraDAO = require("../server/dao/regraDAO.js");

          regraDAO.regraDAO.createRegra(request.body,
          function (status) {
              response.json(status);
              console.log(status);
          });
        }

    })
    /* DELETA REGRA */
    self.routeTable.push({
        requestType : 'post',
        requestUrl : '/deleteRegra/:codigo_regra_fat',
        callbackFunction : function (request, response) {

          var regraDAO = require("../server/dao/regraDAO.js");

          regraDAO.regraDAO.deleteRegra(request.params.codigo_regra_fat,
          function (status) {
              response.json(status);
              console.log(status);
          });
        }

    })
}

module.exports = regraRouteConfig;