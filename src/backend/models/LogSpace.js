const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

// Define schema
const Schema = mongoose.Schema;

const LogSpaceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
LogSpaceSchema.plugin(aggregatePaginate);

// Compile model from schema
const LogSpaceModel = mongoose.model("LogSpaces", LogSpaceSchema);

module.exports = LogSpaceModel;
