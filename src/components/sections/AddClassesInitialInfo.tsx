import { useSelector } from "react-redux";
import ConfirmButton from "../buttons/ConfirmButton";
import { RootState } from "../../store/store";

export default function AddClassesInitialInfo() {
     const isAddClassesInitialInfoOpen = useSelector(
          (state: RootState) => state.sections.addClassesInitialInfo.isOpen
     );
     return (
          <div
               className={` flex-col h-[80vh] items-center justify-center bg-black bg-opacity-85 z-20 ${
                    isAddClassesInitialInfoOpen ? "flex" : "hidden"
               }`}
          >
               <div className="flex flex-col items-center justify-centrer gap-2">
                    <div className="mb-4 text-imageannotationgreen">
                         <img
                              src="./images/ellipsismenuillustration.png"
                              className="w-[11.5625rem]"
                         />
                    </div>
                    <div className="text-imageannotationlightgrey text-center">
                         <p>
                              Once all the classes are created,
                              <br /> click{" "}
                              <span className="font-semibold text-white">
                                   Create Annotation
                              </span>{" "}
                              from the ellipsis menu
                              <br /> to start categorizing your images.
                         </p>
                    </div>
                    <div className="mt-20">
                         <ConfirmButton label="Got it!" />
                    </div>
               </div>
          </div>
     );
}
