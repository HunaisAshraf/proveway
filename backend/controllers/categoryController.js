const CategoryModel = require("../models/categoryModel");

const getCategoryController = async (req, res) => {
  try {
    const { _id } = req.user;

    const categories = await CategoryModel.find({ userId: _id });

    return res.status(200).json({ success: true, categories });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const addCategoryControlelr = async (req, res) => {
  try {
    const { _id } = req.user;
    const { category } = req.user;

    const newCategory = new CategoryModel({
      category,
      userId: _id,
    });
    await newCategory.save();

    return res
      .status(200)
      .json({ success: true, message: "category added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const deleteCategoryController = async (params) => {
  try {
    const { id } = req.params;

    await CategoryModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "category deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getCategoryController,
  addCategoryControlelr,
  deleteCategoryController,
};
