import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
     [key: string]: { isOpen: boolean };
};

const initialState: InitialStateProps = {
     classes: { isOpen: false },
     addClassForm: { isOpen: false },
     images: { isOpen: false },
     imagesUploadedInitialInfo: { isOpen: false },
     addClassesInitialInfo: { isOpen: false },
     addImages: { isOpen: false },
     createAnnotation: { isOpen: true },
     savedAnnotations: { isOpen: false },
};

const closeAllSections = (state: InitialStateProps) => {
     for (const key in state) {
          state[key as keyof InitialStateProps].isOpen = false;
     }
};

const sectionsSlice = createSlice({
     name: "sections",
     initialState,
     reducers: {
          openCloseClasses: (state) => {
               closeAllSections(state);
               state.classes.isOpen = !state.classes.isOpen;
          },
          openCloseAddClassForm: (state) => {
               closeAllSections(state);
               state.addClassForm.isOpen = !state.addClassForm.isOpen;
          },
          openCloseImages: (state) => {
               closeAllSections(state);
               state.images.isOpen = !state.images.isOpen;
          },
          openCloseImagesUploadedInitialTour: (state) => {
               closeAllSections(state);
               state.imagesUploadedInitialInfo.isOpen =
                    !state.imagesUploadedInitialInfo.isOpen;
          },
          openCloseAddImages: (state) => {
               closeAllSections(state);
               state.images.isOpen = !state.images.isOpen;
          },
          openCloseCreateAnnotation: (state) => {
               closeAllSections(state);
               state.createAnnotation.isOpen = !state.createAnnotation.isOpen;
          },
          openCloseSavedAnnotations: (state) => {
               closeAllSections(state);
               state.savedAnnotations.isOpen = !state.savedAnnotations.isOpen;
          },
     },
});

export const {
     openCloseClasses,
     openCloseAddClassForm,
     openCloseImages,
     openCloseAddImages,
     openCloseCreateAnnotation,
     openCloseSavedAnnotations,
} = sectionsSlice.actions;

export default sectionsSlice.reducer;
