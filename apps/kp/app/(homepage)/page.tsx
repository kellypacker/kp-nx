// import type { Metadata, ResolvingMetadata } from 'next';

import { getBlogPosts } from '../contentful/page';
import PageHome from './page-home';

export default async function Index() {
    const posts = await getBlogPosts();

    return <PageHome posts={posts} />;
}
