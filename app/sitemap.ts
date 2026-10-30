import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : new Date();

    const blogPosts = posts.map((post) => ({
        url: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: SITE_URL,
            lastModified: latestPostDate,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: latestPostDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: latestPostDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/llms.txt`,
            lastModified: latestPostDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/llms-full.txt`,
            lastModified: latestPostDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        ...blogPosts,
    ];
}
