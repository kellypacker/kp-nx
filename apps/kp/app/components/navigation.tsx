'use client';
import React, { useState } from 'react';
import '../css/nav.css';
import Link from 'next/link';
import styles from './nav.module.css';

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
                    <span className={styles['artwork-bg']}>Artwork</span>
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
                    className="ml-1 text-3xl no-underline"
                    style={{ lineHeight: 1.2, zIndex: 11 }}
                >
                    Kelly Packer
                </Link>

                <div
                    className={`${
                        isMobileNavOpen ? 'block' : 'hidden'
                    } md:block`}
                >
                    <nav className={styles['nav']}>
                        <ul>
                            <li>
                                <Link
                                    href="/artwork/series/here-living-again-living-here"
                                    onClick={handleMobileNavToggle}
                                >
                                    <span className={styles['artwork-bg']}>
                                        Available
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/artwork"
                                    onClick={handleMobileNavToggle}
                                >
                                    <span className={styles['artwork-bg']}>
                                        Artwork
                                    </span>
                                </Link>
                            </li>
                            {/* <li>
                                <a href="https://shop.kellypacker.com">
                                    <span className={styles['artwork-bg']}>Store</span>
                                </a>
                            </li> */}
                            {/* <li>
                                <a href="https://www.etsy.com/shop/kellypacker/">
                                    <span className={styles['artwork-bg']}>
                                        Etsy Store
                                    </span>
                                </a>
                            </li> */}
                            <li>
                                <Link
                                    href="/profile"
                                    onClick={handleMobileNavToggle}
                                >
                                    <span className={styles['artwork-bg']}>
                                        Profile
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    onClick={handleMobileNavToggle}
                                >
                                    <span className={styles['artwork-bg']}>
                                        Contact
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navigation;
