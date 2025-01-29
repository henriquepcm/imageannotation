import IconButton from "./buttons/IconButton";

type SavedAnnotationItemProps = {
     imageFileName: string;
     id: string;
     creationDate: string;
};

export default function SavedAnnotationItem({
     imageFileName,
     id,
     creationDate,
}: SavedAnnotationItemProps) {
     return (
          <div className="flex justify-between items-center w-full pr-4 pl-4">
               <div className="pr-5">
                    <IconButton
                         type="trashCan"
                         onClick={() =>
                              alert(
                                   "The trash can icon would delete this item from Saved Annotations."
                              )
                         }
                    />
               </div>
               <div className="flex flex-grow items-center">
                    <div className="w-[3.125rem] h-[3.125rem] overflow-hidden">
                         <button
                              onClick={() =>
                                   alert(
                                        "The image would take the user to the Create Annotation section showing the respective changes on the image."
                                   )
                              }
                         >
                              <img
                                   src={`images/${imageFileName}.jpg`}
                                   alt="thumbnail"
                                   className="object-cover w-[3.125rem] h-[3.125rem] transform duration-300 ease-in-out hover:scale-110"
                              />
                         </button>
                    </div>
                    <div className="pl-3">
                         <div className="font-bold">
                              ID: {""}
                              <button
                                   onClick={() =>
                                        alert(
                                             "The ID number would take the user to the Create Annotation section showing the respective changes on the image."
                                        )
                                   }
                                   className="transform duration-300 ease-in-out hover:text-imageannotationlightgrey"
                              >
                                   {id}
                              </button>
                         </div>
                         <div className="text-imageannotationlightgrey text-xs">
                              {creationDate}
                         </div>
                    </div>
               </div>
               <div>
                    <IconButton
                         type="export"
                         onClick={() =>
                              alert(
                                   "The export icon would download this Annotation in COCO format."
                              )
                         }
                    />
               </div>
          </div>
     );
}
