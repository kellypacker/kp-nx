'use client';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './home.module.css';

type PageHomeProps = {
    posts: any;
};

export function PageHome(props: PageHomeProps) {
    const { posts } = props;
    if (!posts) return null;

    return (
        <div className={styles['container']}>
            {posts.map((post: any) => {
                return (
                    <div className="pt-4 pb-8 relative" key={post.id}>
                        <h2 className="mt-4 mb-2 text-3xl leading-8">
                            {post.fields.title}
                        </h2>
                        <ReactMarkdown className="mb-4">
                            {post.fields.description}
                        </ReactMarkdown>
                        <section className="image-container-responsive">
                            <Image
                                className="image-responsive min-h-[200px]"
                                fill
                                quality={75}
                                sizes={'50vw'}
                                src={`https:${post.fields.image.fields.file.url}`}
                                alt={post.fields.image.fields.title || ''}
                            />
                        </section>
                    </div>
                );
            })}
        </div>
    );
}

export default PageHome;
