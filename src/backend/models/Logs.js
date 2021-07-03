const mongoose = require("mongoose");

// Define schema
var Schema = mongoose.Schema;

var LogsSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
    trim: true
  },
  logspace_id: {
    type: String,
    required: true,
    trim: true
  },
  log_level: {
    type: String,
    required: true,
    trim: true
  },
  log_tag: {
    type: String,
    required: false,
    default: "",
    trim: true
  },
  log: {
    type: String,
    required: true,
    trim: true
  }
});

// Compile model from schema
const LogsModel = mongoose.model("Logs", LogsSchema);

module.exports = LogsModel;
