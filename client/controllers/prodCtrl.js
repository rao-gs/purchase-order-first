App.controller('ProductController', function($scope, ProductFactory, $location){
  $scope.products = [];

  function getAllProducts(){
    ProductFactory.getProducts()
    .then( function(serverResponse){
      $scope.products = serverResponse.data;
    })
  }
  getAllProducts();

  $scope.createProduct = function(){
    ProductFactory.createProduct($scope.newProduct)
    .then( function(serverResponse){
      console.log(serverResponse.data)
      $scope.newProduct = {};
      getAllProducts();
      $location.path('/products');
      // $location.path('/');
    })
    .catch( function(error){
      console.log(error)
    })
  }

  $scope.removeProduct = function(prodID){
    ProductFactory.removeProduct(prodID)
    .then( getAllProducts )
  }
})
