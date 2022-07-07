import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  category: String,
  editorial: Date,
  cover: String,
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;