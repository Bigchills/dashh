import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from "next/link";  
import { Post } from "@/types/posts";
import posts from "@/data/posts";
import PostPagination from "./PostPagination";


interface PostTableProps{
    limit?:number;
    title?:string;
}


const PostsTable = ({limit, title}:PostTableProps) => {


    const sortedPosts:Post[]= [...posts].sort((a, b)=> new Date(b.date).getTime()
              -new Date(a.date).getTime()) 
    const filteredPosts= limit ? sortedPosts.slice(0, limit) : sortedPosts 
    return ( 
        <div className="mt-10">
            <h3 className="text-2xl mb-4 font-semibold">
                {title ? title :'Posts'}

            </h3>
            <Table>
                <TableCaption>A list of recent Posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredPosts.map((post)=>(
                        <TableRow key={post.id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                            <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                            <Table>
                                <Link href={`/posts/edit/${post.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700
                                    text-white py-1 px-3 rounded text-xs ">Edit</button>
                                </Link>
                            </Table>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <PostPagination/>

        </div>
     );
}
 
export default PostsTable;