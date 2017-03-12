function faturaRouteConfig (app) {

    this.app = app;
    this.routeTable = [];
    this.init();
}

faturaRouteConfig.prototype.init = function () {

    var self = this;

    this.addRoutes();
    this.processRoutes();
}

faturaRouteConfig.prototype.processRoutes = function () {

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

faturaRouteConfig.prototype.addRoutes = function () {

    var self = this;

    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/createFatura',
        callbackFunction : function (request, response) {

            response.render('createFatura',  { title : "Emissão de Fatura"});
        }

    })
    self.routeTable.push({
        
        requestType : 'post',
        requestUrl : '/createFatura',
        callbackFunction : function (request, response) {

          console.log(request.body);
          var faturaDAO = require("../server/dao/faturaDAO.js");

          faturaDAO.faturaDAO.createFatura(request.body,
          function (status) {
              response.json(status);
              console.log(status);
          });
        }

    })
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/viewFatura',
        callbackFunction : function (request, response) {

            response.render('viewFatura',  { title : "Consultar Faturas"});
        }

    })
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/getAllFaturas',
        callbackFunction : function (request, response) {
            var faturaDAO = require("../server/dao/faturaDAO.js");

            faturaDAO.faturaDAO.getAllFaturas(
                function (faturas) {
                    //console.log(faturas);
                    response.json({faturas : faturas});
                }
            );
        }

    })
    

}

module.exports = faturaRouteConfig;