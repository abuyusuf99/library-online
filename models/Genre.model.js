const mongoose = require('mongoose')
const genreSchema = mongoose.Schema({
    title: String,
    discript: String
})
const Genre = mongoose.model("Genre", genreSchema)
module.exports = Genre