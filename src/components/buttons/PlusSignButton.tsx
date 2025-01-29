import PlusSignIcon from "../icons/PlusSignIcon";

type PlusSignButtonProps = {
     label: string;
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function PlusSignButton({
     label,
     onClick,
}: PlusSignButtonProps) {
     return (
          <button onClick={onClick} className="group flex gap-2">
               <div className="transform duration-300 ease-in-out group-hover:rotate-180">
                    <PlusSignIcon />
               </div>
               <div className="text-xs transform duration-300 ease-in-out  group-hover:text-imageannotationgrey">
                    {label}
               </div>
          </button>
     );
}
