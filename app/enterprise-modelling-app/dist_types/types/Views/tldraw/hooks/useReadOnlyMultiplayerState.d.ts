import type { TDUser, TldrawApp } from '@tldraw/tldraw';
export declare function useReadOnlyMultiplayerState(roomId: string): {
    onUndo: () => void;
    onRedo: () => void;
    onMount: (app: TldrawApp) => void;
    onChangePresence: (app: TldrawApp, user: TDUser) => void;
    error: Error;
    loading: boolean;
};
