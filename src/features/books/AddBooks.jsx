import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBooks } from "./bookSlice";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookName = { id: uuidv4(), name: book, author: author };
    dispatch(addBooks(bookName));
    navigate("/show-books", { replace: true });
  };
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Book Name: </label>
          <input
            type="text"
            id="title"
            value={book}
            placeholder="Enter Book Name"
            onChange={(e) => setBook(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBooks;
