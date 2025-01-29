import ArrowIcon, { ArrowDirection, ArrowSize } from "../icons/ArrowIcon";

type ArrowButtonProps = {
     size: ArrowSize;
     direction: ArrowDirection;
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ArrowButton({
     size,
     direction,
     onClick,
}: ArrowButtonProps) {
     return (
          <button
               onClick={onClick}
               className="group flex justify-center items-center w-[3.75rem] h-[3rem] bg-black hover:bg-imageannotationdarkgrey border-[0.08rem] border-imageannotationgrey rounded-lg hover:border-imageannotationblue transition duration-300 ease-in-out"
          >
               <div className="transform duration-300 ease-in-out group-hover:scale-125">
                    <ArrowIcon size={size} direction={direction} />
               </div>
          </button>
     );
}
