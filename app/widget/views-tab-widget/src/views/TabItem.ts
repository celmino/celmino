import { Fragment, HStack, Icon, Icons, MenuButton, UIViewBuilder, VDivider, cHorizontal, Text, useState, TextField, HDivider, cLeading, useProtocol, WorkProtocol, SvgIcon, confirmDialog, UIImage, useNavigate, getAppFullName, useParams } from "@tuval/forms";

import { DynoDialog } from "../DynoDialog";
import { PowerUps } from "../PowerUps";
import { Models } from "@celmino/sdk";


export function TabItem(views, view: Models.View, index, selectedIndex, onClick, invalidateQuery){
    return (
        UIViewBuilder(() => {

            const navigate = useNavigate();
            const [mode, setMode] = useState('readonly');
            const [name, setName] = useState(null);
            const [newName, setNewName] = useState(null);

            return (
                HStack(
                    index === 0 ? VDivider().width(1).height('60%').background('#E8EAED') : Fragment(),
                    HStack({ spacing: 5 })(
                        HStack({ alignment: cLeading, spacing: 5 })(
                            views?.find(v => v.type === view.view)?.icon ?
                                Icon([...views, ...PowerUps]?.find(v => v.type === view.view)?.icon).fontSize(18).foregroundColor('gray').onClick(() => onClick()) :
                                UIImage([...views, ...PowerUps]?.find(v => v.type === view.view)?.image).allHeight(18).allHeight(18).onClick(() => onClick())
                            ,
                            HStack({ alignment: cLeading })(
                                Text(name || view?.name).whiteSpace('nowrap')
                                    // .fontFamily('source sans pro semibold')
                                    .fontWeight(selectedIndex === index ? '600' : '500')
                                    .opacity(mode === 'readonly' ? '1' : '0')
                                    .foregroundColor(selectedIndex === index ? '#7b68ee' : '')
                            ),
                            mode === 'readonly' ? Fragment() :
                                TextField().value(newName || view?.name).position("absolute").left('0px').top('0px')
                                    // .fontFamily('source sans pro semibold')
                                    .padding(0).height('100%')
                                    .fontWeight('600')
                                    .foregroundColor(selectedIndex === index ? '#7b68ee' : '')
                                    .border('dashed 1px #AAA')
                                    .shadow({ focus: 'none' })
                                    .onBlur(() => {
                                        if (newName !== name) {
                                            setName(newName);

                                            /* 
                                                                                updateView(view.id, {
                                                                                    title: newName
                                                                                }) */
                                        }
                                        setMode('readonly');
                                    })
                                    .onChange((e) => setNewName(e))
                        ).onClick(() => onClick())
                        //.width('calc(100% -20px)')
                        ,
                        selectedIndex === index ?
                            HStack(
                                MenuButton()
                                    .model([
                                        {
                                            title: 'VIEW OPTIONS',
                                            type: 'Title'
                                        },
                                        {
                                            title: 'Rename',
                                            icon: SvgIcon('svg-sprite-cu-other__info'),
                                            onClick: () => {
                                                setMode('edit');
                                            }
                                        },
                                        {
                                            title: 'Description',
                                            icon: SvgIcon('svg-sprite-cu-other__info'),
                                            onClick: () => {
                                                //  DynoDialog.Show(ViewDescriptionDialog(view.id))
                                            }
                                        },
                                        {
                                            title: 'Copy link',
                                            icon: SvgIcon('svg-sprite-global__link'),
                                            onClick: () => {
                                                setMode('edit');
                                            }
                                        },
                                        {
                                            title: 'Pin',
                                            icon: SvgIcon('svg-sprite-global__pin'),
                                            onClick: () => {
                                                setMode('edit');
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
                                            title: 'Add to drafts',
                                            icon: SvgIcon('svg-sprite-cu2-doc'),
                                            onClick: () => {
                                                setMode('edit');
                                            }
                                        },
                                        {
                                            title: 'Dublicate',
                                            icon: SvgIcon('svg-sprite-global__copy'),
                                            onClick: () => {
                                                setMode('edit');
                                            }
                                        },
                                        {
                                            type: 'Divider'
                                        },
                                        {
                                            title: 'Delete',
                                            icon: SvgIcon('svg-sprite-global__delete', '#bc4841'),
                                            color: '#bc4841',
                                            onClick: () => {
                                                const accept = () => {
                                                    /*  deleteView(view.id, {
                                                         onSuccess: () => {
                                                             invalidateResourceCache();
                                                             team_id ?
                                                                 navigate(`/app/${getAppFullName()}/team/${team_id}/applet/${view.applet_id}`)
                                                                 :
                                                                 navigate(`/app/${getAppFullName()}/applet/${view.applet_id}`);
         
                                                         }
                                                     }) */
                                                    // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                                                }

                                                const reject = () => {
                                                    //alert('reject')
                                                    // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                                                }
                                                confirmDialog({
                                                    message: 'Do you want to delete this view?',
                                                    header: 'Delete Confirmation',
                                                    icon: 'pi pi-info-circle',
                                                    acceptClassName: 'p-button-danger',
                                                    accept,
                                                    reject
                                                });
                                                //DynoDialog.Show(AppletDescriptionDialog(applet.id))
                                            }
                                        }
                                        /*  {
                                             title: 'Delete',
                                             icon: Icons.Delete,
                                             onClick: () => {
                                                 setMode('edit');
                                             }
                                         } */
                                    ])
                                    .icon(Icons.Menu)
                                    .display('var(--showMenu)')
                            ).width(24).height(24) : Fragment()
                        ,
                    ).padding(cHorizontal, 10)
                        .variable('--showMenu', { hover: 'block', default: 'none' }),
                    VDivider().width(1).height('60%').background('#E8EAED'),

                    HDivider().position('absolute').width('calc(100% - 26px)').height(3).left('13px').bottom('0px').cornerRadius('3px 3px 0 0')
                        .background('#7b68ee')
                        .transition('opacity .1s cubic-bezier(.785,.135,.15,.86) 0s')
                        .opacity(selectedIndex === index ? '1' : '0'),

                    HDivider().position('absolute').width('calc(100% - 26px)').height(3).left('13px').bottom('0px').cornerRadius('3px 3px 0 0')
                        .background('#656F7D')
                        .transition('opacity .1s cubic-bezier(.785,.135,.15,.86) 0s')
                        .opacity(selectedIndex === index ? '0' : 'var(--show-bar)')
                )
                    .cursor('pointer')
                    .variable('--show-bar', { hover: '1', default: '0' })

            )
        })
    )
}