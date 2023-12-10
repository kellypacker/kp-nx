'use client';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import { mediaQueries } from '../utils/media-queries';
import Image from 'next/image';

const ProfileStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 600px));
    grid-gap: 2rem 2rem;
    @media ${mediaQueries.md} {
        grid-template-columns: 300px minmax(auto, 700px);
    }
`;

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
            <ProfileStyled className="pb-6">
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
            </ProfileStyled>
        </>
    );
};
export default PageProfile;
