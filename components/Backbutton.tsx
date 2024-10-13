import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackbuttonProps{
    text:string,
    link:string
}


const Backbutton = ({text, link}:BackbuttonProps) => {
    return (
        <Link href={link} className="text-gray-400 hover:underline flex items-center font-bold mb-4">
            <ArrowLeftCircle size={20}/>{text}
        </Link>
      );
}
 
export default Backbutton;