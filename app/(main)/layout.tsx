import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({children}:{children:ReactNode}) => {
    return ( 
        <div>
          <Navbar/>
          <div className="flex">
            <div className="h-[100vh] w-[350px] hidden md:block">
              <Sidebar/>
            </div>
            <div className=" w-full p-5 md:max-w-[1140px] ">
              {children}
            </div>
          </div>
        </div>
     );
}
export default MainLayout;