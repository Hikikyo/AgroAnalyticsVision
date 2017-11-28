angular.module("indexModule").controller("indexController", indexController);

indexController.$inject = ['$scope', '$timeout', '$window', 'datumApiService', 'datumApiMockService', 'globalVarsService'];

// Start of Index Controller
function indexController($scope, $timeout, $window, datumApiService, datumApiMockService, globalVarsService) {

  // Upon load methods
  var development_env = 'development';
  var use_mock = false;
  var defaultService = datumApiService;
  $scope.cities = [{name: 'Selecione o estado'}];

  globalVarsService.env().then(function(response) {
    var env_vars = response.data.ENV;
    development_env = env_vars.ENV;
    use_mock = (env_vars.MOCK_DATUM_API == 'true');

    if(use_mock) {
      defaultService = datumApiMockService;
    };

    defaultService.getFederalUnits().then(function(response) {
      $scope.states = response;
      $scope.$apply();
    });
  });

  // Reactive functions
  $scope.filterByState = function(stateId) {
    defaultService.getCitiesByFederalUnit(stateId).then(function(response) {
      $scope.cities = response.city;
      $scope.$apply();
    })
  }

  $scope.getCityAvailableData = function(cityId) {
    defaultService.getAvailableDataFromCity(cityId).then(function(response) {
      console.log(response);
    })
  }
}
