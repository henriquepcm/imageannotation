import IconButton from "./buttons/IconButton";

type ImagesSectionItemProps = {
     imageFileName: string;
     altText: string;
};

export default function ImagesSectionItem({
     imageFileName,
     altText,
}: ImagesSectionItemProps) {
     return (
          <div className="group w-full overflow-hidden relative">
               <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-black rounded-full pt-1 top-2 left-2 transformation duration-300 ease-in-out group-hover:scale-110 absolute z-10">
                    <IconButton
                         type="trashCan"
                         onClick={() =>
                              alert(
                                   "The trash can icon would delete this photo from the Images section."
                              )
                         }
                    />
               </div>

               <img
                    src={`./images/${imageFileName}.jpg`}
                    alt={`${altText}`}
                    className="object-cover transformation duration-300 ease-in-out group-hover:scale-110"
               />
          </div>
     );
}
