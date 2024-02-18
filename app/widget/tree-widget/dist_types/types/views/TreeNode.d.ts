import { IMenuItemModel, UIView } from "@tuval/forms";
export interface TreeNodeProps {
    nodeType?: string;
    isLoading?: boolean;
    isSelected?: boolean;
    level?: number;
    title?: string | UIView;
    titleChanged?: (title: string) => void;
    isEditing?: boolean;
    editingChanged?: (isEditing: boolean) => void;
    menuModel?: IMenuItemModel[];
    subNode?: (nodeType: string) => UIView;
    iconName?: string;
    iconCategory?: string;
    requestIcon?: (nodeType: string, selected: boolean, expanded: boolean) => UIView;
    requestNavigation?: () => void;
    requestMenu?: (nodeType: string) => IMenuItemModel[];
    requestEditMenu?: (nodeType: string) => IMenuItemModel[];
}
export declare const TreeNode: (treeNodeProps: TreeNodeProps) => import("@tuval/forms").UIViewBuilderClass;
