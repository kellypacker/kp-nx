import Footer from './components/footer';
import Navigation from './components/navigation';
import './global.css';
import '@fontsource/eb-garamond';

export const metadata = {
    metadataBase: new URL('https://www.kellypacker.com'),
    title: 'Kelly Packer - Artist & Web Developer',
    description:
        'Kelly Packer is an artist and web developer. Features a portfolio of her contemporary abstract artwork. Includes web development projects.',
    alternates: {
        canonical: `/`,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="container px-3 mx-auto">
                    <Navigation />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
