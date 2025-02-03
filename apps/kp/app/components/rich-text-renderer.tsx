import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const richTextRender = (content: Document) => {
    return documentToReactComponents(content);
};
