import { configureStore } from "@reduxjs/toolkit";
import { errorSlice } from "./slices/error/errorSlice";
import { sidebarSlice } from "./slices/sidebar/sidebar";
import { userSlice } from "./slices/user/userSlice";

const store = configureStore({
   reducer: {
      [userSlice.name]: userSlice.reducer,
      [errorSlice.name]: errorSlice.reducer,
      [sidebarSlice.name]: sidebarSlice.reducer
   },
   devTools: true
});

export type RootState = ReturnType<typeof store.getState>
export { store };