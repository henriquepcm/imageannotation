type SubmitButtonProps = {
     label: string;
     onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SubmitButton({ label, onClick }: SubmitButtonProps) {
     return (
          <button
               onClick={onClick}
               className="w-full h-[4.0625rem] bg-imageannotationblue text-white rounded-lg font-normal transform duration-300 ease-in-out hover:opacity-90"
          >
               {label}
          </button>
     );
}
