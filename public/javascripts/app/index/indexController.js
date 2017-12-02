angular.module("indexModule").controller("indexController", indexController);

// Dependency injection
indexController.$inject = ['$scope', '$timeout', '$window', 'datumApiService', 'datumApiMockService', 'globalVarsService'];

// Controller
function indexController($scope, $timeout, $window, datumApiService, datumApiMockService, globalVarsService) {

  // ENV variables
  var development_env = 'development';
  var use_mock = false;
  var defaultService = datumApiService;

  // Scope variables
  $scope.loadingWheel = false;
  $scope.cities = [{name: 'Selecione o estado'}];
  $scope.city_name = 'Selecione uma Cidade';
  // $scope.city_ws = 'lll';

  // --------------------------------
  // Upon load methods
  // --------------------------------
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
  // --------------------------------

  // --------------------------------
  // Reactive functions
  // --------------------------------
  $scope.filterByState = function(stateId) {
    defaultService.getCitiesByFederalUnit(stateId).then(function(response) {
      $scope.cities = response.city;
      $scope.$apply();
    })
  }

  $scope.getCityAvailableData = function(city) {
    turnLoadingWheelOn()
    refreshMap([city.latitude, city.longitude], city.name)
    defaultService.getAvailableDataFromCity(city.id).then(function(response) {
      handleCityData(response);
      turnLoadingWheelOff();
      $scope.$apply();
    })
  }


  // --------------------------------
  // Auxiliary methods
  // --------------------------------
  // - Handles city data upon loading
  handleCityData = function(data) {
    console.log(data);

    if(data.weather_station_data.has_own_weather_station){
      addWSMarkerOnMap(false, undefined, data.weather_station_data.weather_station_name)
    }
    else{
      var latitude = data.weather_station_data.reference_city_latitude
      var longitude = data.weather_station_data.reference_city_longitude

      var coordinates = [latitude, longitude]

      addWSMarkerOnMap(true, coordinates, data.weather_station_data.weather_station_name);
      $scope.distanceBetweenCityAndWS = data.weather_station_data.distance;
    }

    $scope.hasNativeCommodities = data.has_available_native_commodities;
    $scope.hasCommonProducers = data.has_available_common_producers;
    $scope.hasSuggestedCommodities = data.has_available_common_producers;

    // renderCityDataButtons();
  }

  // - Loading wheel handling
  turnLoadingWheelOff = function() {
    $scope.loadingWheel = false
  }

  turnLoadingWheelOn = function() {
    $scope.loadingWheel = true
  }

  // - GMaps Refresh
  refreshMap = function(coordinates=[-25.363, 131.044], label, zoom=8) {
    var latitude = coordinates[0];
    var longitude = coordinates[1];

    $scope.city_name = label;
    $scope.city_ws = '';

    var uluru = { lat: latitude, lng: longitude };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoom,
      center: uluru
    });
    var marker = $scope.cityMarker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  // - GMaps Add Marker
  addWSMarkerOnMap = function(addMarker=false, coordinates=[-24.363, 130.044], label) {
    $scope.city_ws =" (" + label + ")";

    if(addMarker){
      $scope.city_ws_color = 'red'

      var latitude = coordinates[0];
      var longitude = coordinates[1];

      var uluru = { lat: latitude, lng: longitude };

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: uluru
      });

      var marker_1 = new google.maps.Marker({
        position: $scope.cityMarker.position,
        map: map
      });

      var marker_2 = new google.maps.Marker({
        position: uluru,
        map: map
      });
    } else {
      $scope.city_ws_color = 'green'
    }
  }
  // --------------------------------
}
