import ClassSelector from "./buttons/ClassSelector";
import BrushSizeSelector from "./buttons/BrushSizeSelector";
import ToolToggle from "./buttons/ToolToggle";
import SaveButton from "./buttons/SaveButton";
import ArrowButton from "./buttons/ArrowButton";
import RegularToolButton from "./buttons/RegularToolButton";
import UndoIcon from "./icons/UndoIcon";
import EraserIcon from "./icons/EraserIcon";

type updateImageIndexProps = {
     updateImageIndex: (step: number) => void;
};

export default function AnnotationToolBar({
     updateImageIndex,
}: updateImageIndexProps) {
     return (
          <div className="flex justify-center w-[20rem]">
               <div className="flex flex-col items-center w-full gap-[0.9375rem]">
                    {/* Toolbar big screens */}
                    <div className="hidden lg:flex flex-col w-[11rem] gap-[0.9375rem]">
                         <div className="w-full">
                              <ClassSelector />
                         </div>
                         <div className="flex flex-row justify-between gap-3">
                              <div>
                                   <ArrowButton
                                        size="big"
                                        direction="left"
                                        onClick={() => updateImageIndex(-1)}
                                   />
                              </div>

                              <div className="flex justify-end">
                                   <ArrowButton
                                        size="big"
                                        direction="right"
                                        onClick={() => updateImageIndex(1)}
                                   />
                              </div>
                         </div>
                         <div className="flex justify-between">
                              <div>
                                   <RegularToolButton
                                        onClick={() =>
                                             alert(
                                                  "The undo icon would remove the last action made on canvas."
                                             )
                                        }
                                   >
                                        <UndoIcon />
                                   </RegularToolButton>
                              </div>
                              <div>
                                   <ToolToggle />
                              </div>
                         </div>
                         <div className="flex justify-between">
                              <div>
                                   <RegularToolButton
                                        onClick={() =>
                                             alert(
                                                  "The erase icon would remove previous changes as you drag it over an area."
                                             )
                                        }
                                   >
                                        <EraserIcon />
                                   </RegularToolButton>
                              </div>
                              <div className="lg:flex lg:justify-end">
                                   <BrushSizeSelector />
                              </div>
                         </div>
                    </div>

                    {/* Toolbar small screens */}
                    <div className="lg:hidden flex flex-col w-full gap-[0.9375rem]">
                         <div className="flex flex-row gap-3">
                              <div>
                                   <ArrowButton
                                        size="big"
                                        direction="left"
                                        onClick={() => updateImageIndex(-1)}
                                   />
                              </div>
                              <div className="w-full">
                                   <ClassSelector />
                              </div>
                              <div className="flex justify-end">
                                   <ArrowButton
                                        size="big"
                                        direction="right"
                                        onClick={() => updateImageIndex(1)}
                                   />
                              </div>
                         </div>

                         <div className="flex justify-between">
                              <div className="flex gap-3">
                                   <div className="flex justify-end">
                                        <RegularToolButton
                                             onClick={() =>
                                                  alert(
                                                       "The undo icon would remove the last action made on canvas."
                                                  )
                                             }
                                        >
                                             <UndoIcon />
                                        </RegularToolButton>
                                   </div>

                                   <div className="flex justify-between lg:hidden">
                                        <div>
                                             <RegularToolButton
                                                  onClick={() =>
                                                       alert(
                                                            "The erase icon would remove previous changes as you drag it over an area."
                                                       )
                                                  }
                                             >
                                                  <EraserIcon />
                                             </RegularToolButton>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex gap-3">
                                   <div>
                                        <ToolToggle />
                                   </div>
                                   <div className="lg:flex lg:justify-end">
                                        <BrushSizeSelector />
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full mt-[3rem] gap-[0.625rem] lg:col-span-2">
                         <div className="text-imageannotationlightgrey text-center text-xs w-[11rem]">
                              ID: d1912633
                         </div>
                         <div className="w-[11rem]">
                              <SaveButton
                                   label="Save"
                                   onClick={() =>
                                        alert(
                                             "The Save button would save the changes made on canvas in the Saved Anotations section."
                                        )
                                   }
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
}

{
     /* <div className="grid w-full max-w-[27.97rem] grid-cols-[auto_auto_auto] gap-[0.9375rem] lg:grid-cols-2 lg:pl-5 lg:pr-5 lg:pt-5"></div> */
}
