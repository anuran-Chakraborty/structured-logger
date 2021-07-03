const LogsModel = require("../models/Logs");
const LogSpaceModel = require("../models/LogSpace");

class LogSpaceController {
  static async create(req, res) {
    try {
      const logspace = new LogSpaceModel(req.body);
      await logspace.save();
      res.status(201).send({ message: "Log space successfully created" });
    } catch (e) {
      console.error("Error", e.message);
      res.status(500).send({ message: "Error in creating Log Space" });
    }
  }

  static async read(req, res) {
    try {
      const limit = req.query.limit || 25;
      const page = req.query.page || 1;
      const options = {
        page: page,
        limit: limit,
        customLabels: {
          totalDocs: "total",
          docs: "data"
        }
      };
      const aggr = LogSpaceModel.aggregate([
        {
          $project: {
            name: 1
          }
        }
      ]);
      const logspaces = await LogSpaceModel.aggregatePaginate(aggr, options);
      res.status(201).send(logspaces);
    } catch (e) {
      console.error("Error", e.message);
      res.status(500).send({ message: "Error in getting Log Space" });
    }
  }

  static async update(req, res) {
    res.status(200).send({ message: "update log space" });
  }

  static async delete(req, res) {
    try {
      const doc = await LogSpaceModel.deleteOne({
        _id: req.params.id
      });

      if (!doc) {
        return res.status(404).send({
          message: "Invalid id"
        });
      }

      // Also delete all logs
      await LogsModel.deleteMany({
        logspace_id: req.params.id
      });
      res.status(200).send({ message: "Deleted successfully!" });
    } catch (e) {
      console.error("Error", e.message);
      res.status(500).send({ message: "Error deleting logspace" });
    }
  }
}

module.exports = LogSpaceController;
