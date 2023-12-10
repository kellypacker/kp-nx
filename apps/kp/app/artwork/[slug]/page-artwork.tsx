'use client';
import React from 'react';
import styled from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { mediaQueries } from '../../utils/media-queries';
import Link from 'next/link';
import Image from 'next/image';

const HeaderStyles = styled.div`
    flex-flow: row wrap;
    & > * {
        flex: 1 100%;
        @media ${mediaQueries.md} {
            flex: 2;
        }
    }
    .pagination {
        a:hover {
            background-color: #f3f3f3;
        }
        a[disabled] {
            pointer-events: none;
            opacity: 0.3;
        }
    }
`;

type PageArtworkProps = {
    artworks: any;
    artwork: any;
};

const PageArtwork = ({ artworks, artwork }: PageArtworkProps) => {
    const currentIndex = artworks.findIndex(
        (a: any) => a.sys.id === artwork.sys.id
    );

    const prevArtwork = artworks[currentIndex - 1];
    const nextArtwork = artworks[currentIndex + 1];
    // const image = getImage(artwork.image);

    return (
        <>
            <HeaderStyles
                className="flex flex-col items-baseline justify-between mb-4 md:flex-row"
                style={{ flexFlow: 'row wrap' }}
            >
                <h2 className="mt-4 mb-5 text-xl text-center md:text-3xl md:text-left">
                    <span className="text-sm uppercase md:text-lg">
                        Series:
                    </span>{' '}
                    {artwork.fields.artGroup.fields.title}
                </h2>
                <div className="text-center pagination md:text-right">
                    <Link
                        title="Prev Page"
                        aria-disabled={!prevArtwork}
                        tabIndex={!prevArtwork ? -1 : undefined}
                        className={`${
                            !prevArtwork ? 'pointer-events-none opacity-30' : ''
                        } py-1 pl-1 pr-2 mr-3 border text-md md:text-lg border-gray-md group`}
                        href={
                            prevArtwork
                                ? `/artwork/${prevArtwork.fields.slug}`
                                : ''
                        }
                    >
                        <ChevronLeftIcon className="h-4 w-4 text-salmon inline group-hover:text-teal" />
                        Prev
                    </Link>
                    <Link
                        className="px-2 py-1 border text-md md:text-lg border-gray-md"
                        href={`/artwork/series/${artwork.fields.artGroup.fields.slug}`}
                    >
                        - All Artwork in Series -
                    </Link>
                    <Link
                        title="Next Page"
                        aria-disabled={!nextArtwork}
                        tabIndex={!nextArtwork ? -1 : undefined}
                        className={`${
                            !nextArtwork ? 'pointer-events-none opacity-30' : ''
                        } group py-1 pl-2 pr-1 ml-3 border text-md md:text-lg border-gray-md`}
                        href={
                            nextArtwork
                                ? `/artwork/${nextArtwork.fields.slug}`
                                : ''
                        }
                    >
                        Next
                        <ChevronRightIcon className="h-4 w-4 text-salmon inline group-hover:text-teal" />
                    </Link>
                </div>
            </HeaderStyles>

            <div className="flex flex-col pb-8 md:flex-row">
                <div className="w-full md:w-2/3">
                    <section className="image-container-responsive">
                        <Image
                            className="image-responsive"
                            fill
                            quality={75}
                            sizes={'75vw'}
                            src={`https:${artwork.fields.image.fields.file.url}`}
                            alt={artwork.fields.image.fields.title || ''}
                        />
                    </section>
                </div>

                <div className="w-full pl-0 text-center md:w-1/3 md:pl-6 md:text-left">
                    {!artwork.fields.longTitle?.raw && artwork.fields.title && (
                        <h1 className="pt-3 mb-2 text-lg md:pt-0">
                            {artwork.fields.title}
                        </h1>
                    )}
                    {artwork.fields.longTitle?.raw && (
                        <div>
                            <div
                                className="artwork-long-title"
                                dangerouslySetInnerHTML={{
                                    __html: documentToHtmlString(
                                        JSON.parse(artwork.longTitle.raw)
                                    ),
                                }}
                            ></div>
                        </div>
                    )}
                    {/* {artwork.longTitle &&
                        documentToReactComponents(
                            JSON.parse(artwork.longTitle.raw)
                        )} */}
                    <p className="pb-0">
                        {artwork.fields.height}" x {artwork.fields.width}"
                    </p>
                    <p className="pb-0">{artwork.fields.medium.name}</p>
                    <p className="pb-0">{artwork.fields.year}</p>
                    {artwork.fields.available &&
                        artwork.fields.price &&
                        `$${artwork.fields.price}`}
                    {artwork.fields.available && artwork.fields.linkToBuy && (
                        <div className="mt-2">
                            <a href={artwork.fields.linkToBuy}>
                                Available in my shop
                            </a>
                        </div>
                    )}
                    {artwork.fields.available && (
                        <div>
                            <a
                                href={`mailto:kelly@kellypacker.com?subject=Artwork%20inquiry%3A%20${artwork.fields.title}&body=${artwork.fields.title}%29%0Ahttps%3A%2F%2Fwww.kellypacker.com%2Fartwork%2F${artwork.fields.slug}`}
                            >
                                Inquire about artwork
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PageArtwork;
