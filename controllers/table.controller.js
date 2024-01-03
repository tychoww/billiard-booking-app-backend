const Table = require("../models/table.model");

const tableController = {
  getTableByID: async (req, res) => {
    try {
      const tableRes = await Table.findById(req.params.id);
      res.status(200).json(tableRes);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllTables: async (req, res) => {
    try {
      const tables = await Table.find();
      res.status(200).json({ data: tables });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // ADD USER
  addTable: async (req, res) => {
    try {
      console.log("---req body---", req.body);
      const newTable = new Table(req.body);
      const savedTable = await newTable.save();
      console.log("---saving---", savedTable);
      return res.status(200).json({ data: savedTable });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  updateTableByID: async (req, res) => {
    try {
      const table = await Table.findById(req.params.id);
      console.log(table);
      await table.updateOne({ $set: req.body });

      res.status(200).json("Updated successfully!");
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  deleteTableByID: async (req, res) => {
    try {
      await Table.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = tableController;
