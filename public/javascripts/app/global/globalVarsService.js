angular.module("indexModule")
.factory("globalVarsService", globalVarsService);

globalVarsService.$inject = ['$http'];

function globalVarsService($http) {
	return {
		env : function(){
      return $http.get('/env');
    }
  }
}