
"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormValue {
  name: string;
  phone: string;
  imageURL: string;
}

const initialState: FormValue = {
  name: "",
  phone: "",
  imageURL: "",
};

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<FormValue>) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.imageURL = action.payload.imageURL;
    },
  },
});

export const { setDetails } = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;
