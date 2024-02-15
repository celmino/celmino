import { is } from "@tuval/core";
import {
    UIViewBuilder, useState, VStack, cTopLeading, HStack, ForEach, cLeading, Icon, SvgIcon, Fragment, Text, OptionsContext,
    useOptions, cVertical, nanoid, EditableHeader, EditableHeadingSizes, TextField, Spacer, MenuButton, Icons, cHorizontal, TooltipPositions, UIView
} from "@tuval/forms";
import { EmptyTopicView } from "./EmpytTopicView";
import { Topic } from "./Topic";
import { Section } from "./Section";

function findItem(items: any[], id: string) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
        if (is.array(item.subItems)) {
            const _item = findItem(item.subItems, id);
            if (_item) {
                return _item;
            }
        }
    }
}
function iterateItems(items: any[], callback: Function) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        callback(item);

        if (is.array(item.subItems)) {
            iterateItems(item.subItems, callback);
        }
    }
}

export const TopicTree = (_items: any[], onSelectedCallback: Function, onChangeCallback?: Function, selectedTopicId?: string, topicTemplate?: ()=> UIView) => UIViewBuilder(() => {

    const [items, setItems] = useState(_items);
    const [selected, setSelected] = useState(selectedTopicId);

    const onSelected = (_selected) => {
        onSelectedCallback(_selected);
    }

    console.log(items)
    const update = () => {
        setItems([...items]);
        if (is.function(onChangeCallback)) {
            onChangeCallback([...items]);
        }
    }
    return (
        OptionsContext(() =>
            VStack({ alignment: cTopLeading })(

                HStack({ alignment: cTopLeading, spacing: 10 })(
                    HStack({ spacing: 5 })(
                        Icon(SvgIcon('svg-sprite-global__add-folder', 'currentColor')),
                        Text('Section')
                    )
                        .tooltip('A section contains sections and topics')
                        .tooltipPosition(TooltipPositions.TOP)
                        .cornerRadius(3)
                        .cursor('pointer')
                        .border({ default: 'solid 1px #b8c4ce', hover: 'solid 1px #238fdb', active: 'solid 1px #0057a8' })
                        .foregroundColor({ default: 'rgba(0, 0, 0, 0.85)', hover: '#238fdb', active: '#0057a8' })
                        .background('white')
                        .padding('5.7px 15px')
                        .transition('all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)')
                        .shadow('0 2px 0 rgba(0, 0, 0, 0.015)')
                        .fontSize(13)
                        .fontFamily("Poppins, sans-serif, Helvetica, Arial")
                        .height(32)
                        .onClick(() => {

                            setItems([...items, {
                                id: nanoid(),
                                type: "section",
                                mode: 'edit',
                                name: "New Section",
                            }])
                        }),

                    HStack({ spacing: 5 })(
                        Icon(Icons.AddSmall).foregroundColor('currentColor'),
                        Text('Topic')
                    )
                        .tooltip('A topic holds your content')
                        .tooltipPosition(TooltipPositions.TOP)
                        .cornerRadius(3)
                        .cursor('pointer')
                        .border({ default: 'solid 1px #b8c4ce', hover: 'solid 1px #238fdb' })
                        .foregroundColor({ default: 'rgba(0, 0, 0, 0.85)', hover: '#238fdb' })
                        .background('white')
                        .padding('5.7px 15px')
                        .transition('all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)')
                        .shadow('0 2px 0 rgba(0, 0, 0, 0.015)')
                        .fontSize(13)
                        .fontFamily("Poppins, sans-serif, Helvetica, Arial")
                        .height(32)
                        .onClick(() => {
                            setItems([...items, {
                                id: nanoid(),
                                type: "topic",
                                mode: 'edit',
                                name: "sdfdsf",
                            }])
                        }),
                    HStack(
                        MenuButton()
                            .model([
                                {
                                    title: 'Topic acions',
                                    type: 'Title'
                                }
                            ]
                            )
                    ).allWidth(32).height(32)
                ).height().padding(cVertical, 10).padding(cHorizontal, 5),
                VStack({ alignment: cTopLeading })(
                    (is.array(items) && items.length > 0) ?
                        SectionTree(items, update) :
                        EmptyTopicView()
                ).padding(cHorizontal, 5)
            )
        ).options({
            selected: selected,
            setSelected: setSelected,
            onSelected: onSelected,
            topicTemplate
        })
    )
})

const getHeigth = (items: any[]) => {
    
    let heigth = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.deleted) {
            continue;
        }

        heigth += 38;

        if (item.expended && is.array(item.subItems)) {
            heigth += getHeigth(item.subItems);
        }

    }
    console.log(heigth)
    return heigth;
}

const deleteItem = (item: any) => {
    item.deleted = true;

    if (is.array(item.subItems)) {
        for (let i = 0; i < item.subItems.length; i++) {
            const _item = item.subItems[i];

            deleteItem(_item);

        }
    }

}
export const SectionTree = (items: any[], updateItems, padding = '0px'): UIView =>
    VStack({ alignment: cTopLeading })(
        ...ForEach(items)((item: any) =>
            item.deleted ? Fragment() :
                HStack({ alignment: cTopLeading })(
                    UIViewBuilder(() => {
                        const { selected, setSelected, onSelected } = useOptions()
                        return (
                            VStack({ alignment: cTopLeading })(
                                item.type === 'section' ?
                                    Section({ item, updateItems })
                                    :
                                    Topic({ item, updateItems, selected, onSelected, setSelected })
                                ,
                                (item.subItems) ?
                                    SectionTree(item.subItems, updateItems, '15px')
                                        .overflow('hidden')
                                        .allHeight(item.expended ? '100%' : '0px') : Fragment()
                            ).height()
                        )
                    })
                ).paddingLeft(padding).height()
        )
    )
        .height()
        //.overflow('hidden')
        //.height(getHeigth(items))
        .transition('height 100ms, opacity 10ms')
        //.border('solid 1px green')




