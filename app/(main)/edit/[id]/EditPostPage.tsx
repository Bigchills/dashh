import Backbutton from "@/components/Backbutton";
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,
        FormControl,
        FormField,
        FormItem,
        FormLabel,
        FormMessage
 } from "@/components/ui/form";
 import {Input} from '@/components/ui/input';
 import { Textarea } from "@/components/ui/textarea";
 import { Button } from "@/components/ui/button";
 import posts from "@/data/posts";


 const formSchema=z.object({
    title:z.string().min(1,{
        message:"title is required"
    }),
    body:z.string().min(1,{
        message:"body is required"
    }),
    author:z.string().min(1,{
        message:"author is required"
    }),
    date:z.string().min(1,{
        message:"date is required"
    })
});

 interface EditPostPageProps{
    params:{
        id:string;
    }
 }

const EditPostPage = ({params}:EditPostPageProps) => {

    const post=posts.find((post)=>post.id === params.id)

    const form =useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            title:post?.title ||'',
            body:post?.body ||'',
            author:post?.author ||'',
            date:post?.date ||'',

        }
    });
    const handleSubmit =(data:z.infer<typeof formSchema>)=>{
        
    }

    return ( 
        <div>
            <Backbutton text="Back to posts" link="/posts"/>
            <h3 className="text-2xl mb-4">Edit post
            </h3>

            <Form {...form}>

                <form onSubmit={ form.handleSubmit(handleSubmit) }
                 className="space-y-8">

                </form>

            </Form>
        </div>
     );
}
 
export default EditPostPage;