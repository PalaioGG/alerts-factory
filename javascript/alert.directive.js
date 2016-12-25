var app = angular.module('myApp');

app
.directive('alertDirective', [
  'alertFactory',
  function(alertFactory) {
    return {
        restrict: 'EA',
        templateUrl: '../components/alert.html',
        controller: function($scope, $timeout, alertFactory) {
          // Listening for signal
          $scope.$on('alert signal', function(event, arg) {
            manageAlert();
          });

          $scope.alerts = [];

          // Define the content and functionality of the alert message
          manageAlert = function() {
            // Push every alert in the array
            $scope.alerts.push({
              message : alert.message,
              type : alert.type
            })
            // Show only for 3 second. FIFO
            $timeout( function() {
              $scope.alerts.shift();
            }, 5000)

          };

        }
    };
  }
]);
