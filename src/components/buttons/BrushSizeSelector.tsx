import { useDispatch } from "react-redux";
import Arrow from "../icons/ArrowIcon";
import { AppDispach, RootState } from "../../store/store";
import { useSelector } from "react-redux";
import BrushSizeSelectorOpen from "./BrushSizeSelectorOpen";
import { openBrushSize } from "../../slices/menuAndSelectorsSlice";
import { useState } from "react";

export default function BrushSizeSelector() {
     const dispatch = useDispatch<AppDispach>();
     const [sizeSelected, setSizeSelected] = useState("3");

     const isBrushActive = useSelector(
          (state: RootState) => state.toggle.brush.isActive
     );

     const isBrushSizeOpen = useSelector(
          (state: RootState) => state.menuAndSelectors.brushSize.isOpen
     );

     return (
          <div className="relative">
               {/* Open State */}
               {isBrushSizeOpen ? (
                    <BrushSizeSelectorOpen setSizeSelected={setSizeSelected} />
               ) : null}
               {/* /* Close State */}
               {isBrushActive ? (
                    <button
                         onClick={() => dispatch(openBrushSize())}
                         className="group flex justify-between items-center w-[3.75rem] h-[3rem] bg-black transformation duration-300 ease-out border-[0.08rem] rounded-lg pr-4 pl-4 border-imageannotationblue hover:bg-[#121212]"
                    >
                         <div className="from-neutral-800">{sizeSelected}</div>
                         <div
                              className="group-hover:scale-125
                    transition
                    duration-300
                    ease-in-out"
                         >
                              <Arrow size="small" direction="down" />
                         </div>
                    </button>
               ) : (
                    <div className="w-[3.75rem] h-[3rem] border-[0.08rem] border-imageannotationdarkgrey bg-black rounded-lg"></div>
               )}
          </div>
     );
}
