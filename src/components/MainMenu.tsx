import { useDispatch } from "react-redux";
import MenuItemButton from "./buttons/MenuItemButton";
import {
     openCloseClasses,
     openCloseCreateAnnotation,
     openCloseImages,
     openCloseSavedAnnotations,
} from "../slices/sectionsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeAllMenuAndSelectors } from "../slices/menuAndSelectorsSlice";

export default function MainMenu() {
     const dispatch = useDispatch();
     const isCreateAnnotationOpen = useSelector(
          (state: RootState) => state.sections.createAnnotation.isOpen
     );
     const isSavedAnnotationsOpen = useSelector(
          (state: RootState) => state.sections.savedAnnotations.isOpen
     );
     const isClassesOpen = useSelector(
          (state: RootState) => state.sections.classes.isOpen
     );
     const isImagesOpen = useSelector(
          (state: RootState) => state.sections.images.isOpen
     );

     const handleMenuClick = (action: () => { type: string }) => {
          dispatch(action());
          dispatch(closeAllMenuAndSelectors());
     };

     return (
          <nav aria-label="Main menu">
               <ul className="w-[11.25rem] bg-black border-[0.08rem] border-imageannotationgrey rounded-lg p-2 text-xs absolute z-10 top-8 -right-2 shadow-md shadow-black/50">
                    <li>
                         <MenuItemButton
                              label="Create Annotation"
                              isOpen={isCreateAnnotationOpen}
                              onClick={() =>
                                   handleMenuClick(openCloseCreateAnnotation)
                              }
                         />
                    </li>
                    <li>
                         <MenuItemButton
                              label="Saved Annotations"
                              isOpen={isSavedAnnotationsOpen}
                              onClick={() =>
                                   handleMenuClick(openCloseSavedAnnotations)
                              }
                         />
                    </li>
                    <li>
                         <MenuItemButton
                              label="Classes"
                              isOpen={isClassesOpen}
                              onClick={() => handleMenuClick(openCloseClasses)}
                         />
                    </li>
                    <li>
                         <MenuItemButton
                              label="Images"
                              isOpen={isImagesOpen}
                              onClick={() => handleMenuClick(openCloseImages)}
                         />
                    </li>
               </ul>
          </nav>
     );
}
