App.controller('IndexController', function($scope, ProductFactory, VendorFactory, OrderFactory){
  $scope.products = [];
  $scope.vendors = [];
  $scope.orders = [];

  function getAllProducts(){
    ProductFactory.getProducts()
    .then( function(serverResponse){
      $scope.products = serverResponse.data;
    })
  }
  getAllProducts();

  function getAllVendors(){
    VendorFactory.getVendors()
    .then( function(serverResponse){
      $scope.vendors = serverResponse.data;
    })
  }
  getAllVendors();

  function getOrders(){
    OrderFactory.getOrders()
    .then( function(serverResponse){
      $scope.orders = serverResponse.data;
    })
  }
  getOrders();
})
