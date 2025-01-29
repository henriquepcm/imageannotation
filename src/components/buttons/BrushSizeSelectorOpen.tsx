import { useSelector } from "react-redux";
import BrushSizeSelectorItemButton from "./BrushSizeSelectorItemButton";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { activateBrushSize } from "../../slices/brushSizeSlice";
import { closeAllMenuAndSelectors } from "../../slices/menuAndSelectorsSlice";

type BrushSizeSelectorOpenProps = {
     setSizeSelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function BrushSizeSelectorOpen({
     setSizeSelected,
}: BrushSizeSelectorOpenProps) {
     const dispatch = useDispatch();

     const isBrushSizeEightActive = useSelector(
          (state: RootState) => state.brushSize["8"].isActive
     );

     const isBrushSizeFiveActive = useSelector(
          (state: RootState) => state.brushSize["5"].isActive
     );

     const isBrushSizeThreeActive = useSelector(
          (state: RootState) => state.brushSize["3"].isActive
     );

     const isBrushSizeTwoActive = useSelector(
          (state: RootState) => state.brushSize["2"].isActive
     );

     const isBrushSizeOneActive = useSelector(
          (state: RootState) => state.brushSize["1"].isActive
     );

     const handleClick = (size: string) => {
          dispatch(activateBrushSize(size));
          dispatch(closeAllMenuAndSelectors());
          setSizeSelected(size);
     };

     return (
          <ul className="w-[3.75rem] bg-black border-[0.08rem] border-imageannotationgrey rounded-lg p-2 absolute bottom-0 z-10">
               <li>
                    <BrushSizeSelectorItemButton
                         label="8"
                         isActive={isBrushSizeEightActive}
                         onClick={() => handleClick("8")}
                    />
               </li>
               <li>
                    <BrushSizeSelectorItemButton
                         label="5"
                         isActive={isBrushSizeFiveActive}
                         onClick={() => handleClick("5")}
                    />
               </li>
               <li>
                    <BrushSizeSelectorItemButton
                         label="3"
                         isActive={isBrushSizeThreeActive}
                         onClick={() => handleClick("3")}
                    />
               </li>
               <li>
                    <BrushSizeSelectorItemButton
                         label="2"
                         isActive={isBrushSizeTwoActive}
                         onClick={() => handleClick("2")}
                    />
               </li>
               <li>
                    <BrushSizeSelectorItemButton
                         label="1"
                         isActive={isBrushSizeOneActive}
                         onClick={() => handleClick("1")}
                    />
               </li>
          </ul>
     );
}
