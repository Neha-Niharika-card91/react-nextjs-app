"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PositionState {
  role: string;
  radioValue: string;
}

const initialState: PositionState = {
  role: "",
  radioValue: "",
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    setPosition: (
      state,
      action: PayloadAction<{ role: string; radioValue: string }>
    ) => {
      state.role = action.payload.role;
      state.radioValue = action.payload.radioValue;
    },
  },
});

export const { setPosition } = positionSlice.actions;
export default positionSlice.reducer;
