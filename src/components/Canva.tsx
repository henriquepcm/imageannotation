type CanvaProps = {
     imageIndex: number;
     images: string[];
};

export default function Canva({ imageIndex, images }: CanvaProps) {
     return (
          <div>
               <img
                    src={`./images/${images[imageIndex]}`}
                    className="object-cover h-full w-full rounded-xl md:max-h-[33rem] cxl:max-h-[40rem]"
               />
          </div>
     );
}

{
     /* <img
                    src={`./images/${images[imageIndex]}`}
                    className="object-cover h-full w-full max-w-[60rem] max-h-[27.3125rem] md:max-h-[34rem] lg:max-w-[70rem] xl:max-w-[100rem] cxl:max-h-[40rem] c2xl:max-h-[60rem] rounded-xl"
               /> */
}
