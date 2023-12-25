/// <reference types="react" />
import type { EnsureJson, LiveMap, LiveObject } from '@liveblocks/client';
import type { TDAsset, TDBinding, TDDocument, TDShape, TDUser } from '@tldraw/tldraw';
type Presence = {
    id?: string;
    user: EnsureJson<TDUser>;
};
export type Storage = {
    version: number;
    doc: LiveObject<{
        uuid: string;
        document: EnsureJson<TDDocument>;
        migrated?: boolean;
    }>;
    shapes: LiveMap<string, EnsureJson<TDShape>>;
    bindings: LiveMap<string, EnsureJson<TDBinding>>;
    assets: LiveMap<string, EnsureJson<TDAsset>>;
};
declare const RoomProvider: (props: {
    id: string;
    children: import("react").ReactNode;
    shouldInitiallyConnect?: boolean;
    unstable_batchedUpdates?: (cb: () => void) => void;
    initialPresence: Presence | ((roomId: string) => Presence);
    initialStorage?: Storage | ((roomId: string) => Storage);
}) => JSX.Element, useHistory: () => import("@liveblocks/core").History, useRedo: () => () => void, useUndo: () => () => void, useRoom: () => import("@liveblocks/core").Room<Presence, Storage, import("@liveblocks/core").BaseUserMeta, never>, useUpdateMyPresence: () => (patch: Partial<Presence>, options?: {
    addToHistory: boolean;
}) => void;
export { RoomProvider, useHistory, useRedo, useUndo, useRoom, useUpdateMyPresence };
