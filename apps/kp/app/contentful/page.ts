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

export const getArtGroups = async () => {
    const query = {
        limit: 500,
        include: 5,
        content_type: 'artGroups',
        order: '-fields.publishedAt',
    };

    const { items } = await getClient().getEntries(query);

    return items || null;
};
