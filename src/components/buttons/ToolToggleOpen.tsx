import { useSelector } from "react-redux";
import BrushIcon from "../icons/BrushIcon";
import PolygonIcon from "../icons/PolygonIcon";
import ToolToggleItemButton from "./ToolToggleItemButton";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { activateBrush, activatePolygon } from "../../slices/toggleSlice";
import { closeAllMenuAndSelectors } from "../../slices/menuAndSelectorsSlice";

export default function ToolToggleOpen() {
     const dispatch = useDispatch();

     const isBrushActive = useSelector(
          (state: RootState) => state.toggle.brush.isActive
     );

     const isPolygonActive = useSelector(
          (state: RootState) => state.toggle.polygon.isActive
     );

     const handleClick = (action: () => { type: string }) => {
          dispatch(action());
          dispatch(closeAllMenuAndSelectors());
     };

     return (
          <ul className="bg-black w-full border-[0.08rem] border-imageannotationblue rounded-lg absolute bottom-0 p-2 z-10">
               <li>
                    <ToolToggleItemButton
                         isActive={isBrushActive}
                         onClick={() => handleClick(activateBrush)}
                    >
                         <BrushIcon />
                    </ToolToggleItemButton>
               </li>
               <li>
                    <ToolToggleItemButton
                         isActive={isPolygonActive}
                         onClick={() => handleClick(activatePolygon)}
                    >
                         <PolygonIcon />
                    </ToolToggleItemButton>
               </li>
          </ul>
     );
}
