App.controller('OrderController', function($scope, VendorFactory, ProductFactory, OrderFactory, $location){
  $scope.vendors = [];
  $scope.products = [];
  $scope.orders = [];

  function getAllVendors(){
    VendorFactory.getVendors()
    .then( function(serverResponse){
      $scope.vendors = serverResponse.data;
    })
  }
  getAllVendors();

  function getAllProducts(){
    ProductFactory.getProducts()
    .then( function(serverResponse){
      $scope.products = serverResponse.data;
    })
  }
  getAllProducts();

  function getOrders(){
    OrderFactory.getOrders()
    .then( function(serverResponse){
      $scope.orders = serverResponse.data;
    })
  }
  getOrders();

  $scope.createOrder = function(){
    OrderFactory.createOrder($scope.newOrder)
    .then( function(serverResponse){
      console.log(serverResponse.data)
      $scope.newOrder = {};
      getOrders();
      $location.path('/orders');
    })
    .catch( function(error){
      console.log(error)
    })
  }
  $scope.removeOrder = function(id){
    OrderFactory.removeOrder(id)
    .then( getOrders )
  }
})
