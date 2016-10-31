App.factory('OrderFactory', function($http){
  var factory = {};

  factory.getOrders = function(){
    return $http.get('/orders')
  }
  factory.createOrder = function(newOrder){
    return $http.post('/orders', newOrder)
  }
  factory.removeOrder = function(id){
    return $http.delete(`/orders/${id}`)
  }
  return factory;
})
