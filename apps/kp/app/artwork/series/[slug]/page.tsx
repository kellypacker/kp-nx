import {
    getArtGroup,
    getArtworkOrderForArtGroup,
} from '../../../contentful/data';
import PageSeries from './page-series';

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const artGroup = (await getArtGroup(props.params.slug)) as any;

    return {
        title: `Artwork Series: ${artGroup.fields.title}`,
        description: `Artwork for the series: ${artGroup.fields.title}`,
    };
}

export default async function Index({ params }: { params: { slug: string } }) {
    const artGroup = await getArtGroup(params.slug);
    const order = await getArtworkOrderForArtGroup(artGroup.sys.id);

    return <PageSeries artGroup={artGroup} order={order} />;
}
