const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  rentedbooks: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book",
  }],
  isblocked: Boolean
});
const User = mongoose.model("User", userSchema);
module.exports = User;
