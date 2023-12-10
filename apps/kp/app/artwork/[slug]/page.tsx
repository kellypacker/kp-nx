import { getArtwork, getArtworkOrderForArtGroup } from '../../contentful/data';
import PageArtwork from './page-artwork';

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const artwork = (await getArtwork(props.params.slug)) as any;

    return {
        title: `Artwork by Kelly Packer: ${artwork.fields.title}`,
        description: `Artwork by Kelly Packer: ${artwork.fields.title} ${artwork.fields.medium.name} ${artwork.fields.year}`,
    };
}

export default async function Index({ params }: { params: { slug: string } }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const artwork = (await getArtwork(params.slug)) as any;
    const order = (await getArtworkOrderForArtGroup(
        artwork.fields.artGroup.sys.id
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    )) as any;

    return <PageArtwork artwork={artwork} artworks={order.fields.artworks} />;
}
