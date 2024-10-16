import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { ThemeToggler } from "./ThemeToggler";
const Navbar = () => {
    return ( 
        <div className="bg-blue-800 dark:bg-slate-800 dark:text-whiteitems-center flex justify-between px-4 py-2">
            <div>
                <Link href='/' className="antialiased font-mono px-2 py-1 font-semibold text-lg border-2
                 border-white text-white flex items-center justify-center rounded-md">
                    Reacher
                </Link>
            </div>
            <div className=" flex items-center">
                <ThemeToggler/>
                <DropdownMenu>
                    <DropdownMenuTrigger className=" focus:outline-none">
                    <div>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                    </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
     );
}
 
export default Navbar;
