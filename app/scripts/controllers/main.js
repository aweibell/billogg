'use strict';

angular.module('biloggApp')
    .controller('MainCtrl', function ($scope, $firebase, firebaseRef) {

        // syncData('cars').$bind($scope, 'cars');

        var ref = firebaseRef('cars');
        $scope.cars = $firebase(ref);

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.addNewCar = function () {
            console.log("Adding new car");
            $scope.editNewCar = true;
        };

        $scope.createCar = function () {
            console.log("Adding car to collection");
            $scope.cars.$add( {'regNo': $scope.newCar.regNo,  'make': $scope.newCar.make,  'model': $scope.newCar.model} );
            $scope.editNewCar = false;
        };
    });
