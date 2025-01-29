import { useSelector } from "react-redux";
import SubmitButton from "../buttons/SubmitButton";
import { RootState } from "../../store/store";

export default function AddNewClassForm() {
     const isAddNewClassForm = useSelector(
          (state: RootState) => state.sections.addClassForm.isOpen
     );

     return (
          <div
               className={`justify-center items-center ${
                    isAddNewClassForm ? "flex" : "hidden"
               }`}
          >
               <div className="flex flex-col w-full h-full max-w-[30rem]">
                    <h2>Add new class</h2>
                    <form className="flex flex-col">
                         <div className="flex flex-col">
                              <label>class name</label>
                              <input type="text" placeholder="house" />
                         </div>
                         <div className="flex flex-col relative">
                              <label>color</label>
                              <input type="text" placeholder="#000" />
                              <input
                                   type="color"
                                   className="w-10 h-10 p-0 border-none rounded-lg absolute right-4 top-8 hover:cursor-pointer"
                              />
                         </div>
                         <div className="mt-5">
                              <SubmitButton
                                   label="Add class"
                                   onClick={() =>
                                        alert(
                                             "The Add Class button would save the new class in the Classes section."
                                        )
                                   }
                              />
                         </div>
                    </form>
               </div>
          </div>
     );
}
