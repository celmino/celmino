import {
    FormBuilder, Fragment, HStack,
    Icon, Icons, Loader,
    LoaderSizes, MenuButton, OptionsContext, Spacer, Spinner, SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading, cTrailing, cVertical, useEffect, useState
} from '@tuval/forms';

import { useGetDocument, useUpdateDocument } from '@realmocean/sdk';
import { DynoDialog } from '@realmocean/ui';
import { TextField, Text as VibeText } from '@realmocean/vibe';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { getAppletId, getListId } from './utils';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { LeftSideMenuView } from './views/WorkspaceTree';
import { useLocalStorageState } from './views/localStorageState';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';



export class MyTestController extends UIController {

    public override LoadView(): UIView {
        
        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { selectedItem, team_id, workspaceId, folder_id, appletId, showAllWorkspaces, opas, folder_menu, app_id } = this.props.config || {};
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

        const [expanded, setExpanded] = useLocalStorageState('work_management_tree', false);
        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })

        return (
            isAppletLoading ? Spinner() :
                OptionsContext(() => (
                    VStack({ alignment: cTopLeading })(

                        HStack({ alignment: cLeading, spacing: 1 })(
                            HStack(
                                HStack(
                                    isLoading ? Loader().size(LoaderSizes.XS) :
                                        Icon(WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')
                                ).width(20).height(20).cursor('pointer')
                                    .display(`var(--display-caret)`),

                            ).width(20).height(20)
                                .onClick(() => {
                                    setIsOpen(!isOpen);
                                }),

                            // Title
                            isEditing ? UIViewBuilder(() => {

                                const [appletName, setAppletName] = useState(applet.name);
                                const { updateDocument } = useUpdateDocument(workspaceId);
                                return (
                                    HStack(
                                        TextField()
                                            .fontSize(16)
                                            .fontWeight('500')
                                            .padding(0)
                                            .value(appletName)
                                            .onChange((value) => setAppletName(value))
                                            .onBlur(() => {
                                                if (applet.name !== appletName) {
                                                    updateDocument({
                                                        databaseId: 'workspace',
                                                        collectionId: 'applets',
                                                        documentId: appletId,
                                                        data: {
                                                            name: appletName
                                                        }
                                                    });
                                                }
                                                setIsEditing(false);
                                            })
                                    )
                                        .height()
                                        .onClickAway(() => {
                                            if (applet.name !== appletName) {
                                                updateDocument({
                                                    databaseId: 'workspace',
                                                    collectionId: 'applets',
                                                    documentId: appletId,
                                                    data: {
                                                        name: appletName
                                                    }
                                                });
                                            }
                                            setIsEditing(false);
                                        })

                                )
                            })
                                :
                                HStack({ alignment: cLeading, spacing: 5 })(
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
                                    VibeText(applet.name).fontSize(16).foregroundColor('#5a5d62')
                                        //.fontFamily('Figtree, Roboto, Noto Sans Hebrew, Noto Kufi Arabic, Noto Sans JP, sans-serif')

                                        .lineHeight(22)
                                ).height(),

                            /* Spacer(),
                            HStack(
                                Icon(Icons.Add).size(15)
                            ).height(20).width(20)
                                .background('gray')
                                .onClick(() => {
                                    setIsEditing(!isEditing)
                                   
                                }) */
                            Spacer(),
                            HStack({ alignment: cTrailing })(
                                MenuButton()
                                    .model([
                                        {
                                            title: 'Add to space',
                                            type: 'Title'
                                        },

                                      
                                        {
                                            title: 'Document',
                                            icon: WorkbenchIcons.DocumentIcon,
                                            onClick: () => {
                                                DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, '-1', `/`))
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                       
                                        {
                                            title: 'Folder',
                                            icon: WorkbenchIcons.AddFolder,
                                            onClick: () => {

                                                DynoDialog.Show(AddFolderDialog(workspaceId, appletId, '-1', `/`))
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        }

                                    ])
                                    .icon(Icons.Add),
                                MenuButton()
                                    .model([
                                        {
                                            title: 'Space acions',
                                            type: 'Title'
                                        },
                                        {
                                            title: 'Rename',
                                            icon: WorkbenchIcons.Edit,
                                            onClick: () => setIsEditing(true)
                                        },
                                        {
                                            title: 'Copy link',
                                            icon: SvgIcon('svg-sprite-global__link'),
                                            onClick: () => {
                                                /*   copy(location.href);
                                                  ShowToast('Copied to clipboard') */
                                            }
                                        },
                                        {
                                            title: 'Dublicate',
                                            icon: WorkbenchIcons.Copy
                                        },
                                        {
                                            type: 'Divider'
                                        },
                                        {
                                            title: 'Delete',
                                            icon: SvgIcon('svg-sprite-global__delete', '#bc4841'),
                                            color: '#bc4841',
                                            onClick: () => {
                                                // DynoDialog.Show(AppletDescriptionDialog(applet.id))
                                            }
                                        }
                                    ])
                                    .icon(Icons.Menu)

                            )
                                .onClick((e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                })

                                .width(64).height(32).padding(cHorizontal, 5)
                                .display('var(--show-space-action-buttons)'),
                        )
                            .fontWeight('500')
                            .allHeight(37).padding(5).padding(cVertical, isEditing ? 0 : 5)
                            .variable('--show-space-action-buttons', { default: 'none', hover: isEditing ? 'none' : 'flex' })

                        ,
                        isOpen ?
                            HStack(
                                LeftSideMenuView(selectedItem)
                            ).height().paddingLeft('40px') : Fragment()
                    ).height()
                ))
                    .options({
                        ...(this.props.config || {})
                    })
        )
    }
}

FormBuilder.injectAction('saveSpace', SaveSpaceAction);