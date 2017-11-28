angular.module("indexModule").controller("indexController", indexController);

// indexController.$inject = ['$scope', '$timeout', '$window', 'datumApiService', 'globalVarsService'];
indexController.$inject = ['$scope', '$timeout', '$window', 'datumApiService', 'datumApiMockService', 'globalVarsService'];
// environmentSettings.$inject = ['globalVarsService'];

// Start of Index Controller
function indexController($scope, $timeout, $window, datumApiService, datumApiMockService, globalVarsService) {

  var development_env = 'development';
  var use_mock = false;
  var teste = 'TESTE'
  $scope.states = null;
  // $scope.states = null;

  globalVarsService.env().then(function(response) {
    var defaultService = datumApiService;
    var env_vars = response.data.ENV;

    development_env = env_vars.ENV;
    use_mock = (env_vars.MOCK_DATUM_API == 'true');

    if(use_mock) {
      defaultService = datumApiMockService;
    };

    defaultService.getFederalUnits(function(response) {
      // while(!response){
      //   console.log('Didnt respond!');
      // };
      // console.log(response);
      $scope.states = response;
      debugger;
      // $scope.states = defaultService.getFederalUnits();
    });

    // $scope.states = [{name: 'Pastelaria'}];
    console.log(teste);
  });

  // $scope.redirectCreateImposto = function() {
  //     $window.location.href = '/createImposto';
  // }

  // $scope.redirectHome = function() {
  //     $window.location.href = '/';
  // }
}
