import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialBookState = localStorage.getItem('reduxState')
? JSON.parse(localStorage.getItem('reduxState')).books:
{
    books:[
    {id:  uuidv4(), name: 'Bahurupi' , author: 'Sharathchandra'},
    {id: uuidv4(), name: 'Jogajug', author: 'Rabindranath'}
]};


export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBookState,
    reducers:{
        showBooks: (state)=>state,
        addBooks: (state,action)=>{
            state.books.push(action.payload);
        },
        deleteBook: (state, action)=>{
            state.books= state.books.filter((book)=>book.id !== action.payload);
        },
        updateBook: (state, action)=>{
            const {id, book, author} = action.payload;

            const isBookExist = state.books.filter((book)=>book.id === id);
            
            if(isBookExist) {
                isBookExist[0].name = book;
                isBookExist[0].author = author;
            }
        }
    }

});

export const {showBooks, addBooks, deleteBook, updateBook} = bookSlice.actions;

export default bookSlice.reducer;