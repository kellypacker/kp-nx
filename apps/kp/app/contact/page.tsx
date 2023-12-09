import { getAbout } from '../contentful/page';
import PageContact from './page-contact';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props) {
    return {
        title: 'Contact | Kelly Packer',
        description:
            'Contact Kelly Packer regarding general inquires, web development and artwork.',
    };
}

export default async function Index() {
    const about = await getAbout();

    return <PageContact about={about[0]} />;
}
