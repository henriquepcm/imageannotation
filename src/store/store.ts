import { configureStore } from "@reduxjs/toolkit";
import menuAndSelectorsReducer from "../slices/menuAndSelectorsSlice";
import sectionsReducer from "../slices/sectionsSlice";
import classSelectorReducer from "../slices/classesSlice";
import toggleReducer from "../slices/toggleSlice";
import brushSizeReducer from "../slices/brushSizeSlice";

export const store = configureStore({
     reducer: {
          menuAndSelectors: menuAndSelectorsReducer,
          sections: sectionsReducer,
          classes: classSelectorReducer,
          toggle: toggleReducer,
          brushSize: brushSizeReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
