// import { getUserNameFromLocalStorage } from "../utils/userUtils";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  // initialState: {
  //   name: getUserNameFromLocalStorage(),
  // },
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      console.log("setting user");
      // state.name = action.payload;
      return action.payload;
    },
    removeUser: (state) => {
      // state.name = "";
      return null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
