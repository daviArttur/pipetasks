import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interface/user";

const initialState = {
   openModal: true
};

const sidebarSlice = createSlice({
   name: "sidebar",
   initialState,
   reducers: {
      toogleSidebar: (state) => {
         state.openModal = !state.openModal;
      }
   }
})
export const { toogleSidebar } = sidebarSlice.actions;
export { sidebarSlice };