/// <reference types="react" />
import { TDDocument, TldrawProps } from '@tldraw/tldraw';
interface EditorProps {
    id?: string;
}
export declare const testDoc: TDDocument;
export declare const Editor: ({ id, document, ...rest }: EditorProps & Partial<TldrawProps>) => JSX.Element;
export {};
