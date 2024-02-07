import {
    ForEach,
    FormBuilder, Fragment, HStack,
    Icon, Icons, Loader,
    LoaderSizes, MenuButton, OptionsContext, Spacer, Spinner, SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading, cTrailing, cVertical, useEffect, useNavigate, useState
} from '@tuval/forms';

import { Query, useGetDocument, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
import { DynoDialog } from '@realmocean/ui';
import { Text, TextField, Text as VibeText } from '@realmocean/vibe';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { getAppletId, getDocumentId, getListId, isAppletOnly, isAppletSettings } from './utils';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { LeftSideMenuView } from './views/WorkspaceTree';
import { useLocalStorageState } from './views/localStorageState';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { ContextMenu, EditContextMenu } from './ContextMenu';


const subNodes = (TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected) => UIViewBuilder(() => {

    const { documents: items, isLoading } = useListDocuments(workspaceId, appletId, 'dm_tree', [
        Query.equal('parent', parentId)
    ]);
    const navigate = useNavigate();



    return (
        VStack(
            ...ForEach(items)(item =>
                TreeNode({
                    title: item.name,
                    level: level,
                    nodeType: item.type,
                    isSelected: getDocumentId() === item.$id,
                    subNode: (nodeType) => subNodes(TreeNode, level + 1, nodeType, item.$id, workspaceId, appletId, onItemSelected),
                    requestIcon: (nodeType, selected, expanded) => {
                        switch (nodeType) {
                            case 'folder':
                                return Icon(expanded ? SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px') : SvgIcon('cu3-icon-sidebarFolder', '#151719', '18px', '18px')).foregroundColor('#7C828D');
                            default:
                                return (
                                    Icon(WorkbenchIcons.DocIcon2).foregroundColor('#7A878F')
                                )
                        }

                    },
                    requestNavigation: () => {
                        if (onItemSelected == null) {
                            switch (item.type) {
                                case 'folder':
                                    navigate(`/app/workspace/${workspaceId}/applet/${appletId}/folder/${item.$id}`);
                                    break;
                                case 'document':
                                    navigate(`/app/workspace/${workspaceId}/applet/${appletId}/document/${item.$id}`);
                                    break;

                            }
                        } else {
                            onItemSelected({
                                workspaceId, appletId, item
                            })
                        }
                    },
                    requestMenu: () => {
                        switch (item.type) {
                            case 'folder':
                                return ContextMenu(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`)
                            case 'document':
                                return ContextMenu(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`)
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
        const { selectedItem, team_id, workspaceId, folder_id, appletId, showAllWorkspaces, opas, folder_menu, app_id, onItemSelected } = this.props.config || {};
        const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();


        const { document: list, isLoading: isListLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_lists',
            documentId: listId
        }, { enabled: listId != null });



        useEffect(() => {
            if (list! + null) {
                setExpanded(true);
            }
        }, []);

        const navigate = useNavigate();

        const [expanded, setExpanded] = useLocalStorageState('work_management_tree', false);
        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })

        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
            isAppletLoading ? Spinner() :
                UIWidget('com.celmino.widget.applet-tree')
                    .config({
                        workspaceId,
                        appletId,
                        appletName: applet.name,
                        iconName: applet.iconName,
                        iconCategory: applet.iconCategory,
                        isEditing: isEditing,
                        isSelected: isAppletSettings(appletId) || isAppletOnly(appletId),
                        editingChanged: (status) => setIsEditing(status),
                        titleChanged: (title) => {
                            updateDocument({
                                databaseId: 'workspace',
                                collectionId: 'applets',
                                documentId: appletId,
                                data: {
                                    name: title
                                }
                            }, () => {
                                updateDocument({
                                    databaseId: 'workspace',
                                    collectionId: 'applets',
                                    documentId: appletId,
                                    data: {
                                        name: title
                                    }
                                })
                            })
                        },
                        subNodes: (TreeNode, level, nodeType, parentId, workspaceId, appletId) => {
                            return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected)
                        },
                        requestMenu: () => ContextMenu(workspaceId, appletId),
                        requestEditMenu: () => [

                            {
                                title: 'Rename',
                                icon: SvgIcon('svg-sprite-global__edit', '#151719', '18px', '18px'),
                                onClick: () => setIsEditing(true)
                            },

                            {
                                title: 'Applet settings',
                                icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                onClick: () => navigate(`/app/workspace/${workspaceId}/applet/${appletId}/settings/general`)
                            }
                        ]

                    })

        )
    }
}

FormBuilder.injectAction('saveSpace', SaveSpaceAction);