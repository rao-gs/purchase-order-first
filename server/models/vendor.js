var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VendorSchema = new Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("Vendor", VendorSchema);
