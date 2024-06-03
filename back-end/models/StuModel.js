const mongoose = require("mongoose");
const StuSchema = new mongoose.Schema({
    "rollno":String,
    "name":String,
    "city":String,
    "fees":String,
    "image":String
});
module.exports = mongoose.model("stuDetail", StuSchema);