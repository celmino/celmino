import type { TDAsset, TDBinding, TDShape, TDUser, TldrawApp } from '@tldraw/tldraw';
export declare function useMultiplayerState(roomId: string): {
    onUndo: () => void;
    onRedo: () => void;
    onMount: (app: TldrawApp) => void;
    onSessionStart: () => void;
    onSessionEnd: () => void;
    onChangePage: (app: TldrawApp, shapes: Record<string, TDShape | undefined>, bindings: Record<string, TDBinding | undefined>, assets: Record<string, TDAsset | undefined>) => void;
    onChangePresence: (app: TldrawApp, user: TDUser) => void;
    error: Error;
    loading: boolean;
};
