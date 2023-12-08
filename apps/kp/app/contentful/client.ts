import { createClient } from 'contentful';

const client = createClient({
    space: process.env['NEXT_PUBLIC_CONTENTFUL_SPACE_ID'] || '',
    accessToken: process.env['NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN'] || '',
    environment: 'master',
});

export const getClient = () => client;
