import { configureStore } from "@reduxjs/toolkit"
import bookReducer from "../features/books/bookSlice";

const store = configureStore({
    reducer:{
        books: bookReducer
    }
});

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  });

export default store;