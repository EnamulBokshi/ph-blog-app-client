import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Blog } from "@/types";

type BlogPostDetailsProps = {
  post: Blog;
};

const statusVariantMap: Record<Blog["status"], "default" | "secondary" | "destructive"> = {
  PUBLISHED: "default",
  DRAFT: "secondary",
  ARCHIVED: "destructive",
};

const statusLabelMap: Record<Blog["status"], string> = {
  PUBLISHED: "Published",
  DRAFT: "Draft",
  ARCHIVED: "Archived",
};

const formatDate = (value: string) => {
  try {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(value));
  } catch (error) {
    console.error("Failed to format date", error);
    return value;
  }
};

export default function BlogPostDetails({ post }: BlogPostDetailsProps) {
  const publishedDate = formatDate(post.createdAt);

  return (
    <article className="mx-auto w-full max-w-5xl">
      <Card className="overflow-hidden">
        {post.thumbnail ? (
          <div className="relative h-72 w-full bg-muted">
            <Image
              src={post.thumbnail}
              alt={`Thumbnail for ${post.title}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        ) : null}

        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={statusVariantMap[post.status]}>{statusLabelMap[post.status]}</Badge>
            {post.isFeatured ? <Badge variant="outline">Featured</Badge> : null}
          </div>
          <CardTitle className="text-3xl leading-tight md:text-4xl">
            {post.title}
          </CardTitle>
          <CardDescription>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span>{publishedDate}</span>
              <Separator orientation="vertical" className="h-4" />
              <span>{post.views} views</span>
              <Separator orientation="vertical" className="h-4" />
              <span>{post._count.comments} comments</span>
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {post.tags.length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{`#${tag}`}</Badge>
              ))}
            </div>
          ) : null}

          <div className="rounded-lg bg-muted/40 p-5 text-base leading-7 text-muted-foreground whitespace-pre-line">
            {post.content}
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
