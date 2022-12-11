const Todos = require("../models/todos");
 const resp = require("../helpers/apiResponse");


exports.add_Todos = async (req, res) => {
  const { userId,title,completed } = req.body;

  const newTodos = new Todos({
    userId:userId,
    title:title,
    completed:completed
  });
  newTodos
  .save()
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}

exports.todosList = async (req, res) => {
  await Todos.find().sort({ sortorder: 1 })
  .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
};

exports.deleteTodoslist = async (req, res) => {
  
    await Todos.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));

}

exports.viewone_todos = async (req, res) => {
   await Todos.findOne({ _id: req.params.id })
   .then((data) => resp.successr(res, data))
  
  .catch((error) => resp.errorr(res, error));
}
 
exports.update_todos = async (req, res) => {
 
    await Todos.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  
 