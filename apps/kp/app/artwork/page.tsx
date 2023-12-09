// import type { Metadata, ResolvingMetadata } from 'next';

import { getArtGroups } from '../contentful/page';
import PageArtwork from './page-artwork';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props) {
    return {
        title: 'Artwork by Series | Kelly Packer',
        description:
            'Artwork by listed by series by Kelly Packer. Includes artist statements and images.',
    };
}

export default async function Index() {
    const artGroups = await getArtGroups();

    return <PageArtwork artGroups={artGroups} />;
}
