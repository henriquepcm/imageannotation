import { useDispatch } from "react-redux";
import ClassSelectorItemmButton from "./ClassSelectorItemButton";
import { activateClass } from "../../slices/classesSlice";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { closeAllMenuAndSelectors } from "../../slices/menuAndSelectorsSlice";

type setSelectedClassDataProps = {
     setSelectedClassData: ({
          color,
          className,
     }: {
          color: string;
          className: string;
     }) => void;
};

export default function ClassSelectorOpen({
     setSelectedClassData,
}: setSelectedClassDataProps) {
     const dispatch = useDispatch();

     const isBirdActive = useSelector(
          (state: RootState) => state.classes.bird.isActive
     );

     const isCarActive = useSelector(
          (state: RootState) => state.classes.car.isActive
     );

     const isCatActive = useSelector(
          (state: RootState) => state.classes.cat.isActive
     );

     const isPlaneActive = useSelector(
          (state: RootState) => state.classes.plane.isActive
     );

     const isTreeActive = useSelector(
          (state: RootState) => state.classes.tree.isActive
     );

     const handleClick = (color: string, className: string) => {
          dispatch(activateClass(className));
          dispatch(closeAllMenuAndSelectors());
          setSelectedClassData({ color, className });
     };

     return (
          <ul className="flex flex-col w-full bg-black p-2 text-xs border-[0.08rem] border-imageannotationgrey rounded-lg absolute bottom-0 lg:bottom-auto lg:top-0 z-30">
               <li>
                    <ClassSelectorItemmButton
                         color="00FF09"
                         label="bird"
                         isActive={isBirdActive}
                         onClick={() => handleClick("00FF09", "bird")}
                    />
               </li>
               <li>
                    <ClassSelectorItemmButton
                         color="FF9900"
                         label="car"
                         isActive={isCarActive}
                         onClick={() => handleClick("FF9900", "car")}
                    />
               </li>
               <li>
                    <ClassSelectorItemmButton
                         color="FF006F"
                         label="cat"
                         isActive={isCatActive}
                         onClick={() => handleClick("FF006F", "cat")}
                    />
               </li>
               <li>
                    <ClassSelectorItemmButton
                         color="00C8FF"
                         label="plane"
                         isActive={isPlaneActive}
                         onClick={() => handleClick("00C8FF", "plane")}
                    />
               </li>
               <li>
                    <ClassSelectorItemmButton
                         color="FFF200"
                         label="tree"
                         isActive={isTreeActive}
                         onClick={() => handleClick("FFF200", "tree")}
                    />
               </li>
          </ul>
     );
}
