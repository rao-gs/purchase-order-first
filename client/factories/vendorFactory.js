App.factory('VendorFactory', function($http){
  var factory = {};

  factory.getVendors = function(){
    return $http.get('/vendors')
  }
  factory.createVendor = function(newVendor){
    return $http.post('/vendors', newVendor)
  }
  factory.removeVendor = function(id){
    return $http.delete(`/vendors/${id}`)
  }
  return factory;
})
