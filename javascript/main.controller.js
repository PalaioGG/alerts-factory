var app = angular.module('myApp', []);

app
  .controller('mainCtrl', [
    '$scope',
    'alertFactory',
    function($scope, alertFactory) {

      $scope.message = "Angular is working fine";

      $scope.makeSomethingHappen = function(type) {
        var message = '';

        // Just checking the type
        switch(type) {
          case 'success':
            message = "A success message"
            break;
          case 'error':
            message = "An error message"
            break;
          case 'warning':
            message = "A warning message"
            break;
          case 'general':
            message = "A general message"
            break;
        };

        // This function is defined in the Factory. You can call her from wherever as soon as you inject the 'alertFactory'
        invokeAlert(type, message);
      };

    }
  ])
