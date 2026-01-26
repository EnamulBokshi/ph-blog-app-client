import BlogPostDetails from "@/components/modules/blog/BlogPostDetails";
import { blogService } from "@/services/blog.service";
import { Blog } from "@/types";

// export const dynamicParams = false; 

export async function generateStaticParams(){
    const data = await blogService.getBlogs();
    
    return data?.data?.map((post: Blog) => ({id:post.id})).splice(0,3);
}

export default async function BlogPage({params}: {params: Promise<{id: string}>}) {
    
    const {id} = await params;
    const {data} = await blogService.getBlogDetails(id);
    
    return(
        <div>
           <BlogPostDetails post={data}/>
        </div>
    )
}