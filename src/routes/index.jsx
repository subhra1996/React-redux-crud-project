import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BookView from "../features/books/BookView";
import AddBooks from "../features/books/AddBooks";
import EditBooks from "../features/books/EditBooks";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<BookView />} />
        <Route path="/add-books" element={<AddBooks />}/>
        <Route path="/edit-books" element={<EditBooks />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
