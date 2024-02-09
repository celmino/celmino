
import { Models } from "@realmocean/sdk";
import {
    Fragment, HStack, Heading,
    Icons, MenuButton,
    ShowSuccessToast,
    ShowToast,
    Spacer, SvgIcon, TextField,
    UIViewBuilder,
    cHorizontal, cLeading, cTrailing, confirmDialog,
    getAppFullName,
    useNavigate,
    useParams,
    useState
} from "@tuval/forms";
import copy from 'copy-to-clipboard';


export function DatabaseNameView(database: Models.Database, selected: boolean, onClickCallback: Function) {
    return (
        UIViewBuilder(() => {

            const { access_type , workspaceId} = useParams();
            const [mode, setMode] = useState('readonly');
            // const [name, setName] = useState(applet?.name);
            const [newName, setNewName] = useState(database?.name);
            const navigate = useNavigate();
            //const { updateAppletName } = useUpdateAppletName();
            // const {applet:_applet} = useGetApplet(applet.$id);

            return (
                mode === 'readonly' ?
                    //UIRouteLink(team ? `/app/${getAppFullName()}/team/${team.id}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}` : `/app/${getAppFullName()}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}`)(

                    HStack({ alignment: cLeading, spacing: 5 })(
                        HStack({ alignment: cLeading })(
                             HStack({ alignment: cTrailing })(
                               /*  Icon(WorkbenchIcons[database.icon] || WorkbenchIcons.DocIcon)
                                    .foregroundColor('#7c828d').fontSize(18)
                                    .onClick(() => {
                                        onClickCallback();
                                    }) */
                            ).width(25).paddingRight('3px'), 
                            mode !== 'readonly' ? Fragment() :
                                HStack({ alignment: cLeading })(
                                    Heading(database.name).h6().ellipsisMaxLines(1).ellipsis(true)
                                        .fontSize(14).fontWeight('400')
                                        .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')
                                        .foregroundColor(selected ? '#7b68ee' : '#151719')
                                ).onClick(() => {
                                    //alert(getAppletUrl(access_type, applet.id))
                                    navigate(`/app/com.celmino.app.test/workspace/${workspaceId}/database/${database.$id}`);
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

                                      /*   updateAppletName({
                                            appletId: database.$id,
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
                                        title: 'Add to sub applet',
                                        type: 'Title'
                                    },
                                    {
                                        title: 'More Applets',
                                        icon: SvgIcon('svg-sprite-activity-template-merged'),
                                      /*   onClick: () => SelectOpaDialog.Show(database.$id, 'applet', opas).then((applet) => {

                                           
                                        }) */
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
                                      //  icon: WorkbenchIcons.Edit,
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
                                            const data = { ...database };
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
                                           // DynoDialog.Show(AppletDescriptionDialog(database.$id))
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

                        ).width(64).height(32).padding(cHorizontal, 5)
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
                            e.dataTransfer.setData('text/plain', JSON.stringify(database));
                        })
                        .variable('--show-applet-action-buttons', { default: 'none', hover: 'flex' })
                    :

                    HStack({ alignment: cLeading, spacing: 5 })(
                        // Icon((opas as any).find((opa) => opa.type === database.opa)?.icon || WorkbenchIcons.DocIcon).foregroundColor('#7c828d'),

                        TextField().value(newName)
                            .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                            .fontSize(13)
                            .height('100%')
                            .padding(0)
                            .border('dashed 1px #AAA')
                            .shadow({ focus: 'none' })
                            .onBlur(() => {
                              /*   updateAppletName({
                                    appletId: database.$id,
                                    name: newName
                                }, () => {
                                    onSuccess: () => {
                                        ShowSuccessToast('We successfully rename applet', 'Undo', () => { */
                                            /* updateApplet(applet.id, {
                                                name: name
                                            }, {
                                                onSuccess: () => {
                                                    setName(name);
                                                    ShowSuccessToast('We successfully undo rename applet')
                                                }
                                            }) */
                                       /*  })
                                    } */
                                //})

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