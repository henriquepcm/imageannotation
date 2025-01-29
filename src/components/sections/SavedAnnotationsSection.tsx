import { useSelector } from "react-redux";
import Accordion from "../Accordion";
import { RootState } from "../../store/store";

export default function SavedAnnotationsSection() {
     const isSavedAnnotationsSectionOpen = useSelector(
          (state: RootState) => state.sections.savedAnnotations.isOpen
     );
     return (
          <div
               className={`justify-center items-center ${
                    isSavedAnnotationsSectionOpen ? "flex" : "hidden"
               }`}
          >
               <div className="flex flex-col w-full h-full max-w-[30rem]">
                    <h2>Saved Annotations</h2>
                    <ul className="flex flex-col gap-4 mt-7">
                         <li>
                              <Accordion
                                   color="00FF09"
                                   label="Bird"
                                   isOpen={false}
                              />
                         </li>
                         <li>
                              <Accordion
                                   color="FF9900"
                                   label="Car (5)"
                                   isOpen={true}
                              />
                         </li>
                         <li>
                              <Accordion
                                   color="FF006F"
                                   label="Cat"
                                   isOpen={false}
                              />
                         </li>
                         <li>
                              <Accordion
                                   color="00C8FF"
                                   label="Plane"
                                   isOpen={false}
                              />
                         </li>
                         <li>
                              <Accordion
                                   color="FFF200"
                                   label="Tree"
                                   isOpen={false}
                              />
                         </li>
                    </ul>
               </div>
          </div>
     );
}
