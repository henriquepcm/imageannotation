import { useSelector } from "react-redux";
import AddButtonWithIcon from "../buttons/AddButtonWithIcon";
import SuccessIcon from "../icons/SuccessIcon";
import { RootState } from "../../store/store";

export default function ImagesUploadedInitialInfo() {
     const isAddClassOpen = useSelector(
          (state: RootState) => state.sections.imagesUploadedInitialInfo.isOpen
     );

     return (
          <div
               className={`flex-col h-[80vh] items-center justify-center bg-black bg-opacity-85 ${
                    isAddClassOpen ? "flex" : "hidden"
               }`}
          >
               <div className="flex flex-col items-center justify-centrer gap-2">
                    <div className="mb-4 text-imageannotationgreen">
                         <SuccessIcon />
                    </div>
                    <div className="text-base font-semibold">
                         Images uploaded!
                    </div>
                    <div className="text-imageannotationlightgrey">
                         Now let's create some classes to categorize the images.
                    </div>
                    <div className="mt-20">
                         <AddButtonWithIcon label="Add classes" />
                    </div>
               </div>
          </div>
     );
}
