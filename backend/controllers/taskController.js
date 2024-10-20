const TaskModel = require("../models/taskModel");

const getTaskController = async (req, res) => {
  try {
    const { _id } = req.user;

    const tasks = await TaskModel.find({ userId: _id });

    return res.status(200).json({ success: true, tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const addTaskController = async (req, res) => {
  try {
    const { title, description, category, status, dueDate } = req.body;
    const { _id } = req.user;

    const task = new TaskModel({
      title,
      description,
      category,
      userId: _id,
      status,
      dueDate,
    });

    await task.save();

    return res
      .status(200)
      .json({ success: true, message: "task added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const updateTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;

    const task = await TaskModel.findById(id);

    if (task.userId !== _id) {
      return res.status(403).json({ success: false });
    }

    task.status = "completed";
    await task.save();

    return res
      .status(200)
      .json({ success: true, message: "task update successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

const deleteTaskController = async (req, res) => {
  try {
    const { id } = req.params;

    await TaskModel.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "task deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getTaskController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
};
