
export type Blog = {
    id: string;
    title: string;
    content: string;
    thumbnail: string | null;
    isFeatured: boolean;
    status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
    tags: string[];
    views: number;
    authorId: string;
    createdAt: string;
    updatedAt: string;
    _count: {
        comments: number;
    };
};

export type BlogResponse = {
    data: Blog[];
    error?: string | null;
};
 