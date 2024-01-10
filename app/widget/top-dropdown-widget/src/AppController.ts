import { ForEach, Fragment, HStack, Icon, ScrollView, State, Text, UIController, UIView, UIViewBuilder, UIViewBuilderClass, VStack, cHorizontal, cLeading, cTopLeading, cVertical, useState } from '@tuval/forms';
import { useRef } from 'react';
import { useOnClickOutside } from './views/useOnClickOutside';
import { IConfig, IData, IDataSourceItem } from './types';
import { is } from '@tuval/core';

const convertVhToPx = (vh = 50) => {
    const oneVhInPx = window.innerHeight / 100;
    return oneVhInPx * vh;
};


const defaultConfig: IConfig = {
    header: {
        content: '',
        color: '#c0cbd6',
        font: {
            family: '"Mulish",sans-serif',
            size: '10px',
            weight: '400'
        }
    },
    selected: {
        content: () => void 0,
        color: '#c0cbd6',
        font: {
            family: '"Mulish",sans-serif',
            size: '10px',
            weight: '400'
        }
    },
    selectedValue: '',
    placeholder: '',
    width: '100%',
    onClick: () => void 0,
    onSelectedClick: () => void 0,
    titleColor: '#c0cbd6',
    value: null
}

const defaultData: IData = {
    dataSource: []
}

export class MyTestController extends UIController {

    public override LoadView(): UIView {
        const config: IConfig = Object.assign({ ...defaultConfig }, this.props.config);
        const data: IData = Object.assign({ ...defaultData }, this.props.data);

        const ref = useRef();
        // State for our modal
        const [isModalOpen, setModalOpen] = useState(false);
        // Call hook passing in the ref and a function to call on outside click
        useOnClickOutside(ref, () => setModalOpen(false));

        //config and data fine tunes
        let dataSource = is.function(data.dataSource) ? data.dataSource() : data.dataSource;

        if (dataSource == null) {
            dataSource = [];
        }


        //  const [selectedValue, setSelectedValue] = useState<string>(config.value || config.selectedValue);
        const selectedValue = config.value || config.selectedValue || config.selected?.value;
        const selectedItem = dataSource.find(item => item.value === (config.value || selectedValue));

        const itemHeight = 50;


        return (
            HStack(
                // selected
                HStack(
                    VStack({ alignment: cLeading })(
                        config.header == null ? Fragment() :
                            config.header.content instanceof UIViewBuilderClass ?
                                config.header.content :
                                Text(config.header.content)
                                    .textTransform('uppercase')
                                    .fontSize(config.header.font.size)
                                    .lineHeight('1.2em')
                                    .foregroundColor(config.header.color)
                                    .fontWeight(config.header.font.weight as any),
                        selectedItem ? UIViewBuilder(() => {
                            const view = config.selected.content(selectedItem);
                            return view instanceof UIViewBuilderClass ? view :
                                Text(view).foregroundColor(config.selected.color)
                                .fontFamily(config.selected.font.family)
                                .fontSize(config.selected.font.size)
                                .fontWeight(config.selected.font.weight as any)
                        }) :

                            Text( /* selectedItem.text :  */config.placeholder)
                                .fontSize(18)
                                .fontFamily('"Mulish",sans-serif')
                                .fontWeight('700')
                                .foregroundColor({ default: 'rgb(46, 65, 88)', hover: 'blue' })
                                .onClick((e) => {
                                    config.onSelectedClick(selectedItem);
                                    e.stopPropagation();
                                })
                                .padding(cVertical, '5px'),
                    )

                        .paddingRight('20px'),
                    Icon('\\e5c5').fontSize(25).foregroundColor('rgb(46, 65, 88)')
                ).height(60)
                    //.borderRight('solid 1px #DDE4EB')
                    .padding().cursor('pointer')
                    .background(isModalOpen ? '#DDE4EB' : '')
                    .foregroundColor(isModalOpen ? '#4879d9' : '#eee')

                    .shadow(isModalOpen ? 'rgba(0,0,0,.3) 0 3px 4px 0' : '')
                    .onClick(() => !isModalOpen ? setModalOpen(true) : setModalOpen(false)),
                //content
                ScrollView({ axes: convertVhToPx(80) > dataSource.length * itemHeight ? 'none' as any : cVertical, alignment: cTopLeading })(
                    VStack(
                        ...ForEach(dataSource)((dataSourceItem: IDataSourceItem) =>

                            HStack({ alignment: cLeading })(
                                Text(dataSourceItem.text).fontWeight('600').fontSize(18).fontFamily('"Mulish",sans-serif')
                            )
                                .height(itemHeight)
                                .padding()
                                .foregroundColor({ default: '#505A64', hover: 'white' })
                                .background({ default: '#DDE4EB', hover: '#4879d9' })
                                .onClick(() => {
                                    setModalOpen(false);
                                    /*  if (config.value == null) {
                                         setSelectedValue(dataSourceItem.value);
                                     } */
                                    config.onClick(dataSourceItem);
                                }),
                        )
                    )

                ).maxHeight('80vh')
                    .height(isModalOpen ? dataSource.length * itemHeight : 0)
                    .cursor('pointer')
                    .shadow('rgba(0,0,0,.3) 0 3px 4px 0')
                    .position('absolute').top('60px').left('0px').transition('height 100ms, opacity 10ms')
                    .opacity(isModalOpen ? 1 : 0)

            )

                .onClickAway(() => setModalOpen(false))
                .height()
                .width(config.width).zIndex(100)
        )
    }

}

