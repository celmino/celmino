import { useUpdateDocument } from "@realmocean/sdk";
import { DynoDialog } from "@realmocean/ui";
import {
    Fragment, HStack, IMenuItemModel, Icon, Icons, Loader, LoaderSizes, MenuButton, Spacer, SvgIcon, TextField, UIView, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading,
    cTrailing, cVertical, useState
} from "@tuval/forms";
import { AddDocumentDialog } from "../dialogs/AddDocumentDialog";
import { AddFolderDialog } from "../dialogs/AddFolderDialog";
import { WorkbenchIcons } from "./WorkbenchIcons";
import { LeftSideMenuView } from "./WorkspaceTree";
import { Text } from "@realmocean/vibe";
import { is } from "@tuval/core";

export interface TreeNodeProps {
    nodeType?: string;
    isLoading?: boolean;
    isSelected?: boolean;
    level?: number;
    // isExpand?: boolean;
    // expandChanged?: (isExpand: boolean) => void;
    title?: string;
    titleChanged?: (title: string) => void;
    isEditing?: boolean;
    editingChanged?: (isEditing: boolean) => void;
    menuModel?: IMenuItemModel[];
    subNode?: (nodeType: string) => UIView;
    iconName?: string;
    requestIcon?: (nodeType: string, selected: boolean, expanded: boolean) => UIView;
    requestNavigation?: () => void;

}
export const TreeNode = (treeNodeProps: TreeNodeProps) => UIViewBuilder(() => {
    const { isLoading = false, isEditing = false, isSelected = false, title = '', level = 0,
        menuModel = [], subNode = () => Fragment(), nodeType = 'root',
        titleChanged = () => void 0, editingChanged = () => void 0,
        iconName = '', requestIcon = () => void 0,
        requestNavigation = () => void 0 } = treeNodeProps;

    const [expanded, setExpanded] = useState(false);

    return (
        VStack({ alignment: cTopLeading })(
            HStack({ alignment: cLeading, spacing: 2 })(
                HStack(
                    HStack(
                        isLoading ? Loader().size(LoaderSizes.XS) :
                            Icon(WorkbenchIcons.CaretDown1).transform(expanded ? 'rotate(90deg)' : '')
                                .transition('transform .12s ease-in-out')
                    )
                        .position('absolute')
                        .transition('opacity .12s ease-in-out')
                        .foregroundColor('rgba(109,122,131,0.9)')
                        .allWidth(20).allHeight(20).cursor('pointer')
                        //.visibility(`var(--display-caret)`)
                        .opacity(`var(--opacity-caret)`),
                    HStack(
                        is.nullOrEmpty(iconName) ? requestIcon(nodeType, isSelected, expanded) /* Icon(WorkbenchIcons.DocIcon2) */ :
                            UIWidget("com.tuvalsoft.widget.icons")
                                .config({
                                    readonly: true,
                                    selectedIcon: iconName,
                                    selectedCategory: 'Icons',
                                    color: 'white',
                                    backgroundColor: '#40BC86',
                                    width: 20,
                                    height: 20,
                                    padding: 1
                                })
                    )
                        .transition('opacity .12s ease-in-out')
                        .position('absolute')
                        //.background('#FCE8E8')
                        .allWidth(18).allHeight(18)
                        .cornerRadius(5)
                        //.visibility('var(--display-icon)')
                        .opacity('var(--opacity-icon)'),

                ).allWidth(30).allHeight(30)
                    .transition('transform .12s ease-in-out')
                    .onClick(() => {
                        setExpanded(!expanded);
                    }),

                // Title
                isEditing ? UIViewBuilder(() => {

                    const [newTitle, setNewTitle] = useState();
                    //  const { updateDocument } = useUpdateDocument(workspaceId);
                    return (
                        HStack(
                            TextField()
                                .fontSize(16)
                                .fontWeight('500')
                                .padding(0)
                                .value(newTitle)
                                .onChange((value) => setNewTitle(value))
                                .onBlur(() => {
                                    if (title !== newTitle) {
                                        titleChanged(newTitle)
                                    }
                                    editingChanged(false);
                                })
                        )
                            .height()
                            .onClickAway(() => {
                                if (title !== newTitle) {
                                    titleChanged(newTitle)
                                    /*  updateDocument({
                                         databaseId: 'workspace',
                                         collectionId: 'applets',
                                         documentId: appletId,
                                         data: {
                                             name: newTitle
                                         }
                                     }); */
                                }
                                editingChanged(false);
                                //setIsEditing(false);
                            })

                    )
                })
                    :

                    HStack({ alignment: cLeading, spacing: 5 })(

                        HStack({ alignment: cLeading })(
                            Text(title)
                                .fontWeight(isSelected ? '500' : '400')
                                .fontSize(nodeType === 'root' ? 16 : 14)
                                .foregroundColor(isSelected ? '#7b68ee' : '#151719')
                                .lineHeight(22)
                        )
                            //.width('calc(100% - 40px)')
                            .height(32)
                    )
                        .onClick(() => {
                            requestNavigation();
                        })
                        .overflow('hidden')
                        .height(),
                Spacer(),
                HStack({ alignment: cTrailing })(
                    MenuButton()
                        .model(menuModel)
                        .icon(Icons.Add)
                )
                    .onClick((e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    })

                    .width(64).height(32).padding(cHorizontal, 5)
                    .display('var(--show-space-action-buttons)'),
            )
                .transition('transform .12s ease-in-out')
                //.width('calc(100% - 0px)')
                .transform('translate3d(0px, 0, 0)')
                .fontWeight('500')
                .allHeight(37).padding(5)
                .padding(cVertical, isEditing ? 0 : 5)
                .paddingLeft(`${20 * level}px`)
                .background(isSelected ? '#E6EDFE' : '')
                .cornerRadius(6)
                .variable('--show-space-action-buttons', { default: 'none', hover: isEditing ? 'none' : 'flex' })
                .variable(`--display-caret`, { default: 'hidden', hover: 'visible' })
                .variable(`--display-icon`, { default: 'visible', hover: 'hidden' })
                .variable(`--opacity-caret`, { default: '0', hover: '1' })
                .variable(`--opacity-icon`, { default: '1', hover: '0' })

            ,
            expanded ?
                HStack(
                    subNode(nodeType)
                )
                    .height() : Fragment()
        ).height()
    )
})
