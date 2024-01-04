import React, {useState} from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBook } from './bookSlice';

const EditBooks = () => {
  const location = useLocation();
  const id = location.state.id;
  const [book, setBook] = useState(location.state.name);
  const [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch(updateBook({id, book, author}));

    navigate("/show-books", {replace: true});

  }
  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Book Name: </label>
          <input id="title" type="text" placeholder='Enter Book Name' value={book} onChange={(e)=>setBook(e.target.value)} />
        </div>

        <div className='form-field'>
          <label htmlFor='author'>Author: </label>
          <input id="author" type="text" placeholder='Enter Author Name' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        </div>

        <button type="submit">Update Book</button>
      </form>
    </div>
  )
}

export default EditBooks;