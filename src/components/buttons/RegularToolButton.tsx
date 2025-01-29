import React, { ReactNode } from "react";

type RegularToolButtonProps = {
     children: ReactNode;
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function RegularToolButton({
     children,
     onClick,
}: RegularToolButtonProps) {
     return (
          <button
               onClick={onClick}
               className="group flex justify-center items-center w-[3.75rem] h-[3rem] bg-black hover:bg-imageannotationdarkgrey border-[0.08rem] border-imageannotationgrey rounded-lg hover:border-imageannotationblue transition duration-300 ease-in-out"
          >
               <div className="transform duration-300 ease-in-out group-hover:scale-125">
                    {children}
               </div>
          </button>
     );
}
