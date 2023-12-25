import { TldrawApp } from '@tldraw/tldraw';
export declare function useMultiplayerAssets(): {
    onAssetCreate: (app: TldrawApp, file: File, id: string) => Promise<string | false>;
    onAssetDelete: (app: TldrawApp, id: string) => Promise<boolean>;
};
