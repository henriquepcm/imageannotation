import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateProps = {
     [key: string]: { isActive: boolean };
};

const initialState: InitialStateProps = {
     bird: { isActive: true },
     car: { isActive: false },
     cat: { isActive: false },
     plane: { isActive: false },
     tree: { isActive: false },
};

const deactivateAllSections = (state: InitialStateProps) => {
     for (const key in state) {
          state[key as keyof InitialStateProps].isActive = false;
     }
};

const classSelectorSlice = createSlice({
     name: "classSelector",
     initialState,
     reducers: {
          activateClass: (state, action: PayloadAction<string>) => {
               const className = action.payload;
               deactivateAllSections(state);
               state[className].isActive = true;
          },
     },
});

export const { activateClass } = classSelectorSlice.actions;

export default classSelectorSlice.reducer;
