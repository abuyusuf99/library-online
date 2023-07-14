const mongoose = require('mongoose')
const bookSchema = mongoose.Schema ({
title: String,
genre:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genre"
},
review: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Review"
}],
author: String,
isrented: {
    type: Boolean,
    default: null
}
})
const Book = mongoose.model("Book", bookSchema)
module.exports = Book