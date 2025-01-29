type SaveButtonProps = {
     label: string;
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SaveButton({ label, onClick }: SaveButtonProps) {
     return (
          <button
               onClick={onClick}
               className="w-full h-[3rem] bg-imageannotationgreen text-black rounded-lg font-normal transform duration-300 ease-in-out hover:opacity-80"
          >
               {label}
          </button>
     );
}
