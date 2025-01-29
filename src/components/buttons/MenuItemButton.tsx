type MenuItemButtonProps = {
     label: string;
     isOpen: boolean;
     onClick: () => void;
};

export default function MenuItemButton({
     label,
     isOpen,
     onClick,
}: MenuItemButtonProps) {
     return (
          <button
               onClick={onClick}
               className={`text-left pl-4 hover:pl-5 rounded-lg h-10 w-full hover:bg-imageannotationblue trasnform duration-300 ease-in-out ${
                    isOpen
                         ? "bg-imageannotationblue"
                         : "hover:bg-imageannotationblue"
               }`}
          >
               {label}
          </button>
     );
}
