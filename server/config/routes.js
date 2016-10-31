var Vendor = require('../controllers/vendors')
var Product = require('../controllers/products')
var Order = require('../controllers/orders')
var PaymentTerm = require('../controllers/PaymentTerms')

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.get('/vendors', Vendor.index);
  app.post('/vendors', Vendor.create);
  app.delete('/vendors/:id', Vendor.delete);
  app.get('/products', Product.index);
  app.post('/products', Product.create);
  app.get('/products/:id', Product.show);
  app.delete('/products/:id', Product.delete);
  app.get('/orders', Order.index);
  app.post('/orders', Order.create);
  app.delete('/orders/:id', Order.delete);
}
