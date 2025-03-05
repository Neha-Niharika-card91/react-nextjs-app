"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  location: string;
  radioValue: string;
}

const initialState: LocationState = {
  location: "",
  radioValue: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<{ location: string; radioValue: string }>
    ) => {
      state.location = action.payload.location;
      state.radioValue = action.payload.radioValue;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
