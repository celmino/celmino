import { DynoDialog } from "@realmocean/ui";
import { SvgIcon } from "@tuval/forms";
import { AddDocumentDialog } from "./dialogs/AddDocumentDialog";
import { AddFolderDialog } from "./dialogs/AddFolderDialog";
import { SelectOpaDialog } from "./dialogs/SelectOpaDialog";
import { opas } from "./Opas";


export const ContextMenu = (workspaceId: string, appletId: string, parent = '-1', path = '/') => [

    {
        title: 'Folder',
        icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, parent, path))
    },
    {
        title: 'Document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.editorjs'))
    },
    {
        title: 'Wiki document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'wiki'))
    },
    {
        title: 'Word document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'word'))
    },
    {
        title: 'Spreadsheet',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.spreadsheet'))
    },
    {
        title: 'Google sheets',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.google-sheets-embedded'))
    },
    {
        title: 'Google sheets',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.google-sheets-embedded'))
    },
    {
        type: 'Divider'
    },
    {
        title: 'More Applets',
        icon: SvgIcon('svg-sprite-activity-template-merged'),
        onClick: () => SelectOpaDialog.Show(appletId, 'applet', opas).then((applet) => {

            // setNewApplet(applet);
        })
    },
]


export const EditContextMenu = (workspaceId: string, appletId: string, parent = '-1', path = '/') => [

    {
        title: 'Rename',
        icon: SvgIcon('svg-sprite-global__edit', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, parent, path))
    },
    {
        title: 'Document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.editorjs'))
    },
    {
        title: 'Wiki document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'wiki'))
    },
    {
        title: 'Word document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'word'))
    },
    {
        title: 'Spreadsheet',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.spreadsheet'))
    },
    {
        title: 'Google sheets',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.google-sheets-embedded'))
    },
    {
        title: 'Google sheets',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.google-sheets-embedded'))
    },
    {
        type: 'Divider'
    },
    {
        title: 'More Applets',
        icon: SvgIcon('svg-sprite-activity-template-merged'),
        onClick: () => SelectOpaDialog.Show(appletId, 'applet', opas).then((applet) => {

            // setNewApplet(applet);
        })
    },
]