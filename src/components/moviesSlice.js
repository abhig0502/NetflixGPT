import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;
