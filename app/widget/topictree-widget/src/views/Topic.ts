import { is } from "@tuval/core";
import { HStack, Icon, Icons, MenuButton, Spacer, SvgIcon, TextField, UIViewBuilder, cLeading, Text, cHorizontal, Fragment, cVertical, TextAlignment, useOptions } from "@tuval/forms";


/**
 * 
 * @param item  The topic item
 * @param updateItems  The function to update the items
 * @param selected  The selected item
 * @param onSelected  The function to call when the item is selected
 * @param setSelected  The function to set the selected item 
 * @returns 
 */
export const Topic = ({ item, updateItems, selected, onSelected, setSelected }) => UIViewBuilder(() => {
    const isSelected = selected == item.id;
    const { topicTemplate } = useOptions();
  
    return (
        HStack({ alignment: cLeading, spacing: 5 })(
            HStack({ alignment: cLeading, spacing: 5 })(
                HStack(
                    isSelected ?
                        HStack().width(5).height(5).background('#7C828D').cornerRadius('50%')
                        : Fragment()
                )
                    .width(15).height(15)
                    .border('solid 1px #E5E9EE').cornerRadius('50%')
                    //.opacity(item.mode === 'edit' ? '0' : '1')
                    .background('white'),
                item.mode === 'edit' ?
                    TextField().defaultValue(item.name)
                        // .left('-1px')
                        .fontSize(15)
                        .padding(cVertical, 5)
                        .padding(cHorizontal, 1)
                        .border({ default: 'none', focus: 'none' })
                        .shadow({ focus: 'none' })
                        .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                        .onChange((e) => item.name = e)
                        .onBlur((e) => {
                            item.mode = 'readonly';
                            updateItems()
                        }) :

                    is.function(topicTemplate) ? topicTemplate(item) :
                        Text(item.name).foregroundColor('#00263A')
                            .multilineTextAlignment(TextAlignment.leading)
                            .lineHeight('25px')
                            .fontSize(15)
                            .fontFamily('Poppins, sans-serif, Helvetica, Arial')
            )
                .lineHeight(34)
                .onClick(() => {
                    if (item.mode !== 'edit') {
                        setSelected(item.id);
                        onSelected(item);
                    }

                }),
            Spacer(),
            HStack(
                MenuButton()
                    .model([
                        {
                            title: 'Topic acions',
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
                            title: 'Convert to section',
                            icon: Icon(Icons.AddSmall),
                            onClick: () => {
                                item.type = 'section';
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
            .minHeight(34)
            .background(isSelected ? '#C1E3FF' : '#F8F9FA')
            .border('solid 1px #e1e7ec')
            .shadow('rgba(0, 0, 0, 0.016) 0px 2px 0px')
            .margin('2px 0px')
            .cornerRadius(5)
            .cursor('pointer')
            .padding(cHorizontal, 4)
    )
})