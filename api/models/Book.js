import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  authors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
  },
],
  title: String,
  category: String,
  editorial: Date,
  cover: String,
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;