angular.module('starter', ['starter.controllers'])

//Define Routing for app
//  Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
                 function($routeProvider) {
                     $routeProvider.
                         when('/layout', {
                         templateUrl: 'templates/layout.html',
                         controller: 'layoutController'
                     }).
                         otherwise({
                         redirectTo: '/layout'
                     });
                 }]);


                 sampleApp.controller('layoutController', function($scope) {

                     $scope.message = 'This is new a layout';

                 });
