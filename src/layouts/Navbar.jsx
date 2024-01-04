import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/show-books">Show Books</Link>
        <Link to="/add-books">Add Books</Link>
    </div>
  )
}

export default Navbar