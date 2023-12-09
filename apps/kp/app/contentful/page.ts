import { getClient } from './client';

export const getBlogPosts = async () => {
    const query = {
        limit: 500,
        include: 5,
        content_type: 'blog',
        order: '-fields.date',
    };

    const { items } = await getClient().getEntries(query);

    return items || null;
};
