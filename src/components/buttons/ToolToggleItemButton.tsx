import { ReactNode } from "react";

type ToolToggleItemButton = {
     children: ReactNode;
     isActive: boolean;
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ToolToggleItemButton({
     children,
     isActive,
     onClick,
}: ToolToggleItemButton) {
     return (
          <button
               onClick={onClick}
               className={`group flex items-center justify-center w-full h-[3rem] rounded-lg transform duration-300 ease-in-out ${
                    isActive
                         ? "bg-imageannotationblue"
                         : "hover:bg-imageannotationblue"
               }`}
          >
               <div className="transform duration-300 ease-in-out group-hover:scale-125">
                    {children}
               </div>
          </button>
     );
}
