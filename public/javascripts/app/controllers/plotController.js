angular.module("App")
.controller("plotController", plotController);

plotController.$inject = ['$scope', '$timeout', '$window'];

function plotController($scope, $timeout, $window) {

    var trace1 = {
      x: [1, 2, 3, 4], 
      y: [10, 15, 13, 17], 
      type: 'scatter'
    };
    var trace2 = {
      x: [1, 2, 3, 4], 
      y: [16, 5, 11, 9], 
      type: 'scatter'
    };

    $scope.graph = [trace1, trace2];

}