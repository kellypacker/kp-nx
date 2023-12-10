// import type { Metadata, ResolvingMetadata } from 'next';

import { getArtGroups } from '../contentful/data';
import PageArtworkBySeries from './page-artwork-by-series';

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

    return <PageArtworkBySeries artGroups={artGroups} />;
}
