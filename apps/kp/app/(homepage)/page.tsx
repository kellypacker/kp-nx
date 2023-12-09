// import type { Metadata, ResolvingMetadata } from 'next';

import { getBlogPosts } from '../contentful/page';
import PageHome from './page-home';

// type Props = {
//     params: { id: string };
//     searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     const page = await getHomePageData();
//     if (!page) {
//         throw new Error(
//             'Page not found, probably API temp down for maintenance time'
//         );
//     }

//     const meta = await getMetadata({ page, params, searchParams }, parent);
//     return meta;
// }

export default async function Index() {
    const posts = await getBlogPosts();

    return <PageHome posts={posts} />;
}
