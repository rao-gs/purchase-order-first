
var Vendor = require('../models/paymentTerm');

// console.log(PaymentTerm);

module.exports = {
  index: function(req, res){
    PaymentTerm.find({}, function(err, paymentTerms){
      if (err){
        res.json(err);
      }
      else {
        res.json(paymentTerms);
      }
    });
  },
  create: function(req, res){
    PaymentTerm.create(req.body, function(err, paymentTerms){
      if (err){
        res.json(err);
      }
      else {
        res.json(vendor);
        console.log(vendor);
      }
    });
  },
  delete: function(req, res){
    PaymentTerm.remove({_id: req.params.id}, function(err){
      if (err){
        res.json(err);
      }
      else {
        res.json(true);
      }
    });
  }
}
