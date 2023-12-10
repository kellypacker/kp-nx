'use client';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page-artwork-by-series.module.css';

const ArtGroup = ({ artGroup }: { artGroup: any }) => {
    return (
        <div className={styles['art-group']}>
            <Link href={`/artwork/series/${artGroup.fields.slug}`}>
                <figure className="p-[3px] border border-gray-md w-full md:w-[300px] inline-block">
                    <Image
                        className="aspect-square"
                        width={600}
                        height={600}
                        quality={75}
                        src={`https:${artGroup.fields.image.fields.file.url}`}
                        alt={artGroup.fields.image.fields.title || ''}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP82V1XDwAHCgKDYKnZXgAAAABJRU5ErkJggg=="
                    />
                </figure>
            </Link>
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
        </div>
    );
};

export const PageArtworkBySeries = ({ artGroups }: { artGroups: any }) => {
    if (!artGroups) return null;

    return (
        <>
            <h1 className="mt-4 text-3xl uppercase">
                Artwork <span className="italic lowercase">by</span> Series
            </h1>

            {artGroups.map((group: any) => (
                <ArtGroup artGroup={group} key={group.sys.id} />
            ))}
        </>
    );
};

export default PageArtworkBySeries;
