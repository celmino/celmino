import { Models, getAppletUrl, useGetDocument } from "@realmocean/sdk";
import { DynoDialog } from '@realmocean/ui';
import {
    Fragment, HStack, Heading, Icon, Icons, MenuButton,
    ShowSuccessToast,
    ShowToast,
    Spacer, SvgIcon, TextField,
    UIViewBuilder,
    UIWidget,
    cHorizontal, cLeading, cTrailing, confirmDialog,
    getAppFullName,
    useNavigate,
    useOptions,
    useParams,
    useState
} from "@tuval/forms";
import copy from 'copy-to-clipboard';
import { opas } from "../Opas";
import { AppletDescriptionDialog } from "../dialogs/AppletDescriptionDialog";
import { SelectOpaDialog } from "../dialogs/SelectOpaDialog";
import { WorkbenchIcons } from "./WorkbenchIcons";
import { getDocumentId, getListId } from "../utils";
import { AddDocumentDialog } from "../dialogs/AddDocumentDialog";
import { is } from "@tuval/core";

export function DocumentName(documentId: string, isOpen: boolean, onClickCallback: Function) {
    const { workspaceId } = useParams();
    const selected = getDocumentId() === documentId;
    const { appletId } = useOptions();

    const { document, isLoading } = useGetDocument({ projectId: workspaceId, databaseId: appletId, collectionId: 'wm_documents', documentId: documentId, queries: [] })


    return (
        isLoading ? Fragment() :
            UIViewBuilder(() => {

                const { access_type } = useParams();
                const { workspaceId } = useOptions();
                const [mode, setMode] = useState('readonly');
                // const [name, setName] = useState(applet?.name);
                const [newName, setNewName] = useState(document?.name);
                const navigate = useNavigate();

                //const { updateAppletName } = useUpdateAppletName();
                // const {applet:_applet} = useGetApplet(applet.$id);

                return (
                    mode === 'readonly' ?
                        //UIRouteLink(team ? `/app/${getAppFullName()}/team/${team.id}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}` : `/app/${getAppFullName()}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}`)(

                        HStack({ alignment: cLeading, spacing: 5 })(
                            HStack({ alignment: cLeading })(
                                HStack(
                                    HStack(
                                        Icon(WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')
                                    ).width().height().display('var(--display-caret)')
                                        .onClick(() => {
                                            onClickCallback();
                                        }),
                                    HStack(
                                        is.nullOrEmpty(document?.icon_name) ? Icon(SvgIcon('cu3-icon-sidebarDoc', selected ? '#7b68ee' : '#151719', '18px', '18px')) /* Icon(WorkbenchIcons.DocIcon2) */ :
                                            UIWidget("com.tuvalsoft.widget.icons")
                                                .config({
                                                    selectedIcon: document?.icon_name,
                                                    selectedCategory: document?.icon_category,
                                                    width: 16,
                                                    height: 16,
                                                    padding: 1
                                                })
                                    ).width().height().display('var(--display-icon)')
                                ).foregroundColor('rgba(109,122,131,0.9)')
                                    //.background('#FCE8E8')
                                    .width().height()
                                    .cornerRadius(5),
                                mode !== 'readonly' ? Fragment() :
                                    HStack({ alignment: cLeading })(
                                        Heading(document.name).h6().ellipsisMaxLines(1).ellipsis(true)
                                            .fontSize(14).fontWeight('400')
                                            .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')
                                            .foregroundColor(selected ? '#7b68ee' : '#151719')
                                    )
                                        .height(32)
                                        .onClick(() => {
                                            //alert(getAppletUrl(access_type, applet.id))

                                            navigate(`/app/workspace/${workspaceId}/applet/com.celmino.applet.workmanagement/document/${document.$id}`);
                                        })

                                ,
                                mode === 'readonly' ? Fragment() :
                                    TextField().value(newName)
                                        .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                                        .fontSize(13)
                                        .height('100%')
                                        .padding(0)
                                        .border('dashed 1px #AAA')
                                        .shadow({ focus: 'none' })
                                        .onBlur(() => {

                                            /* updateAppletName({
                                                appletId: applet.$id,
                                                name: newName
                                            }) */

                                            setMode('readonly');
                                        })
                                        .onChange((e) => setNewName(e))
                            )
                                .overflow('hidden').height(),
                            Spacer(),

                            HStack({ alignment: cTrailing })(
                                MenuButton()
                                    .model([
                                        {
                                            title: 'Document',
                                            type: 'Title'
                                        },
                                        {
                                            title: 'Add',
                                            icon: SvgIcon('svg-sprite-activity-template-merged'),
                                            onClick: () => {
                                                DynoDialog.Show(AddDocumentDialog(workspaceId,appletId, document.$id, `${document.path}/${document.$id}`))
                                            }
                                        },
                                    ])
                                    .icon(Icons.Add),
                                MenuButton()
                                    .model([

                                        {
                                            title: 'Applet Options',
                                            type: 'Title'
                                        },
                                        {
                                            title: 'Rename',
                                            icon: WorkbenchIcons.Edit,
                                            onClick: () => {
                                                setMode('edit');
                                            }
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
                                            title: 'Add to favorites',
                                            icon: SvgIcon('svg-sprite-global__star'),
                                            onClick: () => {
                                                setMode('edit');
                                            }
                                        },

                                        {
                                            title: 'Dublicate',
                                            icon: SvgIcon('svg-sprite-global__copy'),
                                            onClick: () => {
                                                const data = { ...document };
                                                delete data['id'];
                                                /*  createApplet(applet, {
                                                     onSuccess: (newApplet) => {
                                                         invalidateResourceCache();
                                                         ShowSuccessToast('Dublicated.');
                                                         navigate(getAppletUrl(access_type, team?.id, newApplet.id))
                                                     }
                                                 }) */
                                            }
                                        },
                                        {
                                            title: 'Move',
                                            icon: SvgIcon('svg-sprite-global__move'),
                                            onClick: () => {
                                                setMode('edit');
                                            }
                                        },


                                        {
                                            title: 'Description',
                                            icon: SvgIcon('svg-sprite-info4'),
                                            onClick: () => {
                                                DynoDialog.Show(AppletDescriptionDialog(document.$id))
                                            }
                                        },
                                        {
                                            title: 'Delete',
                                            icon: SvgIcon('svg-sprite-global__delete', '#bc4841'),
                                            color: '#bc4841',
                                            onClick: () => {
                                                const accept = () => {
                                                    /* deleteView(applet.id, {
                                                        onSuccess: () => {
                                                            invalidateResCache();
            
                                                            team ?
                                                                navigate(`/app/${getAppFullName()}/team/${team.id}/workspace/${applet.workspace_id}`)
                                                                :
                                                                navigate(`/app/${getAppFullName()}/workspace/${applet.workspace_id}`);
            
                                                        }
                                                    }) */
                                                    // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                                                }

                                                const reject = () => {
                                                    //alert('reject')
                                                    // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                                                }
                                                confirmDialog({
                                                    message: 'Do you want to delete this applet?',
                                                    header: 'Delete Confirmation',
                                                    icon: 'pi pi-info-circle',
                                                    acceptClassName: 'p-button-danger',
                                                    accept,
                                                    reject
                                                });
                                                //DynoDialog.Show(AppletDescriptionDialog(applet.id))
                                            }
                                        }
                                    ])
                                    .icon(Icons.Menu)

                            )
                                .width(64)
                                .height(32).padding(cHorizontal, 5)
                                .display('var(--show-applet-action-buttons)')
                                .onClick((e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                })


                        )

                            // .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                            .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                            .allHeight(32)

                            //.padding(`0 0 0 20px`)
                            .cursor('pointer')
                            .draggable(true)
                            .onDragStart((e) => {
                                e.dataTransfer.setData('text/plain', JSON.stringify(document));
                            })
                            .variable('--show-applet-action-buttons', { default: 'none', hover: 'flex' })
                            .variable(`--display-caret`, { default: 'none', hover: 'flex' })
                            .variable(`--display-icon`, { default: 'flex', hover: 'none' })
                        :

                        HStack({ alignment: cLeading, spacing: 5 })(
                            Icon((opas as any).find((opa) => opa.type === document.opa)?.icon || WorkbenchIcons.DocIcon).foregroundColor('#7c828d'),

                            TextField().value(newName)
                                .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                                .fontSize(13)
                                .height('100%')
                                .padding(0)
                                .border('dashed 1px #AAA')
                                .shadow({ focus: 'none' })
                                .onBlur(() => {
                                    /*  updateAppletName({
                                         appletId: applet.$id,
                                         name: newName
                                     }, () => {
                                         onSuccess: () => {
                                             ShowSuccessToast('We successfully rename applet', 'Undo', () => {
                                               
                                             })
                                         }
                                     }) */

                                    setMode('readonly');
                                })
                                .onChange((e) => setNewName(e)),
                            /* : Text(list.name)
                                .ellipsisMaxLines(1)
                                .multilineTextAlignment(TextAlignment.leading)
                                .fontSize(13).fontWeight('400').foregroundColor(selectedItem === spaceItem.name ? '#7b68ee' : '#53575e'),*/

                        )
                            //   .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                            .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                            .allHeight(32)
                            .padding('0 0 0 40px')
                            .cursor('pointer')

                )
            })
    )
}