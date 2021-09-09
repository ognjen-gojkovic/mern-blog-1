const Categories = require("../models/Model.Category");

const controllerCategories = {
  createCategory: async (req, res) => {
    try {
      const { category } = req.body;

      /**
       * @desc
       * check if category exists
       */
      if (!category)
        return res.status(400).json({ success: false, msg: "Invalid Input!" });

      /**
       * @desc
       * create and send response
       */
      const newCat = await Categories.create({ name: category });

      return res
        .status(200)
        .json({ success: true, msg: "Category created!", category: newCat });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
  getCategories: async (req, res) => {
    try {
      /**
       * @desc
       * fetch all categories from database and send response
       */
      const allCategories = await Categories.find();

      return res.status(200).json({
        success: true,
        msg: "Success",
        categories: allCategories,
      });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
};

module.exports = controllerCategories;
