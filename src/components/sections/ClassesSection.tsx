import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ClassesSectionItem from "../ClassesSectionItem";
import PlusSignButton from "../buttons/PlusSignButton";
import { useDispatch } from "react-redux";
import { openCloseAddClassForm } from "../../slices/sectionsSlice";

export default function ClassesSection() {
     const dispatch = useDispatch();

     const isClassesSectionOpen = useSelector(
          (state: RootState) => state.sections.classes.isOpen
     );

     return (
          <div
               className={`justify-center items-center ${
                    isClassesSectionOpen ? "flex" : "hidden"
               }`}
          >
               <div className="flex flex-col w-full h-full max-w-[30rem]">
                    <div className="flex justify-between">
                         <h2>Classes</h2>
                         <div>
                              <PlusSignButton
                                   label="Add class"
                                   onClick={() =>
                                        dispatch(openCloseAddClassForm())
                                   }
                              />
                         </div>
                    </div>
                    <ul className="grid grid-cols-2 gap-5 mt-7">
                         <li>
                              <ClassesSectionItem color="00FF09" label="Bird" />
                         </li>
                         <li>
                              <ClassesSectionItem color="FF9900" label="Car" />
                         </li>
                         <li>
                              <ClassesSectionItem color="FF006F" label="Cat" />
                         </li>
                         <li>
                              <ClassesSectionItem
                                   color="00C8FF"
                                   label="Plane"
                              />
                         </li>
                         <li>
                              <ClassesSectionItem color="FFF200" label="Tree" />
                         </li>
                    </ul>
               </div>
          </div>
     );
}
