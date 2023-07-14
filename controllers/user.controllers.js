const User = require('../models/User.model')

module.exports.userController = {
    createUser: async (req,res)=> {
        try {
            const data = await User.create({
                name: req.body.name,
                rentedbooks: req.body.rentedbooks,
                isBlocked: req.body.isBlocked
            })
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    patchUser: async (req,res)=> {
        try {
            const data = await User.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    deleteuser: async (req,res)=>{
        try {
            const data = await User.findByIdAndRemove(req.params.id)
            res.json(data)
        }catch(error) {
            res.json(error)
        }
    },
    gitUser: async (req,res) =>{
        try {
            const data = await User.find({})
            res.json(data)
        }catch (error){
            res.json(error)
        }
    },
    gitUserId: async (req,res) =>{
        try {
            const data = await User.findById(req.params.id)
            res.json(data)
        }catch (error){
            res.json(error)
        }
    },
    }


