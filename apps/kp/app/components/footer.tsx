import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col items-baseline py-3 border-t md:flex-row md:justify-between border-gray-md pb-10">
            <ul className="flex space-x-4 items-center">
                <li>
                    <a
                        href="https://www.etsy.com/shop/kellypacker/"
                        className="text-xl"
                    >
                        Etsy Shop
                    </a>
                </li>
                <li>
                    <a
                        href="http://instagram.com/kellypacker"
                        className="h-6 w-6 inline-block"
                        title="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/kellypacker"
                        className="h-6 w-6 inline-block"
                        title="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/kellypacker/"
                        title="LinkedIn"
                        className="h-6 w-6 inline-block"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <p className="mt-2 md:mt-0">
                © 2003-{currentYear} Kelly Packer. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
