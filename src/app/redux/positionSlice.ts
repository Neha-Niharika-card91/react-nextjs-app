"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PositionState {
  role: string;
  radioValue: { [key: string]: string }; // Correct type for radioValue
}

const initialState: PositionState = {
  role: "",
  radioValue: {}, // Corrected: empty object instead of {""}
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    setPosition: (
      state,
      action: PayloadAction<{
        role: string;
        radioValue: { [key: string]: string };
      }>
    ) => {
      state.role = action.payload.role;
      state.radioValue = action.payload.radioValue;
    },
  },
});

export const { setPosition } = positionSlice.actions;
export default positionSlice.reducer;
