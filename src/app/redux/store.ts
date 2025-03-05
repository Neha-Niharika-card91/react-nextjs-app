import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import locationSlice from "./locationSlice";
import positionSlice from "./positionSlice";
import personalDetailsSlice from "./personalDetailsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    location: locationSlice,
    position: positionSlice,
    personalDetails: personalDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
