'use client';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

type PageHomeProps = {
    posts: any;
};

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem 2rem;
`;

export function PageHome(props: PageHomeProps) {
    console.log('PageHome props', props);

    const { posts } = props;
    if (!posts) return null;

    return (
        <ContainerStyled>
            {/* <SEO title="Home" /> */}
            {posts.map((post) => {
                // const image = getImage(post.image);
                return (
                    <div className="pt-4 pb-8" key={post.id}>
                        <h2 className="mt-4 mb-2 text-3xl leading-8">
                            {post.fields.title}
                        </h2>
                        <ReactMarkdown className="mb-4">
                            {post.fields.description}
                        </ReactMarkdown>
                        {/* <GatsbyImage image={image} alt={post.image.title} /> */}
                    </div>
                );
            })}
        </ContainerStyled>
    );
}

export default PageHome;
