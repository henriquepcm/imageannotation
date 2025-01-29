import { useSelector } from "react-redux";
import AnnotationToolBar from "../AnnotationToolBar";
import Canva from "../Canva";
import { RootState } from "../../store/store";
import { useState } from "react";

const images = [
     "car-9.jpg",
     "car-2.jpg",
     "car-3.jpg",
     "car-4.jpg",
     "car-5.jpg",
     "car-6.jpg",
     "car-7.jpg",
     "car-8.jpg",
     "car-1.jpg",
     "car-10.jpg",
     "car-11.jpg",
     "car-12.jpg",
     "car-13.jpg",
     "car-14.jpg",
     "car-15.jpg",
];

export default function CreateAnnotationSection() {
     const [imageIndex, setImageIndex] = useState(0);

     const isCreateAnnotationSectionOpen = useSelector(
          (state: RootState) => state.sections.createAnnotation.isOpen
     );

     const updateImageIndex = (step: number) => {
          setImageIndex((imageIndex + step + images.length) % images.length);
     };

     return (
          <div
               className={`flex-col justify-center items-center lg:items-start lg:flex-row w-full gap-4 ${
                    isCreateAnnotationSectionOpen ? "flex" : "hidden"
               }`}
          >
               <div className="max-h-[40rem] max-w-[40rem]">
                    <Canva imageIndex={imageIndex} images={images} />
               </div>
               <div className="flex justify-start items-start max-w-[40rem] pt-5">
                    <AnnotationToolBar updateImageIndex={updateImageIndex} />
               </div>
          </div>
     );
}
