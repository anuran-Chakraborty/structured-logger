const LogsModel = require("../models/Logs");
class LogsController {
  static async create(req, res) {
    try {
      const logs = new LogsModel(req.body);
      await logs.save();
      res.status(201).send({ message: "Log successfully created" });
    } catch (e) {
      console.error("Error", e.message);
      res.status(500).send({ message: "Error in creating Logs" });
    }
  }

  static async read(req, res) {
    try {
      const logs = await LogsModel.find({ logspace_id: req.params.id });
      res.status(201).send(logs);
    } catch (e) {
      console.error("Error", e.message);
      res.status(500).send({ message: "Error in getting Log Space" });
    }
  }
}

module.exports = LogsController;
