const Review = require('../models/Review.model')

module.exports.reviewController = {
    createReview: async (req,res)=> {
        try {
            const data = await Review.create({
                text: req.body.text,
                user: req.body.user,
                book: req.body.book
            })
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    patchReview: async (req,res)=> {
        try {
            const data = await Review.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    deleteReview: async (req,res)=>{
        try {
            const data = await Review.findByIdAndRemove(req.params.id)
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    gitReview: async (req,res) =>{
        try {
            const data = await Review.find({})
            res.json(data)
        }catch (error){
            res.json(error)
        }
    },
    gitReviewId: async (req,res) =>{
        try {
            const data = await Review.findById(req.params.id)
            res.json(data)
        }catch (error){
            res.json(error)
        }
    }
}