'use client';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

type PageHomeProps = {
    posts: any;
};

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem 2rem;
`;

export function PageHome(props: PageHomeProps) {
    const { posts } = props;
    if (!posts) return null;

    return (
        <ContainerStyled>
            {posts.map((post: any) => {
                return (
                    <div className="pt-4 pb-8 relative" key={post.id}>
                        <h2 className="mt-4 mb-2 text-3xl leading-8">
                            {post.fields.title}
                        </h2>
                        <ReactMarkdown className="mb-4">
                            {post.fields.description}
                        </ReactMarkdown>
                        <section className="image-container-responsive">
                            <Image
                                className="image-responsive"
                                fill
                                quality={75}
                                sizes={'50vw'}
                                src={`https:${post.fields.image.fields.file.url}`}
                                alt={post.fields.image.fields.title || ''}
                            />
                        </section>
                    </div>
                );
            })}
        </ContainerStyled>
    );
}

export default PageHome;
