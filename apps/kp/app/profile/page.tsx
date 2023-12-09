import { getAbout } from '../contentful/page';
import PageProfile from './page-profile';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props) {
    return {
        title: 'Profile | Kelly Packer',
        description:
            'Profile of Kelly Packer, artist and web developer. Includes artist statement and background.',
    };
}

export default async function Index() {
    const about = await getAbout();

    return <PageProfile about={about[0]} />;
}
