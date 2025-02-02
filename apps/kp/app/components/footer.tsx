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
        <footer className="flex flex-col items-baseline py-3 pb-10 border-t md:flex-row md:justify-between border-gray-md">
            <ul className="flex items-center space-x-4">
                <li>
                    <a
                        href="https://www.etsy.com/shop/kellypacker/"
                        className="text-xl no-underline"
                    >
                        Etsy Shop
                    </a>
                </li>
                <li>
                    <a
                        href="http://instagram.com/kellypacker"
                        className="inline-block w-6 h-6"
                        title="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/kellypacker"
                        className="inline-block w-6 h-6"
                        title="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/kellypacker/"
                        title="LinkedIn"
                        className="inline-block w-6 h-6"
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
