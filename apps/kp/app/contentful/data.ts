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

export const getArtGroup = async (slug: string) => {
    console.log('getArtGroup', slug);

    const query = {
        limit: 1,
        include: 5,
        content_type: 'artGroups',
        'fields.slug': slug,
    };

    const { items } = await getClient().getEntries(query);
    return items[0] || null;
};

export const getArtworkOrderForArtGroup = async (id: string) => {
    console.log('getArtworkOrderForArtGroup', id);

    const query = {
        limit: 100,
        include: 5,
        content_type: 'artworkOrder',
        'fields.artGroup.sys.id': id,
    };

    const { items } = await getClient().getEntries(query);
    return items[0] || null;
};

export const getAbout = async () => {
    const query = {
        limit: 1,
        include: 5,
        content_type: 'about',
    };

    const { items } = await getClient().getEntries(query);

    return items || null;
};
