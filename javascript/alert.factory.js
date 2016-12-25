var app = angular.module('myApp');

app
  .factory('alertFactory', [
    '$rootScope',
    function($rootScope) {
			message = '';
			type = '';

			// Set the alert parameters and make a broadcast
			invokeAlert = function(type, message) {
				this.alert = {
					message: message,
					type: type
				}

        // Calling for broadcast
				this.signalBroadcast();
			}

      // Broadcasting a signal through the rootScope
			signalBroadcast = function() {
				$rootScope.$broadcast('alert signal', ('Factory'));
			}

      return alert;
    }
  ]);
