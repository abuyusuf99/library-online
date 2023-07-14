const express = require('express')
const  mongoose = require("mongoose")
const app = express()

app.use(express.json())

app.use(require('./routes/book.route'))
app.use(require('./routes/genre.route'))
app.use(require('./routes/user.route'))
app.use(require('./routes/review.route'))

mongoose.connect("mongodb+srv://Muslim:***Muslim95@cluster0.b4yowf9.mongodb.net/BooksStory")
.then(()=>{console.log('Сервер MangoDB подключен');})
.catch(()=>{console.log("Ошибка подключения к MangoDB");})

app.listen(4000,()=>{console.log("Сервер подключен");})
