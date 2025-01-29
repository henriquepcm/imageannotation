import Arrow from "../icons/ArrowIcon";
import ClassSelectorOpen from "./ClassSelectorOpen";
import { AppDispach, RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openClassSelector } from "../../slices/menuAndSelectorsSlice";
import { useState } from "react";

export default function ClassSelector() {
     const dispatch = useDispatch<AppDispach>();
     const isClassSelectorOpen = useSelector(
          (state: RootState) => state.menuAndSelectors.classSelector.isOpen
     );
     const [selectedClassData, setSelectedClassData] = useState({
          color: "000000",
          className: "Choose...",
     });

     return (
          <div className="relative">
               {/* Open State */}
               {isClassSelectorOpen ? (
                    <ClassSelectorOpen
                         setSelectedClassData={setSelectedClassData}
                    />
               ) : null}
               {/* Close State */}
               <button
                    onClick={() => dispatch(openClassSelector())}
                    className="group flex items-center justify-between w-full h-[3rem] bg-black transform duration-300 hover:bg-[#121212] border-[0.08rem] border-imageannotationblue rounded-lg pr-4 pl-4 relative"
               >
                    <div
                         style={{
                              backgroundColor: `#${selectedClassData.color}`,
                         }}
                         className="w-2 h-2 bg-yellow-500 rounded"
                    ></div>
                    <div className="flex-grow text-left text-xs pl-2">
                         {selectedClassData.className}
                    </div>
                    <div
                         className="text-white
                    
                    group-hover:scale-125
                    transition
                    duration-300
                    ease-in-out"
                    >
                         <Arrow size="small" direction="down" />
                    </div>
               </button>
          </div>
     );
}
