type ClassSelectorItemmButtonProps = {
     color: string;
     label: string;
     isActive: boolean;
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ClassSelectorItemmButton({
     color,
     label,
     isActive,
     onClick,
}: ClassSelectorItemmButtonProps) {
     return (
          <button
               onClick={onClick}
               className={`flex items-center pl-4 w-full h-[3rem] trasnform duration-300 ease-in-out rounded-lg ${
                    isActive
                         ? "bg-imageannotationblue"
                         : "hover:bg-imageannotationblue"
               }`}
          >
               <div
                    // Using inline styles instead of Tailwind classes because Tailwind doesn't render dynamic color values like `bg-[#${color}]` correctly.
                    style={{ backgroundColor: `#${color}` }}
                    className={`w-2 h-2 rounded`}
               ></div>
               <div className="flex-grow text-left pl-2">{label}</div>
          </button>
     );
}
