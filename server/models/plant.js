var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlantSchema = new Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("Plant", PlantSchema);

var StorageLocSchema = new Schema({
  _plant: {type: Schema.Types.ObjectId, ref: 'Plant'},
  name: {type: String, required: true},
  desc: {type: String, required: true},
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("StorageLoc", StorageLocSchema);
