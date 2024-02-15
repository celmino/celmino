import { is } from "@tuval/core";
import { HStack, Icon, Icons, MenuButton, Spacer, SvgIcon, Text, TextField, UIViewBuilder, VStack, cHorizontal, cLeading, nanoid } from "@tuval/forms"

/**
 * 
 * @param item  The topic item
 * @param updateItems  The function to update the items 
 * @returns 
 */
export const Section = ({ item, updateItems }) => UIViewBuilder(() => {
    return (
        HStack({ alignment: cLeading, spacing: 4 })(
            HStack({ alignment: cLeading, spacing: 5 })(
                Icon(item.expended ? SvgIcon('svg-sprite-cu3-folder-sidebar_opened', '#7C828D') : SvgIcon('svg-sprite-cu3-folder-sidebar', '#7C828D')).foregroundColor('#7C828D')
                    .padding(cHorizontal, 5),
                // Icon(SvgIcon('svg-sprite-cu3-folder-sidebar_opened')).padding(cHorizontal,5),
                item.mode === 'edit' ?
                    TextField().defaultValue(item.name)
                        .left('-5px')
                        .fontSize(15)
                        .padding(5)
                        .border({ default: 'none', focus: 'none' })
                        .shadow({ focus: 'none' })
                        .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                        .onClick((e) => e.stopPropagation())
                        .onChange((e) => item.name = e)
                        .onBlur((e) => {
                            item.mode = 'readonly';
                            updateItems()
                        }) :
                    Text(item.name)
                        .foregroundColor('#00263A')
                        .fontSize(15)
                        .fontFamily('Poppins, sans-serif, Helvetica, Arial'),
            )
                .onClick(() => {
                    if (item.mode !== 'edit') {
                        item.expended = !item.expended;
                        updateItems();
                    }
                }),
            Spacer(),
            HStack(
                MenuButton()
                    .model([
                        {
                            title: 'Section acions',
                            type: 'Title'
                        },
                        {
                            title: 'Rename',
                            icon: SvgIcon('svg-sprite-global__edit', '#7C828D'),
                            onClick: () => {

                                item.mode = 'edit';

                                updateItems();
                            }
                        },
                        {
                            title: 'Add section',
                            icon: SvgIcon('svg-sprite-global__add-folder', '#7C828D'),
                            onClick: () => {

                                item.expended = true;
                                if (!is.array(item.subItems)) {
                                    item.subItems = [];
                                }
                                item.subItems.push({
                                    id: nanoid(),
                                    type: "section",
                                    mode: 'edit',
                                    name: "",
                                });
                                updateItems();
                            }
                        },
                        {
                            title: 'Add topic',
                            icon: SvgIcon('svg-sprite-global__add', '#7C828D'),
                            onClick: () => {

                                item.expended = true;

                                if (!is.array(item.subItems)) {
                                    item.subItems = [];
                                }
                                item.subItems.push({
                                    id: nanoid(),
                                    type: "topic",
                                    mode: 'edit',
                                    name: "",
                                });
                                updateItems();
                            }
                        },
                        {
                            title: 'Delete',
                            icon: SvgIcon('svg-sprite-global__delete', '#7C828D'),

                            onClick: () => {

                                if (!is.array(item.subItems)) {
                                    item.subItems = [];
                                }

                                item.deleted = true;

                                updateItems();
                            }
                        },

                    ])
                    .icon(Icons.Menu)
            ).width()

        )
            .height()
            .minHeight(35)
            .background('#f0f2f5')

            .border('solid 1px #e1e7ec')
            .shadow('rgba(0, 0, 0, 0.016) 0px 2px 0px')
            .margin('2px 0px')
            .cornerRadius(5)
            .padding(cHorizontal, 4)
            .cursor('pointer')
    )
})