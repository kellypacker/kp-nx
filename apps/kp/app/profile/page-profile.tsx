'use client';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './profile.module.css';
import Image from 'next/image';

export const PageProfile = ({ about }: { about: any }) => {
    return (
        <>
            {/* <SEO
                title="Profile"
                description="Profile of Kelly Packer, artist and web developer. Includes artist statement and background."
            /> */}
            <h1 className="mt-4 mb-2 text-3xl">
                Artist <em>and</em> Web Developer
            </h1>
            <div className={`${styles['profile']} pb-6`}>
                <div>
                    <figure className="p-[3px] border border-gray-md">
                        <Image
                            className="ratio-square"
                            width={600}
                            height={600}
                            src={`https:${about.fields.profileImage.fields.file.url}`}
                            alt={about.fields.profileImage.fields.title || ''}
                        />
                    </figure>
                </div>
                <div className="cms-content cms-content--profile">
                    {documentToReactComponents(about.fields.body)}
                </div>
            </div>
        </>
    );
};
export default PageProfile;
