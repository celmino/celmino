import { IMenuItemModel, UIView } from "@tuval/forms";
export interface TreeNodeProps {
    nodeType?: string;
    isLoading?: boolean;
    isSelected?: boolean;
    level?: number;
    title?: string;
    titleChanged?: (title: string) => void;
    isEditing?: boolean;
    editingChanged?: (isEditing: boolean) => void;
    menuModel?: IMenuItemModel[];
    subNode?: (nodeType: string) => UIView;
    iconName?: string;
    requestIcon?: (nodeType: string, selected: boolean, expanded: boolean) => UIView;
    requestNavigation?: () => void;
    requestMenu?: (nodeType: string) => IMenuItemModel[];
}
export declare const TreeNode: (treeNodeProps: TreeNodeProps) => import("@tuval/forms").UIViewBuilderClass;