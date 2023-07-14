const Genre = require('../models/Genre.model')

module.exports.genreController = {
    createGenre: async (req,res)=> {
        try {
            const data = await Genre.create({
                title: req.body.title,
               discript: req.body.discript
            })
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    patchGenre: async (req,res)=> {
        try {
            const data = await Genre.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    deleteGenre: async (req,res)=>{
        try {
            const data = await Book.findByIdAndRemove(req.params.id)
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    gitGenres: async (req,res) =>{
        try {
            const data = await Book.find()
            res.json(data)
        }catch (error){
            res.json(error)
        }
    },
    gitGenreId: async (req,res) =>{
        try {
            const data = await Book.findById(req.params.id)
            res.json(data)
        }catch (error){
            res.json(error)
        }
    }
}