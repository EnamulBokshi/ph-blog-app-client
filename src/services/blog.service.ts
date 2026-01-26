import { env } from "@/env"

const apiUrl = env.API_URL;
interface GetBlogParams {
    isFeatured?: Boolean;
    search?: string;
}

interface ServiceOption {
    cache?: RequestCache;
    revalidate?: number;
}

const buildFetchConfig = (options?: ServiceOption): RequestInit => {
    const config: RequestInit = {};

    if (options?.cache) {
        config.cache = options.cache;
    }

    if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
    }

    return config;
};

export const blogService = {
    getBlogs: async (params?: GetBlogParams, options?: ServiceOption) => {
        try {
            const url = new URL(`${apiUrl}/posts`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value) {
                        url.searchParams.append(key, value);
                    }
                });
            }

            const blogs = await fetch(url, buildFetchConfig(options));
            const data = await blogs.json();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    getBlogDetails: async (id: string, options?: ServiceOption) => {
        try {
            const response = await fetch(`${apiUrl}/posts/${id}`, buildFetchConfig(options));

            if (!response.ok) {
                throw new Error(`Failed to fetch blog details for id: ${id}`);
            }

            const data = await response.json();
            return { data, error: null };
        } catch (error) {
            console.error(error);
            return { data: null, error };
        }
    },
}