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

export interface TreeNodeProps {
    isLoading?: boolean;
    isExpand?: boolean;
    expandChanged?: (isExpand: boolean) => void;
    title?: string;
    titleChanged?: (title: string) => void;
    isEditing?: boolean;
    editingChanged?: (isEditing: boolean) => void;
    menuModel?: IMenuItemModel[];
    subNode?: UIView;

}
export const TreeNode = (treeNodeProps: TreeNodeProps) => UIViewBuilder(() => {
    const { isLoading = false, isExpand: isOpen = false, expandChanged = () => void 0, isEditing = false, title = '',
        menuModel = [], subNode = Fragment(),
        titleChanged = () => void 0, editingChanged = () => void 0 } = treeNodeProps;
    return (
        VStack({ alignment: cTopLeading })(
            HStack({ alignment: cLeading, spacing: 1 })(
                HStack(
                    HStack(
                        isLoading ? Loader().size(LoaderSizes.XS) :
                            Icon(WorkbenchIcons.CaretDown1).transform(isOpen ? 'rotate(90deg)' : '')
                                .transition('transform .12s ease-in-out')
                    )
                        .foregroundColor('rgba(109,122,131,0.9)')
                        .width(20).height(20).cursor('pointer')
                        .display(`var(--display-caret)`),
                    HStack(
                        UIWidget("com.tuvalsoft.widget.icons")
                            .config({
                                selectedIcon: 'bookmark',
                                selectedCategory: 'Icons',
                                color: 'white',
                                backgroundColor: '#40BC86',
                                width: 20,
                                height: 20,
                                padding: 1
                            })
                    )
                        //.background('#FCE8E8')
                        .width().height()
                        .cornerRadius(5)
                        .display('var(--display-icon)'),

                ).width(20).height(20)
                    .onClick(() => {
                        expandChanged(!isOpen);
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
                            Text(title).fontSize(16).foregroundColor('#5a5d62')
                                .lineHeight(22)
                        )
                            .width('calc(100% - 40px)')
                            .height(32)
                    )
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
                .width('calc(100% - 0px)')
                .transform('translate3d(0px, 0, 0)')
                .fontWeight('500')
                .allHeight(37).padding(5).padding(cVertical, isEditing ? 0 : 5)
                .variable('--show-space-action-buttons', { default: 'none', hover: isEditing ? 'none' : 'flex' })
                .variable(`--display-caret`, { default: 'none', hover: 'flex' })
                .variable(`--display-icon`, { default: 'flex', hover: 'none' })

            ,
            isOpen ?
                HStack(
                    subNode
                ).height().paddingLeft('40px') : Fragment()
        ).height()
    )
})
