var App = angular.module('PurchaseModule', ['ngRoute']);

App.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/_index.html',
    controller: 'IndexController'
  })
  .when('/products', {
    templateUrl: '/partials/_products.html',
    controller: 'ProductController'
  })
  .when('/products/:id', {
    templateUrl: '/partials/_show.html',
    controller: 'ShowController'
  })
  .when('/vendors', {
    templateUrl: '/partials/_vendors.html',
    controller: 'VendorController'
  })
  .when('/orders', {
    templateUrl: '/partials/_orders.html',
    controller: 'OrderController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
