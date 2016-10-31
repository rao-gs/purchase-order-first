var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  _vendor: {type: Schema.Types.ObjectId, ref: 'Vendor'},
  _product: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: Number,
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("Order", OrderSchema);

//
// var ItemSchema = new Schema({
//   srno: Number,
//   _product: {type: Schema.Types.ObjectId, ref: 'Product'},
//   quantity: Number,
//   price: Number,
//   StorLoc: String,
//   createdAt: {type: Date, default: Date.now()},
//   updatedAt: {type: Date, default: Date.now()}
// });
//
// module.exports = mongoose.model("Item", ItemSchema);
