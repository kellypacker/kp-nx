import { getClient } from './client';

export const getBlogPosts = async () => {
    const query = {
        limit: 500,
        include: 5,
        // locale: 'en',
        content_type: 'blog',
        order: '-fields.date',
    };

    const { items } = await getClient().getEntries(query);
    console.log(items);

    return items || null;
};
