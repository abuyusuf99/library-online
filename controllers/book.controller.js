const Book = require("../models/Book.model");
const User = require("../models/User.model");

module.exports.bookController = {
  createBook: async (req, res) => {
    try {
      const data = await Book.create({
        title: req.body.title,
        genre: req.body.genre,
        review: req.body.review,
        author: req.body.author,
        isrented: req.body.isrented,
        user: req.body.user,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  patchBook: async (req, res) => {
    try {
      const data = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteBook: async (req, res) => {
    try {
      const data = await Book.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  gitBooks: async (req, res) => {
    try {
      const data = await Book.find({});
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  gitBookId: async (req, res) => {
    try {
      const data = await Book.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getisrented: async (req, res) => {
    try {
      // const { id } = req.params.id; //user id
      // const { bookId } = req.body.rentedbooks; // book id
      const user = await User.findById(req.params.id);
      const book = await Book.findById(req.body.bookId);
      if (book.isrented) {
        return res.json("Эта книга арендована");
      }
      if (user.isblocked) {
        return res.json("вы заблокированы");
      }
      if (user.rentedbooks.length >= 3) {
        return res.json("Нельзя арендовать книгу");
      }
      await book.updateOne({ $set: {isrented: true} });
      await user.updateOne({
        $push: {
            rentedbooks: req.body.bookId,
        },
      });
      res.json("книга добавлена");
    } catch (err) {
      res.json(err.message);
    }
  },
};
