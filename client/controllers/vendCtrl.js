App.controller('VendorController', function($scope, VendorFactory, $location){
  $scope.vendors = [];

  function getAllVendors(){
    VendorFactory.getVendors()
    .then( function(serverResponse){
      $scope.vendors = serverResponse.data;
    })
  }
  getAllVendors();

  $scope.createVendor = function(){
    VendorFactory.createVendor($scope.newVendor)
    .then( function(serverResponse){
      console.log(serverResponse.data)
      $scope.newVendor = {};
      getAllVendors();
      $location.path('/vendors');
    })
    .catch( function(error){
      console.log(error)
    })
  }
  $scope.removeVendor = function(vendID){
    VendorFactory.removeVendor(vendID)
    .then( getAllVendors )
  }
})
