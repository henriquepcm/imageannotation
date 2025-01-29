import Arrow from "./icons/ArrowIcon";

type ClassesSectionItemProps = {
     color: string;
     label: string;
};

export default function ClassesSectionItem({
     color,
     label,
}: ClassesSectionItemProps) {
     return (
          <button
               onClick={() =>
                    alert(
                         "This would go to the Edit Class form to update this class details."
                    )
               }
               className="group w-full flex h-[3rem] items-center p-5 border-[0.08rem] border-imageannotationgrey rounded-lg transform duration-300 ease-in-out hover:bg-imageannotationdarkgrey"
          >
               <div
                    // Using inline styles instead of Tailwind classes because Tailwind doesn't render dynamic color values like `bg-[#${color}]` correctly.
                    style={{ backgroundColor: `#${color}` }}
                    className={`w-2 h-2 rounded-full transform duration-300 ease-in-out group-hover:ml-1`}
               ></div>
               <div className="flex-grow pl-2 text-left transform duration-300 ease-in-out group-hover:pl-3">
                    {label}
               </div>
               <div
                    className="text-white
                                   
                                   group-hover:scale-125
                                   transition
                                   duration-300
                                   ease-in-out
                              "
               >
                    <div className="group-hover:scale-110">
                         <Arrow size="small" direction="right" />
                    </div>
               </div>
          </button>
     );
}
