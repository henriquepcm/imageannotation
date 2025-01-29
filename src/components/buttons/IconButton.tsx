import ExportIcon from "../icons/ExportIcon";
import TrashCanIcon from "../icons/TrashCanIcon";

type IconButtonProps = {
     type: "trashCan" | "export";
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const icons = {
     trashCan: TrashCanIcon,
     export: ExportIcon,
};

export default function IconButton({ type, onClick }: IconButtonProps) {
     const Icon = icons[type];

     return (
          <div>
               <button
                    onClick={onClick}
                    className="text-imageannotationlightgrey transform duration-300 hover:text-white hover:scale-105"
               >
                    {Icon ? <Icon /> : null}
               </button>
          </div>
     );
}
