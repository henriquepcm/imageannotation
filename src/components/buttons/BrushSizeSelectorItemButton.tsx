type BrushSizeSelectorItemButtonProps = {
     label: string;
     isActive: boolean;
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function BrushSizeSelectorItemButton({
     label,
     isActive,
     onClick,
}: BrushSizeSelectorItemButtonProps) {
     return (
          <button
               onClick={onClick}
               className={`w-full h-[3rem] trasnform duration-300 ease-in-out rounded-lg ${
                    isActive
                         ? "bg-imageannotationblue"
                         : "hover:bg-imageannotationblue"
               }`}
          >
               {label}
          </button>
     );
}
