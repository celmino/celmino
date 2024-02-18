import {
    HStack, Heading, Icon, Icons,
    Loader,
    LoaderSizes,
    MenuButton,
    ShowToast, Spacer, SvgIcon, TextField, UIViewBuilder,
    UIWidget,
    cHorizontal, cLeading, cTrailing,
    useOptions,
    useState
} from "@tuval/forms";

import { AddFolderDialog } from "../dialogs/AddFolderDialog";
import { WorkbenchIcons } from "./WorkbenchIcons";
//import { FontIcon, FontIcons } from "./FontIcons";
import { Models, Query, useCreateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import copy from "copy-to-clipboard";

import { DynoDialog } from '@realmocean/ui'
import { AddListDialog } from "../dialogs/AddListDialog";
import { AddDocumentDialog } from "../dialogs/AddDocumentDialog";

export function WorkspaceName(space: any, isOpen: boolean, isLoading: boolean, onClickCallback: Function) {
    return (
        UIViewBuilder(() => {

            //  const { workspace_id } = useParams();
            let selected = false;
            const { workspaceId, appletId } = useOptions();
            const [mode, setMode] = useState('readonly');
            const [name, setName] = useState(space?.name);
            const [newName, setNewName] = useState(space?.name);

            const { createDocument } = useCreateDocument(workspaceId, appletId, 'applets');

            return (
                mode === 'readonly' ?
                    HStack({ alignment: cLeading, spacing: 1 })(
                        HStack(
                            HStack(
                                isLoading ? Loader().size(LoaderSizes.XS) :
                                    Icon(WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')
                            ).width().height()
                                .display(`var(--display-caret)`),
                         /*    HStack(
                                isLoading ? Loader().size(LoaderSizes.XS) :
                                    HStack().width(20).height(20).background('#40BC86')
                            ).width().height()
                                .display(`var(--display-icon)`), */

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
                        ).width(20).height(20),

                        Heading(space.name).h6().ellipsis(true)

                            .fontSize(14).fontWeight('400')
                            .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')

                            .foregroundColor(selected ? '#7b68ee' : '#151719'),
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
                                            createDocument({
                                                data: {}
                                            }, () => alert('created'))
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
                                            createDocument({

                                                data: {}
                                            }, () => alert('created'))
                                        }
                                        /* .then(() => {
                                            controller.InvalidateQuerie('space-folders')
                                        }) */
                                    },
                                    {
                                        title: 'Board',
                                        icon: WorkbenchIcons.BoardIcon,
                                        onClick: () => {

                                            createDocument({

                                                data: {}
                                            }, () => alert('created'))
                                        }
                                        /* .then(() => {
                                            controller.InvalidateQuerie('space-folders')
                                        }) */
                                    },
                                    {
                                        title: 'List',
                                        icon: WorkbenchIcons.ListIcon,
                                        onClick: () => {

                                            DynoDialog.Show(AddListDialog(workspaceId,appletId, space.$id, `${space.path}/${space.$id}`))
                                        }
                                        /* .then(() => {
                                            controller.InvalidateQuerie('space-folders')
                                        }) */
                                    },
                                    {
                                        title: 'Timeline',
                                        icon: WorkbenchIcons.TimelineIcon,
                                        onClick: () => {

                                            createDocument({

                                                data: {}
                                            }, () => alert('created'))
                                        }
                                        /* .then(() => {
                                            controller.InvalidateQuerie('space-folders')
                                        }) */
                                    },
                                    {
                                        title: 'Calendar',
                                        icon: WorkbenchIcons.CalendarIcon,
                                        onClick: () => {

                                            createDocument({

                                                data: {}
                                            }, () => alert('created'))
                                        }
                                        /* .then(() => {
                                            controller.InvalidateQuerie('space-folders')
                                        }) */
                                    },
                                    {
                                        title: 'Report',
                                        icon: WorkbenchIcons.ReportIcon,
                                        onClick: () => {

                                            createDocument({

                                                data: {}
                                            }, () => alert('created'))
                                        }
                                        /* .then(() => {
                                            controller.InvalidateQuerie('space-folders')
                                        }) */
                                    },
                                    {
                                        title: 'Feed',
                                        icon: WorkbenchIcons.FeedIcon,
                                        onClick: () => {

                                            createDocument({

                                                data: {}
                                            }, () => alert('created'))
                                        }
                                        /* .then(() => {
                                            controller.InvalidateQuerie('space-folders')
                                        }) */
                                    },
                                    {
                                        title: 'Map',
                                        icon: WorkbenchIcons.MapIcon,
                                        onClick: () => {

                                            createDocument({

                                                data: {}
                                            }, () => alert('created'))
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
                                            DynoDialog.Show(AddDocumentDialog(workspaceId,appletId, space.$id, `/${space.$id}`))
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

                                            DynoDialog.Show(AddFolderDialog(workspaceId,appletId, space.$id, `/${space.$id}`))
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
                                        onClick: () => setMode('edit')
                                    },
                                    {
                                        title: 'Copy link',
                                        icon: SvgIcon('svg-sprite-global__link'),
                                        onClick: () => {
                                            copy(location.href);
                                            ShowToast('Copied to clipboard')
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
                        .onClick(() => {
                            onClickCallback()
                        })

                        // .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                        .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                        .allHeight(32)
                        .width('calc(100%)')
                        //.padding('0 10px')
                        .cursor('pointer')
                        .variable('--show-space-action-buttons', { default: 'none', hover: 'flex' })
                        .variable(`--display-caret`, { default: 'none', hover: 'flex' })
                        .variable(`--display-icon`, { default: 'flex', hover: 'none' })
                    :
                    HStack({ alignment: cLeading, spacing: 5 })(
                        HStack(
                            Icon(WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')
                        ).width().height().opacity('var(--show-space-action-buttons)'),
                        HStack(
                            //FontIcon(FontIcons['Clock'/* spaceItem?.icon */])
                        ).background('#40BC86'/* spaceItem?.color */).padding(2).width(20).height(20).cornerRadius(5),

                    )
                        // .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                        .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                        .allHeight(32)
                        .width('calc(100%)')
                        //.padding('0 10px')
                        .cursor('pointer')
            )
        })
    )

} 
