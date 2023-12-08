'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import '../css/nav.css';
import Link from 'next/link';

const NavStyled = styled.nav`
    a[aria-current='page'] {
        color: #78736f;
        border-bottom: 1px solid #f98b7e;
        background-color: #f3f3f3;
        span {
            border-right: 15px solid rgba(214, 188, 63, 0.2);
        }
    }
`;

const ArtworkBgStyled = styled.span`
    /* background-color: #d6bc3f; */
    display: inline-block;
    padding: 0;
    border-bottom: 1px solid transparent;
    border-right: 15px solid transparent;
    border-left: 1px solid transparent;
    margin-left: -5px;
    position: relative;
    &:after {
        content: ' ';
        position: absolute;
        top: 0px;
        right: -9px;
        bottom: 5px;
        z-index: 10;
        border-left: 3px dotted #97c9bd;
    }
    &:hover {
        /* background-color: rgba(214, 188, 63, 0.2); */
        border-right: 15px solid rgba(214, 188, 63, 0.2);
    }
`;
const WebBgStyled = styled.span`
    /* background-color: #d6bc3f; */
    display: inline-block;
    padding: 3px 0;
    border-bottom: 1px solid transparent;
    &:hover {
        /* background-color: rgba(214, 188, 63, 0.2); */
        border-bottom: 1px solid #97c9bd;
    }
`;

const StoreBgStyled = styled.span`
    padding-left: 5px;
    padding-right: 5px;
    &:hover {
        background-color: rgba(214, 188, 63, 0.2);
    }
`;

const Navigation = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleMobileNavToggle = () => {
        const isDesktop = window.innerWidth > 768;
        document.body.style.overflow =
            isMobileNavOpen || isDesktop ? 'auto' : 'hidden';
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    return (
        <>
            <div className="relative block main-nav-mobile md:hidden">
                <Link className="main-nav-mobile__artwork" href="/artwork">
                    <ArtworkBgStyled>Artwork</ArtworkBgStyled>
                </Link>
                {isMobileNavOpen && (
                    <button
                        type="button"
                        onClick={handleMobileNavToggle}
                        className="text-lg md:hidden"
                    >
                        Close
                    </button>
                )}
                {!isMobileNavOpen && (
                    <button
                        type="button"
                        onClick={handleMobileNavToggle}
                        className="text-lg md:hidden"
                    >
                        More
                    </button>
                )}
            </div>
            <div className="flex items-center justify-between pt-4 pb-2 border-b main-header border-gray-md">
                <Link
                    href="/"
                    className="ml-1 text-3xl"
                    style={{ lineHeight: 1.2, zIndex: 11 }}
                >
                    Kelly Packer
                </Link>

                <div
                    className={`${
                        isMobileNavOpen ? 'block' : 'hidden'
                    } md:block`}
                >
                    <NavStyled>
                        <ul>
                            <li>
                                <Link
                                    href="/artwork"
                                    onClick={handleMobileNavToggle}
                                >
                                    <ArtworkBgStyled>Artwork</ArtworkBgStyled>
                                </Link>
                            </li>
                            {/* <li>
                                <a href="https://shop.kellypacker.com">
                                    <ArtworkBgStyled>Store</ArtworkBgStyled>
                                </a>
                            </li> */}
                            {/* <li>
                                <a href="https://www.etsy.com/shop/kellypacker/">
                                    <ArtworkBgStyled>
                                        Etsy Store
                                    </ArtworkBgStyled>
                                </a>
                            </li> */}
                            <li>
                                <Link
                                    href="/profile"
                                    onClick={handleMobileNavToggle}
                                >
                                    <ArtworkBgStyled>Profile</ArtworkBgStyled>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    onClick={handleMobileNavToggle}
                                >
                                    <ArtworkBgStyled>Contact</ArtworkBgStyled>
                                </Link>
                            </li>
                        </ul>
                    </NavStyled>
                </div>
            </div>
        </>
    );
};

export default Navigation;
