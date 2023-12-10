'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem 2rem;
    border-bottom: 1px solid #dbd9d8;
    margin-bottom: 40px;
    :last-of-type {
        border-bottom: none;
    }
`;

export function PageSeries({ artGroup, order }) {
    const artworks = order.fields.artworks;
    console.log(artworks);

    return (
        <>
            <h1 className="mt-4 mb-2 text-3xl">
                <span className="text-lg font-normal uppercase">Series:</span>{' '}
                {artGroup.fields.title}
            </h1>
            <ContainerStyled className="pt-3">
                {artworks.map((artwork) => {
                    // const image = getImage(artwork.image);
                    return (
                        <div key={artwork.fields.id} className="relative">
                            {artwork.fields.available && (
                                <div className="absolute top-0 right-0 z-10 px-2 py-1 text-gray-lighter bg-salmon">
                                    Available
                                </div>
                            )}
                            <Link href={`/artwork/${artwork.fields.slug}`}>
                                <section className="image-container-responsive">
                                    <Image
                                        className="image-responsive"
                                        fill
                                        quality={75}
                                        sizes={'50vw'}
                                        src={`https:${artwork.fields.image.fields.file.url}`}
                                        alt={artwork.fields.title || ''}
                                    />
                                </section>
                                <h3 className="py-2 text-lg text-center">
                                    {artwork.fields.title}
                                </h3>
                            </Link>
                        </div>
                    );
                })}
            </ContainerStyled>
        </>
    );
}

export default PageSeries;
