import {
    ForEach,
    FormBuilder,
    Icon,
    OptionsContext,
    Spinner, SvgIcon,
    UIController, UIView, UIViewBuilder,
    VStack,
    useEffect, useNavigate, useState
} from '@tuval/forms';

import { Query, useGetDocument, useListDocuments } from '@realmocean/sdk';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { getAppletId, getDocumentId, getListId } from './utils';
import { TreeNode } from './views/TreeNode';


const subNodes = (level, nodeType, parentId, workspaceId, appletId) => UIViewBuilder(() => {

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
                    subNode: (nodeType) => subNodes(level + 1, nodeType, item.$id, workspaceId, appletId),
                    requestIcon: (nodeType, selected, expanded) => {
                        switch (nodeType) {
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
                            case 'document':
                                navigate(`/app/workspace/${workspaceId}/applet/${appletId}/document/${item.$id}`);
                                break;

                        }
                    }

                })

            )
        )
    )
})

export class MyTestController extends UIController {

    public override LoadView(): UIView {


        const { workspaceId, appletId, appletName, subNodes,requestMenu,requestEditMenu, requestNavigation, isEditing, editingChanged, titleChanged, isSelected , iconName, iconCategory} = this.props.config || {};




        // const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })

        return (
            OptionsContext(() => (
                TreeNode({
                    title: appletName,
                    isSelected,
                    requestMenu:requestMenu,
                    requestEditMenu,
                    requestNavigation,
                    isEditing:isEditing,
                    editingChanged,
                    titleChanged,
                    iconName,
                    iconCategory,
                    //isExpand: expanded,
                    //expandChanged: setExpanded,
                    subNode: (nodeType) => (
                        subNodes(TreeNode, 1, nodeType, '-1', workspaceId, appletId)
                    )
                })
            ))
                .options({
                    ...(this.props.config || {})
                })
        )
    }
}

FormBuilder.injectAction('saveSpace', SaveSpaceAction);