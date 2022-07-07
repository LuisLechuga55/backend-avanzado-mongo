import { Book } from '../models/index.js';

const getAllBooks = async (_, res) => {
  try {
    const Books = await Book.find();
    return res.json({
      msg: 'Libros obtenidos',
      Books,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar todos los Libros',
      error,
    });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: 'Nuevo libro creado',
      Book: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear un libro',
      error,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const Book = await Book.findById(req.params.id);
    return res.json({
      msg: 'Libro encontrado',
      Book,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar libro por id',
      error,
    });
  }
};

const updateBookById = async (req, res) => {
  try {
    const Book = await Book.findByIdAndUpdate(req.params.id, req.body);
    return res.json({
      msg: 'Libro actualizado',
      Book,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar libro por id',
      error,
    });
  }
};

const deleteAuhorById = async (req, res) => {
  try {
    await Book.deleteOne({
      id: req.params.id,
    });
    return res.json({
      msg: 'Libro eliminado',
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Ha ocurrido un error al borrar libro',
      error,
    });
  }
};

const bookSWithAuthors = async (req, res) => {
  try {
    const booksWithAuthors = await Book.find().populate('authors');
    return res.json({
      msg: 'Libros con autores encontrados',
        books: booksWithAuthors,
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Ha ocurrido un error al consultar los libros'
    })
  }
};


export {
  getAllBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteAuhorById,
  bookSWithAuthors,
};