import { blogService } from '@/services/blog.service'
import BlogPostCard from '@/components/modules/blog/BlogPostCard'
import { Blog } from '@/types';

export default async function BlogPage() {
  const data = await blogService.getBlogs();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Blog Posts</h1>
        <p className="text-lg text-muted-foreground">
          Discover insights, stories, and tutorials from our community
        </p>
      </div>

      {/* Blog Posts Grid */}
      {data?.data && data.data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.data.map((post:Blog) => (
            <BlogPostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              thumbnail={post.thumbnail}
              isFeatured={post.isFeatured}
              status={post.status}
              tags={post.tags}
              views={post.views}
              authorId={post.authorId}
              createdAt={post.createdAt}
              _count={post._count}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No blog posts available yet.</p>
        </div>
      )}
    </div>
  )
}
