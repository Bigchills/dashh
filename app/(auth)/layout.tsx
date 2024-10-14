import { ReactNode } from "react";
import { ThemeToggler } from "@/components/ThemeToggler";

const AuthLayout = ({children}:{children:ReactNode}) => {
    return ( 
        <div className="h-[100vh] flex items-center justify-center relative">
            {children}

            <div className="absolute bottom-5 right-0">
                <ThemeToggler/>
            </div>


        </div>
     );
}
 
export default AuthLayout;