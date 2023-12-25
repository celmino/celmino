import { TldrawApp } from '@tldraw/tldraw';
export declare function useUploadAssets(): {
    onAssetUpload: (app: TldrawApp, file: File, id: string) => Promise<string | false>;
};
