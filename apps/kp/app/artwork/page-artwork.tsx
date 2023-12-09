'use client';
import * as React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { mediaQueries } from '../utils/media-queries';
import Link from 'next/link';
import Image from 'next/image';

const ArtworkContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 600px));
    grid-gap: 1rem 2rem;
    border-bottom: 1px solid #dbd9d8;
    &:last-of-type {
        border-bottom: none;
    }
    @media ${mediaQueries.md} {
        grid-template-columns: 300px minmax(auto, 700px);
        /* grid-template-columns: repeat(2, minmax(200px, 300px)); */
    }
`;

const ArtGroup = ({ artGroup }) => {
    return (
        <ArtworkContainerStyled className="py-8">
            <div>
                <Link href={`/artwork/series/${artGroup.fields.slug}`}>
                    <section className="p-[3px] border border-gray-md">
                        <Image
                            className="aspect-square"
                            width={600}
                            height={600}
                            quality={75}
                            src={`https:${artGroup.fields.image.fields.file.url}`}
                            alt={artGroup.fields.image.fields.title || ''}
                        />
                    </section>
                </Link>
            </div>
            <div className="">
                <h2 className="pb-2 font-serif text-2xl font-bold text-salmon">
                    <Link href={`/artwork/series/${artGroup.fields.slug}`}>
                        {artGroup.fields.title}
                    </Link>
                </h2>
                {artGroup.fields.description &&
                    documentToReactComponents(artGroup.fields.description)}
                {artGroup.fields.artistStatement && (
                    <>
                        <h3 className="pt-3 pb-2 text-lg font-bold uppercase">
                            Statement
                        </h3>
                        {documentToReactComponents(
                            artGroup.fields.artistStatement
                        )}
                    </>
                )}
            </div>
        </ArtworkContainerStyled>
    );
};

export const PageArtwork = ({ artGroups }) => {
    if (!artGroups) return null;

    return (
        <>
            <h1 className="mt-4 text-3xl uppercase">
                Artwork <span className="italic lowercase">by</span> Series
            </h1>

            {artGroups.map((group) => (
                <ArtGroup artGroup={group} key={group.sys.id} />
            ))}
        </>
    );
};

export default PageArtwork;
