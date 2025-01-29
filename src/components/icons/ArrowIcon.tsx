export type ArrowSize = "small" | "big";
export type ArrowDirection = "up" | "down" | "right" | "left";

type ArrowSizeProps = {
     size: ArrowSize;
     direction: ArrowDirection;
};

const sizes = {
     big: {
          width: "10",
          height: "5",
     },
     small: {
          width: "7",
          height: "4",
     },
};

const directions = {
     up: "rotate-0",
     right: "rotate-90",
     down: "rotate-180",
     left: "rotate-[270deg]",
};

export default function ArrowIcon({ size, direction }: ArrowSizeProps) {
     const getSize = sizes[size];
     const getDirection = directions[direction];

     return (
          <svg
               width={getSize.width}
               height={getSize.height}
               className={getDirection}
               viewBox="0 0 11 6"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg"
          >
               <path
                    d="M6.0043 0.495705C5.72537 0.21678 5.2724 0.21678 4.99347 0.495705L0.709193 4.77999C0.430269 5.05891 0.430269 5.51188 0.709193 5.79081C0.988118 6.06973 1.44109 6.06973 1.72002 5.79081L5.5 2.01082L9.27998 5.78858C9.55891 6.0675 10.0119 6.0675 10.2908 5.78858C10.5697 5.50965 10.5697 5.05668 10.2908 4.77775L6.00653 0.493473L6.0043 0.495705Z"
                    fill="white"
               />
          </svg>
     );
}
