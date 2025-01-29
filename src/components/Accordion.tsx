import Arrow from "./icons/ArrowIcon";
import SavedAnnotationItem from "./SavedAnnotationItem";

type AccordionProps = {
     color: string;
     label: string;
     isOpen: boolean;
};

export default function Accordion({ color, label, isOpen }: AccordionProps) {
     return (
          <div
               className={`group flex flex-col items-center gap-5 p-5 border-[0.08rem] border-imageannotationgrey rounded-lg transition duration-300 ease-in-out hover:bg-imageannotationdarkgrey ${
                    isOpen ? "h-auto bg-imageannotationdarkgrey" : "h-[3rem]"
               }`}
          >
               <div className="flex items-center h-full w-full hover:cursor-pointer">
                    <div
                         className="w-2 h-2 rounded-full"
                         // Using inline styles intentionally because Tailwind does not support dynamic runtime values like bg-[#${color}].
                         style={
                              color
                                   ? { backgroundColor: `#${color}` }
                                   : undefined
                         }
                    ></div>
                    <div className="flex-grow pl-2">{label}</div>
                    <div
                         className="text-white
                    
                    group-hover:scale-125
                    transition
                    duration-300
                    ease-in-out
                    "
                    >
                         <Arrow
                              size="small"
                              direction={isOpen ? "down" : "up"}
                         />
                    </div>
               </div>
               {isOpen ? (
                    <>
                         <SavedAnnotationItem
                              imageFileName="car-10"
                              id="1233214565"
                              creationDate="Thu 23 Jan 2025 12:12 pm"
                         />
                         <SavedAnnotationItem
                              imageFileName="car-5"
                              id="7899877654"
                              creationDate="Thu 23 Jan 2025 12:12 pm"
                         />
                         <SavedAnnotationItem
                              imageFileName="car-12"
                              id="5432876542"
                              creationDate="Thu 23 Jan 2025 12:12 pm"
                         />
                         <SavedAnnotationItem
                              imageFileName="car-6"
                              id="9876543212"
                              creationDate="Thu 23 Jan 2025 12:12 pm"
                         />
                         <SavedAnnotationItem
                              imageFileName="car-2"
                              id="5678912345"
                              creationDate="Thu 23 Jan 2025 12:12 pm"
                         />
                    </>
               ) : null}
          </div>
     );
}
