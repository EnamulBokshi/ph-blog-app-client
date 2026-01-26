'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Eye, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostCardProps {
  id: string;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  status: string;
  tags: string[];
  views: number;
  authorId: string;
  createdAt: string;
  _count: {
    comments: number;
  };
}

export default function BlogPostCard({
  id,
  title,
  content,
  thumbnail,
  isFeatured,
  tags,
  views,
  createdAt,
  _count,
}: BlogPostCardProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const excerpt = content.length > 150 ? content.substring(0, 150) + '...' : content;

  return (
    <Link href={`/blogs/${id}`} className="block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group border border-border/50 hover:border-primary/50">
        {/* Thumbnail Image Container */}
        <div className="relative w-full h-56 overflow-hidden bg-linear-to-br from-muted to-muted-foreground/10">
          {thumbnail ? (
            <>
              <Image
                src={thumbnail}
                alt={title}
                fill
                priority={isFeatured}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-muted/50">
              <div className="text-muted-foreground text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-2 opacity-40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm">No image</p>
              </div>
            </div>
          )}

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-lg hover:bg-red-600 transition-colors">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <CardHeader className="pb-3">
          <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors duration-200">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {excerpt}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-medium text-foreground">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Meta Information Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/40 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Eye className="w-4 h-4" />
                <span>{views}</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>{_count.comments}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
