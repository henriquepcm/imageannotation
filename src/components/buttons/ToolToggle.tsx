import { useDispatch } from "react-redux";
import ArrowIcon from "../icons/ArrowIcon";
import BrushIcon from "../icons/BrushIcon";
import ToolToggleOpen from "./ToolToggleOpen";
import { AppDispach, RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { openToolToggle } from "../../slices/menuAndSelectorsSlice";
import PolygonIcon from "../icons/PolygonIcon";

export default function ToolToggle() {
     const dispatch = useDispatch<AppDispach>();
     const isBrushActive = useSelector(
          (state: RootState) => state.toggle.brush.isActive
     );

     const isPolygonActive = useSelector(
          (state: RootState) => state.toggle.polygon.isActive
     );
     const isToolToggleOpen = useSelector(
          (state: RootState) => state.menuAndSelectors.toolToggle.isOpen
     );

     return (
          <div className="relative">
               {/* Open  State  */}
               {isToolToggleOpen ? <ToolToggleOpen /> : null}
               {/* Close State  */}
               <button
                    onClick={() => dispatch(openToolToggle())}
                    className="group flex items-center justify-between w-[3.75rem] h-[3rem] border-[0.08rem] transition
                    duration-300
                    ease-in-out hover:bg-[#121212] bg-black border-imageannotationblue rounded-lg pr-4 pl-3"
               >
                    <div>
                         {isBrushActive && <BrushIcon />}
                         {isPolygonActive && <PolygonIcon />}
                    </div>
                    <div
                         className="group-hover:scale-125
                    transition
                    duration-300
                    ease-in-out"
                    >
                         <ArrowIcon size="small" direction="down" />
                    </div>
               </button>
          </div>
     );
}
