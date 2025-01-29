import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
     [key: string]: { isOpen: boolean };
};

const initialState: InitialStateProps = {
     menu: { isOpen: false },
     classSelector: { isOpen: false },
     toolToggle: { isOpen: false },
     brushSize: { isOpen: false },
};

const closeAll = (state: InitialStateProps) => {
     for (const key in state) {
          state[key as keyof InitialStateProps].isOpen = false;
     }
};

const menuAndSelectorsSlice = createSlice({
     name: "menuAndSelectors",
     initialState,
     reducers: {
          openMenu: (state) => {
               const menuCurrentState = state.menu.isOpen;
               closeAll(state);
               state.menu.isOpen = !menuCurrentState;
          },
          openClassSelector: (state) => {
               closeAll(state);
               state.classSelector.isOpen = true;
          },
          openToolToggle: (state) => {
               closeAll(state);
               state.toolToggle.isOpen = true;
          },
          openBrushSize: (state) => {
               closeAll(state);
               state.brushSize.isOpen = true;
          },
          closeAllMenuAndSelectors: (state) => {
               closeAll(state);
          },
     },
});

export const {
     openMenu,
     openClassSelector,
     openToolToggle,
     openBrushSize,
     closeAllMenuAndSelectors,
} = menuAndSelectorsSlice.actions;

export default menuAndSelectorsSlice.reducer;
