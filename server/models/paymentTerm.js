var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaymentTermSchema = new Schema({
  PamentTerm: String,
  PaymentTermDesc: String,
});


module.exports = mongoose.model("PaymentTerm", PaymentTermSchema);
