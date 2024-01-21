import {
    Button, FormBuilder, Fragment, HStack, Heading, Icon, Icons, Loader,
    LoaderSizes, MenuButton, OptionsContext, Spacer, Spinner, SvgIcon, Text, UIController, UIView, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading, cTrailing, cVertical, useEffect, useState
} from '@tuval/forms';

import { LeftSideMenuView } from './views/WorkspaceTree';
import { useGetWorkspaces } from '@celmino/workprotocol';
import { useSessionService } from '@realmocean/services';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { AddSpaceDialog, SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { DynoDialog } from '@realmocean/ui';
import { getAppletId, getListId } from './utils';
import { useGetDocument, useUpdateDocument } from '@realmocean/sdk';
import { useLocalStorageState } from './views/localStorageState';
import { TextField, Text as VibeText } from '@realmocean/vibe';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { AddListDialog } from './dialogs/AddListDialog';



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
                                            title: 'Table',
                                            icon: WorkbenchIcons.TableIcon,
                                            onClick: () => {
                                                /* createDocument({
                                                    data: {}
                                                }, () => alert('created')) */
                                                //DynoDialog.Show(AddFolderDialog(space.$id))
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Grid',
                                            icon: WorkbenchIcons.GridIcon,
                                            onClick: () => {
                                                /* createDocument({

                                                    data: {}
                                                }, () => alert('created')) */
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Board',
                                            icon: WorkbenchIcons.BoardIcon,
                                            onClick: () => {

                                                /* createDocument({

                                                    data: {}
                                                }, () => alert('created')) */
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'List',
                                            icon: WorkbenchIcons.ListIcon,
                                            onClick: () => {
                                                DynoDialog.Show(AddListDialog(workspaceId, appletId, '-1', `/`))
                                                // DynoDialog.Show(AddListDialog(workspaceId, appletId, space.$id, `${space.path}/${space.$id}`))
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Timeline',
                                            icon: WorkbenchIcons.TimelineIcon,
                                            onClick: () => {

                                                /*  createDocument({
 
                                                     data: {}
                                                 }, () => alert('created')) */
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Calendar',
                                            icon: WorkbenchIcons.CalendarIcon,
                                            onClick: () => {

                                                /*  createDocument({
 
                                                     data: {}
                                                 }, () => alert('created')) */
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Report',
                                            icon: WorkbenchIcons.ReportIcon,
                                            onClick: () => {

                                                /*   createDocument({
  
                                                      data: {}
                                                  }, () => alert('created')) */
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Feed',
                                            icon: WorkbenchIcons.FeedIcon,
                                            onClick: () => {


                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Map',
                                            icon: WorkbenchIcons.MapIcon,
                                            onClick: () => {

                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            type: 'Divider'
                                        },
                                        {
                                            title: 'Document',
                                            icon: WorkbenchIcons.DocumentIcon,
                                            onClick: () => {
                                                // DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, space.$id, `/${space.$id}`))
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Whiteboard',
                                            icon: WorkbenchIcons.WhiteboardIcon1,
                                            onClick: () => {

                                                // DynoDialog.Show(AddFolderDialog(space.$id))
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },
                                        {
                                            title: 'Form',
                                            icon: WorkbenchIcons.FormIcon1,
                                            onClick: () => {

                                                // DynoDialog.Show(AddFolderDialog(space.$id))
                                            }
                                            /* .then(() => {
                                                controller.InvalidateQuerie('space-folders')
                                            }) */
                                        },

                                        {
                                            type: 'Divider'
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
                                        },

                                        {
                                            title: 'More Applets',
                                            icon: SvgIcon('svg-sprite-activity-template-merged'),
                                            /*  onClick: () => SelectOpaDialog.Show(team?.id, spaceItem.id, null, opas).then((applet) => {
             
                                             }) */
                                        },
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
                            .variable('--show-space-action-buttons', { default: 'none', hover: 'flex' })

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