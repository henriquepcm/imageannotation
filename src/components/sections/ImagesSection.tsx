import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ImagesSectionItem from "../ImagesSectionItem";
import PlusSignButton from "../buttons/PlusSignButton";

export default function ImagesSection() {
     const isImagesSectionOpen = useSelector(
          (state: RootState) => state.sections.images.isOpen
     );

     return (
          <div
               className={`justify-center items-center ${
                    isImagesSectionOpen ? "flex" : "hidden"
               }`}
          >
               <div className="flex flex-col w-full h-full">
                    <div className="flex justify-between">
                         <h2>Images</h2>
                         <div>
                              <PlusSignButton
                                   label="Add images"
                                   onClick={() =>
                                        alert(
                                             "The Add Images button would open the window to browse and add images from your device."
                                        )
                                   }
                              />
                         </div>
                    </div>
                    <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full mt-7">
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-1"
                                   altText="car"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-2"
                                   altText="bird"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-3"
                                   altText="camera"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-4"
                                   altText="city"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-5"
                                   altText="car in desert"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-6"
                                   altText="plant"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-7"
                                   altText="penguin"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-8"
                                   altText="tree"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-9"
                                   altText="person"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-10"
                                   altText="horse"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-11"
                                   altText="coffee"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-12"
                                   altText="camera"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-13"
                                   altText="squirrel"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-14"
                                   altText="dog"
                              />
                         </li>
                         <li>
                              <ImagesSectionItem
                                   imageFileName="car-15"
                                   altText="coffee"
                              />
                         </li>
                    </ul>
               </div>
          </div>
     );
}
