var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  imgUrl: String,
  description: String,
  quantity: Number,
  uom: String,
  createdAt: {type: Date, default: Date.now()},
});

ProductSchema.statics.isQuantityAvailable = function(quantityOrdered, productID, callback){
  this.findOne({_id: productID}, function(err, product){
    if (quantityOrdered > 0){
      product.quantity += quantityOrdered;
      product.save(function(){
        callback(true);
      })
    }
    else {
      callback(false);
    }
  })
};
ProductSchema.statics.returnQuantity = function(quantityOrdered, productID, callback){
  this.findOne({_id: productID}, function(err, product){
    if (quantityOrdered > 0) {
      product.quantity -= quantityOrdered;
      product.save(function(){
        callback(true);
      })
    }
    else {
      callback(false);
    }
  })
};
module.exports = mongoose.model("Product", ProductSchema);
