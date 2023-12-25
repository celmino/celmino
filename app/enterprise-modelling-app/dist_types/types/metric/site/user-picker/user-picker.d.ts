/// <reference types="react" />
import { Component } from "preact";
export interface UserPickerProps extends UserPickerState {
    currentUser: {
        name: string;
        email: string;
    };
}
type Role = "Owner" | "Viewer";
interface UserPickerState {
    users: {
        id: string;
        name: string;
        email: string;
        selected: boolean;
        role: Role;
    }[];
    invites: {
        id: string;
        email: string;
        selected: boolean;
        role: Role;
    }[];
    newInvites: {
        email: string;
        role: Role;
        conflict?: boolean;
    }[];
}
export declare function renderUserPicker(elements: Element[], props?: UserPickerProps): void;
export declare class UserPicker extends Component<UserPickerProps, UserPickerState> {
    constructor(props: UserPickerProps);
    render(props: UserPickerProps, state: UserPickerState): JSX.Element;
    onSelectAllToggle: (evt: Event) => void;
    onRoleAllToggle: (evt: Event) => void;
    onUserCheckToggle: (userId: string) => void;
    onInviteCheckToggle: (inviteId: string) => void;
    onInviteClick: (evt: Event) => void;
    onRemoveInvite: (idx: number) => void;
    onNewInviteChange: (evt: Event, idx: number) => void;
}
export {};
