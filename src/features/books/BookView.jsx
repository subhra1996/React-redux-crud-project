import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "./bookSlice";
import { Link } from "react-router-dom";

const BookView = () => {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h1>List of Books</h1>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const {id, name, author} = book;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-books" state={{id,name,author}}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(book.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BookView;
