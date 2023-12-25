import { FontIcon, Fragment, HStack, Heading, Icons, MenuButton, SvgIcon, TextField, UIViewBuilder, UIWidget, WorkProtocol, cHorizontal, cLeading, useOptions, useProtocol, useState } from "@tuval/forms";
import { DynoDialog } from "../DynoDialog";
import { is } from "@tuval/core";

export const AppletName = () => UIViewBuilder(() => {

    const { title, menu, iconName, iconCategory, iconColor , onChange} =  useOptions();
    const [mode, setMode] = useState('readonly');
    //const [name, setName] = useState(applet?.name);
    // const [newName, setNewName] = useState(applet?.name);

    
    return (
        HStack({ alignment: cLeading })(
            HStack(
                UIWidget("com.tuvalsoft.widget.icons")
                    .config({
                        onChange: (value) => onChange(value),
                        selectedIcon: iconName,
                        color: iconColor,
                        selectedCategory: iconCategory
                    })
            )
            //.background('#FCE8E8')
            .width(32).height(32).cornerRadius(5),
            HStack({ alignment: cLeading })(
                Heading(title).h4(),
                mode === 'readonly' ? Fragment() :
                    TextField().value(title).position("absolute").left('0px').top('0px')
                        .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                        .fontSize(18)
                        .padding(0).height('90%')
                        .fontWeight('600')
                        .border('dashed 1px #AAA')
                        .shadow({ focus: 'none' })
                        .onBlur(() => {
                            /*  if (newName !== name) {
                                 setName(newName); */
                            /*  updateApplet(applet.id, {
                                 name: newName
                             }, {
                                 onSuccess: () => void 0
                             }) */
                            // }
                            setMode('readonly');
                        })
                //  .onChange((e) => setNewName(e))
            )
            ,
            HStack(
                MenuButton()
                    .model([
                        {
                            title: 'Applet Options',
                            type: 'Title'
                        },
                        {
                            title: 'Rename',
                            icon: SvgIcon('svg-sprite-global__link'),
                            onClick: () => {
                                setMode('edit');
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
                                setMode('edit');
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
                                //DynoDialog.Show(AppletDescriptionDialog(applet.id))
                            }
                        },

                        ...(
                            is.array(menu) ? [
                                {
                                    type: 'Divider'
                                },
                                ...menu
                            ] : []
                        ),

                        {
                            type: 'Divider'
                        },
                        {
                            title: 'Delete',
                            icon: SvgIcon('svg-sprite-global__delete', '#bc4841'),
                            color: '#bc4841',
                            onClick: () => {
                                //DynoDialog.Show(AppletDescriptionDialog(applet.id))
                            }
                        },


                        /*  {
                             type: 'Divider'
                         },
                         {
                             title: 'Data Options',
                             type: 'Title'
                         },
                         {
                             title: 'Upload data',
                             icon: SvgIcon('svg-sprite-import'),
 
                             onClick: () => {
                               
                             }
 
                         },
                         {
                             title: 'Rebuild project',
                             icon: SvgIcon('svg-sprite-global__dependencies'),
                             onClick: () => {
                              
                             }
 
                         },
                         {
                             title: 'Reset',
                             icon: SvgIcon('svg-sprite-column-reset', '#bc4841'),
                             color: '#bc4841',
                             onClick: () => {
                                
                             }
 
                         },
                         {
                             type: 'Divider'
                         },
                         {
                             title: 'Mining Options',
                             type: 'Title'
                         },
 
                         {
                             title: 'Metrics',
                             icon: FontIcon('\\d2cf'),
 
                             onClick: () => {
                                
                             }
                         } */
                    ])
                    .icon(Icons.Menu)
            )
                .width().height()
                .opacity('var(--showMenu)')
                .transition('opacity 0.3s'),
        )
            .width()
            .padding(cHorizontal, 5)
            .variable('--showMenu', { hover: '1', default: '1' })
    )
})