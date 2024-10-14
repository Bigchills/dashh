import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
  import { LayoutDashboard, Newspaper, CreditCard, Folders, User, Settings, } from "lucide-react";
  import Link from "next/link";
  

const Sidebar = () => {
    return (  
            <Command className="bg-secondary rounded-none ">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <LayoutDashboard className="w-4 h-4 mr-2"/>
                        <Link href="/">Dashboard</Link>
                    </CommandItem>
                    <CommandItem>
                        <Newspaper  className="mr-2 h-4 w-4"/>
                        <Link href="/posts">Posts</Link>
                    </CommandItem>
                    <CommandItem>
                        <Folders className="mr-2 h-4 w-4" />
                        <Link href='/'>Categories</Link>
                    </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link href="/profile">Profile</Link>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <Link href="/">Billing</Link>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <Link href="/">Settings</Link>
                    </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
    );
}
export default Sidebar;