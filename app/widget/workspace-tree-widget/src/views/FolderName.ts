import { HStack, Heading, Icon, Icons, Loader, LoaderSizes, MenuButton, ShowSuccessToast, ShowToast, Spacer, SvgIcon, TextField, UIViewBuilder, WorkProtocol, cHorizontal, cLeading, cTrailing, useOptions, useParams, useProtocol, useState } from "@tuval/forms";
import copy from "copy-to-clipboard";
import { SelectOpaDialog } from "../dialogs/SelectOpaDialog";
import { WorkbenchIcons } from "./WorkbenchIcons";
import { is } from "@tuval/core";
import { DynoDialog } from '@realmocean/ui'
import { AddFolderDialog } from "../dialogs/AddFolderDialog";
import { opas } from "../Opas";
import { Query, useCreateDocument } from "@realmocean/sdk";
import { AddListDialog } from "../dialogs/AddListDialog";
import { AddDocumentDialog } from "../dialogs/AddDocumentDialog";


export const FolderName = (parent: any, folder: any, isOpen: boolean, isLoading: boolean,
    onClickCallback: Function) => UIViewBuilder(() => {

        const { folder_id } = useParams();
        const { workspaceId } = useOptions();

        let selected = false;
        const [mode, setMode] = useState('readonly');
        const [name, setName] = useState(folder?.name);
        const [newName, setNewName] = useState(folder?.name);

        const { createDocument: createList } = useCreateDocument(workspaceId, 'work_management', 'wm_lists');

        return (
            mode === 'readonly' ?
                HStack({ alignment: cLeading })(
                    HStack(
                        HStack(
                            isLoading ? Loader().size(LoaderSizes.XS) :
                                Icon(WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')
                        ).width().height().display('var(--display-caret)'),
                        HStack(
                            Icon(isOpen ? SvgIcon('svg-sprite-cu3-folder-sidebar_opened', '#7C828D', '18px', '18px') : SvgIcon('svg-sprite-cu3-folder-sidebar', '#7C828D', '18px', '18px')).foregroundColor('#7C828D'),
                        ).padding(2).width(20).height(20).cornerRadius(5).display('var(--display-icon)')
                    ).width(20).height(20),

                    Heading(folder.name).h6().ellipsisMaxLines(1).ellipsis(true)
                        .fontSize(14).fontWeight('400')
                        .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')

                        .foregroundColor(selected ? '#7b68ee' : '#151719')
                        .borderBottom({ hover: '1px dashed #2A2D34' }),
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
                                        /*  createApplet({
                                             name: 'New table',
                                             parentId: folder.$id,
                                             parentType: 'workspace',
                                             opa: 'com.celmino.applet.table',
                                             icon: 'TableIcon',
                                             color: '#40BC86',
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
                                        /*  createApplet({
                                             name: 'New grid',
                                             parentId: folder.$id,
                                             parentType: 'workspace',
                                             opa: 'com.celmino.applet.grid',
                                             icon: 'GridIcon',
                                             color: '#40BC86',
                                         }, () => console.log('created')) */
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'Board',
                                    icon: WorkbenchIcons.BoardIcon,
                                    onClick: () => {

                                        /*  createApplet({
                                             name: 'New board',
                                             parentId: folder.$id,
                                             parentType: 'workspace',
                                             opa: 'com.celmino.applet.board',
                                             icon: 'BoardIcon',
                                             color: '#40BC86',
                                         }, () => console.log('created')) */
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'List',
                                    icon: WorkbenchIcons.ListIcon,
                                    onClick: () => {

                                        DynoDialog.Show(AddListDialog(workspaceId, folder.$id, `${folder.path}/${folder.$id}`))
                                       /*  createList({
                                            data: {
                                                name: 'New list',
                                                parent: folder.$id,
                                            }
                                        }, () => console.log('created')) */
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'Timeline',
                                    icon: WorkbenchIcons.TimelineIcon,
                                    onClick: () => {

                                        /*   createApplet({
                                              name: 'New timeline',
                                              parentId: folder.$id,
                                              parentType: 'workspace',
                                              opa: 'com.celmino.applet.timeline',
                                              icon: 'TimelineIcon',
                                              color: '#40BC86',
                                          }, () => console.log('created')) */
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'Calendar',
                                    icon: WorkbenchIcons.CalendarIcon,
                                    onClick: () => {

                                        /*  createApplet({
                                             name: 'New calendar',
                                             parentId: folder.$id,
                                             parentType: 'workspace',
                                             opa: 'com.celmino.applet.calendar',
                                             icon: 'CalendarIcon',
                                             color: '#40BC86',
                                         }, () => console.log('created')) */
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'Report',
                                    icon: WorkbenchIcons.ReportIcon,
                                    onClick: () => {

                                        /*  createApplet({
                                             name: 'New report',
                                             parentId: folder.$id,
                                             parentType: 'workspace',
                                             opa: 'com.celmino.applet.report',
                                             icon: 'ReportIcon',
                                             color: '#40BC86',
                                         }, () => console.log('created')) */
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'Feed',
                                    icon: WorkbenchIcons.FeedIcon,
                                    onClick: () => {

                                        /*   createApplet({
                                              name: 'New feed',
                                              parentId: folder.$id,
                                              parentType: 'workspace',
                                              opa: 'com.celmino.applet.feed',
                                              icon: 'FeedIcon',
                                              color: '#40BC86',
                                          }, () => console.log('created')) */
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'Map',
                                    icon: WorkbenchIcons.MapIcon,
                                    onClick: () => {

                                        /*   createApplet({
                                              name: 'New map',
                                              parentId: folder.$id,
                                              parentType: 'workspace',
                                              opa: 'com.celmino.applet.map',
                                              icon: 'MapIcon',
                                              color: '#40BC86',
                                          }, () => console.log('created')) */
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
                                        DynoDialog.Show(AddDocumentDialog(workspaceId, folder.$id, `${parent.path}/${parent.$id}`))
                                        /*   createApplet({
                                              name: 'New document',
                                              parentId: folder.$id,
                                              parentType: 'workspace',
                                              opa: 'com.celmino.applet.document',
                                              icon: 'DocumentIcon',
                                              color: '#40BC86',
                                          }, () => console.log('created')) */
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'Whiteboard',
                                    icon: WorkbenchIcons.WhiteboardIcon1,
                                    onClick: () => {

                                        DynoDialog.Show(AddFolderDialog(workspaceId, folder.$id, `${parent.path}/${parent.$id}`))
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },
                                {
                                    title: 'Form',
                                    icon: WorkbenchIcons.FormIcon1,
                                    onClick: () => {

                                        DynoDialog.Show(AddFolderDialog(workspaceId, folder.$id, `${parent.path}/${parent.$id}`))
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

                                        DynoDialog.Show(AddFolderDialog(workspaceId, folder.$id, `${folder.path}/${folder.$id}`))
                                    }
                                    /* .then(() => {
                                        controller.InvalidateQuerie('space-folders')
                                    }) */
                                },

                                {
                                    title: 'More Applets',
                                    icon: SvgIcon('svg-sprite-activity-template-merged'),
                                    onClick: () => SelectOpaDialog.Show(folder.$id, 'folder', opas).then((folder) => {


                                    })
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
                                /*  ...(is.array(folder_menu) ? folder_menu : []), */
                                {
                                    type: 'Divider'
                                },

                                {
                                    title: 'Delete',
                                    icon: SvgIcon('svg-sprite-global__delete', '#bc4841'),
                                    color: '#bc4841',
                                    onClick: () => {
                                        //  DynoDialog.Show(AppletDescriptionDialog(applet.id))
                                    }
                                },
                            ])
                            .icon(Icons.Menu)

                    ).width(64).height(32).padding(cHorizontal, 5)

                        .display('var(--show-folder-action-buttons)')
                        .onClick((e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        })

                )
                    .onClick(() => {
                        onClickCallback();
                    })
                    // .borderLeft(isOpen ? 'solid 1px #7B68EE' : '')
                    .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                    .allHeight(32)
                    .width('calc(100%)')
                    // .padding('0 0 0 20px')
                    .cursor('pointer')
                    .variable('--show-folder-action-buttons', { default: 'none', hover: 'flex' })
                    .variable(`--display-caret`, { default: 'none', hover: 'flex' })
                    .variable(`--display-icon`, { default: 'flex', hover: 'none' })


                :
                HStack({ alignment: cLeading, spacing: 5 })(
                    HStack(
                        Icon(WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')
                    ).width().height().opacity('var(--show-expand-icon)'),
                    Icon(isOpen ? SvgIcon('svg-sprite-cu3-folder-sidebar_opened', '#7C828D') : SvgIcon('svg-sprite-cu3-folder-sidebar', '#7C828D')).foregroundColor('#7C828D'),

                    TextField().value(newName)
                        .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                        .fontSize(13)
                        .height('100%')
                        .padding(0)
                        .border('dashed 1px #AAA')
                        .shadow({ focus: 'none' })
                        .onBlur(() => {
                            /*   if (newName !== name) {
                                  setName(newName);
                                  updateFolder(folder.id, {
                                      name: newName
                                  }, {
                                      onSuccess: () => {
                                          ShowSuccessToast('We successfully rename folder', 'Undo', () => {
                                              updateFolder(folder.id, {
                                                  name: name
                                              }, {
                                                  onSuccess: () => {
                                                    
                                                      setName(name);
                                                      ShowSuccessToast('We successfully undo folder applet')
                                                  }
                                              })
                                          })
                                      }
                                  })
                              } */
                            setMode('readonly');
                        })
                        .onChange((e) => setNewName(e)),
                    /* : Text(list.name)
                        .ellipsisMaxLines(1)
                        .multilineTextAlignment(TextAlignment.leading)
                        .fontSize(13).fontWeight('400').foregroundColor(selectedItem === spaceItem.name ? '#7b68ee' : '#53575e'),*/

                )
                    // .borderLeft(isOpen ? 'solid 1px #7B68EE' : '')
                    .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                    .height(32)
                    .width('calc(100%)')
                    .padding('0 0 0 20px')
                    .cursor('pointer')
        )
    })