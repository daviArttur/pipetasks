import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialState = {
   error: boolean;
   message: null | string
}

const initialState: initialState = {
   error: false,
   message: null,
}

const errorSlice = createSlice({
   name: "error",
   initialState,
   reducers: {
      setError: (state, { payload }: PayloadAction<{ message: string }>) => {
         state.error = true;
         state.message = payload.message;
      },
      resetError: (state) => {
         state.error = false;
         state.message = null;
      }
   }
});

export const { setError, resetError } = errorSlice.actions;
export { errorSlice };