
var Vendor = require('../models/vendor');

console.log(Vendor);

module.exports = {
  index: function(req, res){
    Vendor.find({}, function(err, vendors){
      if (err){
        res.json(err);
      }
      else {
        res.json(vendors);
      }
    });
  },
  create: function(req, res){
    Vendor.create(req.body, function(err, vendor){
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
    Vendor.remove({_id: req.params.id}, function(err){
      if (err){
        res.json(err);
      }
      else {
        res.json(true);
      }
    });
  }
}
