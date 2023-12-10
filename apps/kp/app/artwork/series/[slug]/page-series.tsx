'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page-series.module.css';

export function PageSeries({ artGroup, order }: { artGroup: any; order: any }) {
    const artworks = order.fields.artworks;

    return (
        <>
            <h1 className="mt-4 mb-2 text-3xl">
                <span className="text-lg font-normal uppercase">Series:</span>{' '}
                {artGroup.fields.title}
            </h1>
            <div className={`${styles['art-series']} pt-3`}>
                {artworks.map((artwork: any) => {
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
                                        alt={''}
                                    />
                                </section>
                                <h3 className="py-2 text-lg text-center">
                                    {artwork.fields.title}
                                </h3>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default PageSeries;
