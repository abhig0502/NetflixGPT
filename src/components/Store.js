import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./moviesSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default Store;
