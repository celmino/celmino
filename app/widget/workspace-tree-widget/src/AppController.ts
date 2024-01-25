import {
    Button, ForEach, FormBuilder, Fragment, HStack, Heading, Icon, Icons, Loader,
    LoaderSizes, MenuButton, OptionsContext, Spacer, Spinner, SvgIcon, Text, UIController, UIView, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading, cTrailing, cVertical, useEffect, useNavigate, useState
} from '@tuval/forms';

import { LeftSideMenuView } from './views/WorkspaceTree';
import { useGetWorkspaces } from '@celmino/workprotocol';
import { useSessionService } from '@realmocean/services';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { AddSpaceDialog, SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { DynoDialog } from '@realmocean/ui';
import { getAppletId, getDocumentId, getListId } from './utils';
import { Query, useGetDocument, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
import { useLocalStorageState } from './views/localStorageState';
import { TextField, Text as VibeText } from '@realmocean/vibe';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { AddListDialog } from './dialogs/AddListDialog';
import { SelectOpaDialog } from './dialogs/SelectOpaDialog';
import { opas } from './Opas';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { AddWhiteboardDialog } from './dialogs/AddWhiteboardDialog';


const subNodes = (TreeNode, level, nodeType, parentId, workspaceId, appletId) => UIViewBuilder(() => {

    const { documents: items, isLoading } = useListDocuments(workspaceId, appletId, 'wm_tree', [
        Query.equal('parent', parentId)
    ]);
    const navigate = useNavigate();

    return (
        VStack({alignment:cTopLeading})(
            ...ForEach(items)(item =>
                TreeNode({
                    title: item.name,
                    level: level,
                    nodeType: item.type,
                    isSelected: getListId() === item.$id || getDocumentId() === item.$id,
                    subNode: (nodeType) => subNodes(TreeNode, level + 1, nodeType, item.$id, workspaceId, appletId),
                    requestIcon: (nodeType, selected, expanded) => {
                        switch (nodeType) {
                            case 'list':
                                return Icon(SvgIcon('cu3-icon-sidebarList', selected ? '#7b68ee' : '#151719', '18px', '18px')).foregroundColor('#7C828D');
                            case 'folder':
                                return Icon(expanded ? SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px') : SvgIcon('cu3-icon-sidebarFolder', '#151719', '18px', '18px')).foregroundColor('#7C828D');

                            default:
                                return (
                                    Icon(SvgIcon('cu3-icon-sidebarDoc', selected ? '#7b68ee' : '#151719', '18px', '18px'))
                                )
                        }

                    },
                    requestNavigation: () => {
                        switch (item.type) {
                            case 'folder':
                                navigate(`/app/workspace/${workspaceId}/applet/${appletId}/folder/${item.$id}`);
                                break;
                            case 'list':
                                navigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${item.$id}`);
                                break;
                            case 'document':
                                navigate(`/app/workspace/${workspaceId}/applet/${appletId}/document/${item.$id}`);
                                break;
                            case 'whiteboard':
                                navigate(`/app/workspace/${workspaceId}/applet/${appletId}/whiteboard/${item.$id}`);
                                break;

                        }
                    },
                    requestMenu: () => {
                        switch (item.type) {
                            case 'folder':
                                return [

                                    {
                                        title: 'Folder',
                                        icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                        onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'List',
                                        icon: SvgIcon('cu3-icon-sidebarList', '#151719', '18px', '18px'),
                                        onClick: () => DynoDialog.Show(AddListDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Document',
                                        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
                                        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Whiteboard',
                                        icon: SvgIcon('cu3-icon-sidebarWhiteboards', '#151719', '18px', '18px'),
                                        onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    }
                                ]
                        }


                    }

                })

            )
        )
    )
})

export class MyTestController extends UIController {

    public override LoadView(): UIView {

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { selectedItem, team_id, workspaceId, folder_id, appletId, showAllWorkspaces, opas, folder_menu, app_id } = this.props.config || {};
        const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();


        /*     const { document: list, isLoading: isListLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: appletId,
                collectionId: 'wm_lists',
                documentId: listId
            }, { enabled: listId != null }); */



        /*  useEffect(() => {
             if (list! + null) {
                 setExpanded(true);
             }
         }, []); */

        // const [expanded, setExpanded] = useLocalStorageState('work_management_tree', false);
        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })

        return (
            isAppletLoading ? Spinner() :
                UIWidget('com.celmino.widget.applet-tree')
                    .config({
                        workspaceId,
                        appletId,
                        appletName: applet.name,
                        subNodes,
                        requestMenu: () => {
                            return [
                                {
                                    title: 'Add items',
                                    type: 'Title'
                                },
                                {
                                    title: 'Folder',
                                    icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                    onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, '-1', '/'))
                                },
                                {
                                    title: 'List',
                                    icon: SvgIcon('cu3-icon-sidebarList', '#151719', '18px', '18px'),
                                    onClick: () => DynoDialog.Show(AddListDialog(workspaceId, appletId, '-1', '/'))
                                },
                                {
                                    title: 'Document',
                                    icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
                                    onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, '-1', '/'))
                                },
                                {
                                    title: 'Whiteboard',
                                    icon: SvgIcon('cu3-icon-sidebarWhiteboards', '#151719', '18px', '18px'),
                                    onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, '-1', '/'))
                                }
                            ]


                        }

                    })
        )
    }
}

FormBuilder.injectAction('saveSpace', SaveSpaceAction);