import {
    Button, ForEach, FormBuilder, Fragment, HStack, Heading, Icon, Icons, Loader,
    LoaderSizes, MenuButton, OptionsContext, Spacer, Spinner, SvgIcon, Text, UIController, UIView, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading, cTrailing, cVertical, useEffect, useNavigate, useParams, useState
} from '@tuval/forms';

import { LeftSideMenuView } from './views/WorkspaceTree';
import { useGetWorkspaces } from '@celmino/workprotocol';
import { useSessionService } from '@realmocean/services';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { AddSpaceDialog, SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { DynoDialog } from '@realmocean/ui';
import { getAppletId, getDocumentId, getListId, getViewId, isAppletOnly, isAppletSettings } from './utils';
import { Query, useCreateDocument, useGetDocument, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
import { useLocalStorageState } from './views/localStorageState';
import { TextField, Text as VibeText } from '@realmocean/vibe';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { AddListDialog } from './dialogs/AddListDialog';
import { SelectOpaDialog } from './dialogs/SelectOpaDialog';
import { opas } from './Opas';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { AddWhiteboardDialog } from './dialogs/AddWhiteboardDialog';
import { AddBoardDialog } from './dialogs/AddBoardDialog';
import React from 'react';
import { BoardIcon, CalendarIcon, FeedIcon, ListIcon, ReportIcon, TableIcon, TimelineIcon } from './resources/Icons';
import { SelectAppletDialog } from '@celmino/ui';


const subNodes = (TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected) => UIViewBuilder(() => {

    const { documents: items, isLoading } = useListDocuments(workspaceId, appletId, 'wm_tree', [
        Query.equal('parent', parentId)
    ]);


    const navigate = useNavigate();

    return (
        VStack({ alignment: cTopLeading })(
            ...ForEach(items)(item =>
                item.type === 'applet' ? HStack({ alignment: cLeading })(
                    UIViewBuilder(() => {
                        const { document: applet, isLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: item.$id })
                        return (
                            isLoading ? Fragment(): 
                            UIWidget(applet['opa'])
                                .config({
                                    ...(useParams() || {}),
                                    appletId: applet.$id
                                })
                        )
                    })


                ).paddingLeft(`${20 * level}px`) :
                    TreeNode({
                        title: item.name,
                        level: level,
                        nodeType: item.type,
                        isSelected: getListId() === item.$id || getDocumentId() === item.$id || getViewId() === item.$id,
                        subNode: (nodeType) => subNodes(TreeNode, level + 1, nodeType, item.$id, workspaceId, appletId, onItemSelected),
                        requestIcon: (nodeType, selected, expanded) => {

                            switch (nodeType) {
                                case 'list':
                                    return Icon(SvgIcon('cu3-icon-sidebarList', selected ? '#7b68ee' : '#151719', '18px', '18px')).foregroundColor('#7C828D');
                                case 'board':
                                    return Icon(BoardIcon).foregroundColor('#7C828D');
                                case 'folder':
                                    return Icon(expanded ? SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px') : SvgIcon('cu3-icon-sidebarFolder', '#151719', '18px', '18px')).foregroundColor('#7C828D');

                                default:
                                    return (
                                        Icon(SvgIcon('cu3-icon-sidebarDoc', selected ? '#7b68ee' : '#151719', '18px', '18px'))
                                    )
                            }


                        },
                        requestNavigation: () => {
                            if (onItemSelected == null) {
                                switch (item.type) {
                                    case 'folder':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/folder/${item.$id}`);
                                        break;
                                    case 'list':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${item.$id}`);
                                        break;
                                    case 'board':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${item.parent}/view/${item.$id}`);
                                        break;
                                    case 'document':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/document/${item.$id}`);
                                        break;
                                    case 'whiteboard':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/whiteboard/${item.$id}`);
                                        break;

                                }
                            } else {

                                onItemSelected({
                                    workspaceId: workspaceId,
                                    appletId: appletId,
                                    item
                                })
                            }
                        },
                        requestMenu: () => {
                            switch (item.type) {
                                case 'folder':
                                    return [
                                        {
                                            title: 'List',
                                            icon: SvgIcon('cu3-icon-sidebarList', '#151719', '18px', '18px'),
                                            onClick: () => DynoDialog.Show(AddListDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            type: 'Divider'
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
                                        },
                                        {
                                            type: 'Divider'
                                        },
                                        {
                                            title: 'Folder',
                                            icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                            onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                    ]
                                case 'list':
                                    return [
                                        {
                                            title: 'Add view',
                                            type: 'Title'
                                        },
                                        {
                                            title: 'Table',
                                            icon: Icon(TableIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddListDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },

                                        {
                                            title: 'Board',
                                            icon: Icon(BoardIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddBoardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'List',
                                            icon: Icon(ListIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Timeline',
                                            icon: Icon(TimelineIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Calendar',
                                            icon: Icon(CalendarIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Report',
                                            icon: Icon(ReportIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Feed',
                                            icon: Icon(FeedIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            type: 'Divider'
                                        },
                                        {
                                            title: 'Folder',
                                            icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                            onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                    ]
                            }

                            return null;
                        }

                    })

            )
        )
    )

})

export class WorkspaceTreeWidgetController extends UIController {

    public override LoadView(): UIView {

        const navigate = useNavigate();

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { workspaceId, appletId, onItemSelected } = this.props.config || {};


        const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();

        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })
        const { updateDocument } = useUpdateDocument(workspaceId);

        const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'wm_tree');

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
                        requestMenu: () => {
                            return [
                                /*  {
                                     title: 'Add items',
                                     type: 'Title'
                                 }, */
                                {
                                    title: 'List',
                                    icon: SvgIcon('cu3-icon-sidebarList', '#151719', '18px', '18px'),
                                    onClick: () => DynoDialog.Show(AddListDialog(workspaceId, appletId, '-1', '/'))
                                },
                                {
                                    type: 'Divider'
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
                                },
                                {
                                    type: 'Divider'
                                },
                                {
                                    title: 'Folder',
                                    icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                    onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, '-1', '/'))
                                },
                                {
                                    title: 'Smart Folder',
                                    icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                    onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, '-1', '/'))
                                },
                                {
                                    title: 'Applet',
                                    icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                    onClick: () => {
                                        SelectAppletDialog.Show(workspaceId, appletId).then((applet) => {
                                            createTreeItem({
                                                documentId: applet.$id,
                                                data: {
                                                    name: applet.name,
                                                    path: "/",
                                                    parent: '-1',
                                                    type: 'applet'
                                                }
                                            }, () => void 0)
                                        });
                                    }
                                },



                            ]


                        },

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