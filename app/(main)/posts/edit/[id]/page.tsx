'use client'
import Backbutton from "@/components/Backbutton";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
 } from "@/components/ui/form";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { useToast } from "@/hooks/use-toast";


const formSchema=z.object({
    title:z.string().min(1, {
        message:'Title is required'
    }),
    body:z.string().min(1, {
        message:'Body is required'
    }),
    author:z.string().min(1, {
        message:'Author is required'
    }),
    date:z.string().min(1, {
        message:'Date is required'
    }),
})

interface PostEditPageProps{
    params:{
        id:string;
    }
}

const PostEditPage = ({params}:PostEditPageProps) => {

    const {toast} =useToast();

    const post=posts.find((post)=>post.id===params.id);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            title:post?.title||'',
            body:post?.body|| '',
            author:post?.author||'',
            date:post?.date || '',
        },
    })

    const handleSubmit=(data:z.infer<typeof formSchema>)=>{
        // Update the post with the new data
        if (post) {
            post.title = data.title;
            post.body = data.body;
            post.author = data.author;
            post.date = data.date;
        }

        toast({
            title:'Post has been updated successfully',
            description:`Updated by ${data.author} on ${data.date}`
        })
    }

    return ( 
    <div>
        <Backbutton text='Back To Posts' link='/posts'/>
        <h3 className="text-2xl mb-4">Edit Posts</h3>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500  dark:text-white ">Title</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Title" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black
                            dark:text-white focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500  dark:text-white ">Body</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Enter Body" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black
                            dark:text-white focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500  dark:text-white ">Author</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Date" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black
                            dark:text-white focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="uppercase text-xs font-bold text-zinc-500  dark:text-white ">Date</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Date" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black
                            dark:text-white focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button  className="w-full text-white bg-blue-700 hover:bg-blue-600">
                    Update Post
                </Button>
            </form>
        </Form>
    </div>
 );
}
 
export default PostEditPage;