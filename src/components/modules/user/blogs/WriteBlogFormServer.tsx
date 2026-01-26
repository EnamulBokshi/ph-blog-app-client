import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm } from '@tanstack/react-form'
import * as z from "zod";
export const BlogSchema = z.object({
    title: z.string().min(1, "Title is required!!"),
    content: z.string().min(1, "Content is required!!"),
    tags: z.array(z.string())
})

export default function WriteBlogFormServer() {
    // const form = useForm({
    //     defaultValues: {
    //         title: "",
    //         content: "",
    //         tags: [] as string[]
    //     },
    //     validators: {
    //         onSubmit: BlogSchema
    //     },
    //     onSubmit : async({value}) => {
    //         console.log(value)
    //     }
    // })

    const createBlog = async(data:FormData) => {
        "use server"
        console.log(data)
    }

  return (
   <Card className='max-w-3xl mx-auto'>
    <CardHeader>
        <CardTitle>What's on your mind?</CardTitle>
        <CardDescription>Just clear you mind here, put all of your tought here..</CardDescription>
        
    </CardHeader>
    <CardContent>
        <form id='writeBlogForm' action={createBlog}>
            <FieldGroup>
                <Field>
                    <FieldLabel>Title</FieldLabel>
                    <Input name='title' type='text' placeholder='Enter blog title here..' />
                </Field>
            </FieldGroup>
        </form>
    </CardContent>
    <CardFooter >
        <Button className='w-full ' form='writeBlogForm' type='submit'> Submit</Button>
    </CardFooter>
   </Card>
  )
}
