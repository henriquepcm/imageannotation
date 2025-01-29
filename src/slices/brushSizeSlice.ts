import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateProps = {
     [key: string]: { isActive: boolean };
};

const initialState: InitialStateProps = {
     "1": { isActive: false },
     "2": { isActive: false },
     "3": { isActive: false },
     "5": { isActive: false },
     "8": { isActive: false },
};

const deactivateAllSizes = (state: InitialStateProps) => {
     for (const key in state) {
          state[key as keyof InitialStateProps].isActive = false;
     }
};

const brushSizeSlice = createSlice({
     name: "toggleSelector",
     initialState,
     reducers: {
          activateBrushSize: (state, action: PayloadAction<string>) => {
               const brushSize = action.payload;
               deactivateAllSizes(state);
               state[brushSize].isActive = true;
          },
     },
});

export const { activateBrushSize } = brushSizeSlice.actions;

export default brushSizeSlice.reducer;
