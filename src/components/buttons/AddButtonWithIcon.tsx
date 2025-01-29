import PlusSignIcon from "../icons/PlusSignIcon";

export default function AddButtonWithIcon({ label }: { label: string }) {
     return (
          <button className="group flex justify-center items-center gap-2 w-[11.25rem] h-[3rem] bg-imageannotationblue text-white rounded-lg font-normal transform duration-300 ease-in-out hover:opacity-90">
               <div className="transform duration-300 ease-in-out group-hover:rotate-180">
                    <PlusSignIcon />
               </div>
               <div>{label}</div>
          </button>
     );
}
