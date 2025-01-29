import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
     [key: string]: { isActive: boolean };
};

const initialState: InitialStateProps = {
     brush: { isActive: false },
     polygon: { isActive: true },
};

const toggleSlice = createSlice({
     name: "toggleSelector",
     initialState,
     reducers: {
          activateBrush: (state) => {
               state.brush.isActive = true;
               state.polygon.isActive = false;
          },
          activatePolygon: (state) => {
               state.polygon.isActive = true;
               state.brush.isActive = false;
          },
     },
});

export const { activateBrush, activatePolygon } = toggleSlice.actions;

export default toggleSlice.reducer;
