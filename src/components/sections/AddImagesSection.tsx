import { useSelector } from "react-redux";
import AddButtonWithIcon from "../buttons/AddButtonWithIcon";
import AddImagesIcon from "../icons/AddImagesIcon";
import { RootState } from "../../store/store";

export default function AddImagesSection() {
     const isAddImagesSectionOpen = useSelector(
          (state: RootState) => state.sections.addImages.isOpen
     );

     return (
          <div
               className={`flex-col h-[80vh] items-center justify-center bg-black z-20 ${
                    isAddImagesSectionOpen ? "flex" : "hidden"
               }`}
          >
               <div className="flex flex-col items-center justify-centrer gap-2">
                    <div className="mb-4 -translate-x-3">
                         <AddImagesIcon />
                    </div>
                    <div className="text-base font-semibold">No images yet</div>
                    <div className="text-imageannotationlightgrey">
                         Add some to start your annotations!
                    </div>
                    <div className="mt-20">
                         <AddButtonWithIcon label="Add images" />
                    </div>
               </div>
          </div>
     );
}
