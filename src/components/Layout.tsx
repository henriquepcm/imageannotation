import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
     return (
          <div className="max-w-[1920px] h-full">
               <Header />
               <main>{children}</main>
          </div>
     );
}
