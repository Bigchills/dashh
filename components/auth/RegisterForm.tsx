'use client'
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
 import { Button } from "@/components/ui/button";
 import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";


const formSchema=z.object({
    name:z.string().min(1, {
        message:'name is required'
    }),
    email:z.string().min(1, {
        message:'email is required'
    }).email({
        message:'please enter a valid email'
    }),
    password:z.string().min(1, {
        message:' password is required'
    }),
    confirmpassword:z.string().min(1,{
        message: 'please confirm password'
    })
})


const RegisterForm = () => {
    const router = useRouter()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:'',
            email:'',
            password:'',
            confirmpassword:''
        },
    })

    const handleSubmit=(data:z.infer<typeof formSchema>)=>{

        router.push('/')


    }
    return ( 
        <Card className=''>
            <CardHeader>
                <CardTitle className='text-center'>
                    Sign Up
                </CardTitle>
                <CardDescription className='text-center'>
                    Fill in your details
                </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
                <Form {...form}>

                    <form className='space-y-6' onSubmit={form.handleSubmit(handleSubmit)}>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500  dark:text-white ">Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter email" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black
                                dark:text-white focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500  dark:text-white ">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter email" className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black
                                dark:text-white focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500  dark:text-white ">Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Password" type='password' className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black
                                dark:text-white focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                />
                    <FormField
                        control={form.control}
                        name="confirmpassword"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500  dark:text-white ">confirm password</FormLabel>
                            <FormControl>
                                <Input placeholder="Confirm Password" type='password' className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black
                                dark:text-white focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                />

                <Button className='w-full bg-blue-700 text-white hover:bg-blue-600'>
                    Sign up
                </Button>
                </form>

                </Form>
            </CardContent>
        </Card>
 );
}
 
export default RegisterForm;