import { useDispatch } from "react-redux";
import EllipsisIcon from "./icons/EllipsisIcon";
import { AppDispach, RootState } from "../store/store";
import Logo from "./Logo";
import MainMenu from "./MainMenu";
import { openMenu } from "../slices/menuAndSelectorsSlice";
import { useSelector } from "react-redux";

export default function Header() {
     const dispatch = useDispatch<AppDispach>();
     const isMenuOpen = useSelector(
          (state: RootState) => state.menuAndSelectors.menu.isOpen
     );

     return (
          <header className="flex flex-row items-center justify-between w-full mb-5 relative z-50">
               {isMenuOpen ? <MainMenu /> : null}
               <div className="flex-none">
                    <Logo />
               </div>
               <div className="flex-grow text-center font-bold text-base">
                    Kiwi ImageAnnotation
               </div>
               <button
                    onClick={() => dispatch(openMenu())}
                    className="flex-none text-white transition duration-300 ease-in-out hover:text-imageannotationgrey"
               >
                    <EllipsisIcon />
               </button>
          </header>
     );
}
