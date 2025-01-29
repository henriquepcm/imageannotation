export default function ConfirmButton({ label }: { label: string }) {
     return (
          <button className="group flex justify-center items-center gap-2 w-[11.25rem] h-[3rem] bg-black border-[0.08rem] border-imageannotationgrey text-white rounded-lg font-normal transform duration-300 ease-in-out hover:bg-imageannotationdarkgrey">
               <div>{label}</div>
          </button>
     );
}
