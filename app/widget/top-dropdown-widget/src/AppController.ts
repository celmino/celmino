import { ForEach, Fragment, HStack, Icon, ScrollView, State, Text, UIController, UIView, VStack, cLeading, cTopLeading, cVertical, useState } from '@tuval/forms';
import { useRef } from 'react';
import { useOnClickOutside } from './views/useOnClickOutside';
import { IConfig, IData, IDataSourceItem } from './types';
import { is } from '@tuval/core';

const convertVhToPx = (vh = 50) => {
    const oneVhInPx = window.innerHeight / 100;
    return oneVhInPx * vh;
};


const defaultConfig: IConfig = {
    title: '',
    selectedValue: '',
    placeholder: '',
    width: '100%',
    onClick: void 0,
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
      const selectedValue = config.value || config.selectedValue;
        const selectedItem = dataSource.find(item => item.value ===  (config.value || selectedValue));

        const itemHeight = 50;


        return (
            HStack(
                // selected
                HStack(
                    VStack({ alignment: cLeading })(
                        is.nullOrEmpty(config.title) ? Fragment() :
                            Text(config.title).textTransform('uppercase').fontSize('.6em').lineHeight('1.2em').foregroundColor('#c0cbd6'),
                        Text(selectedItem ? selectedItem.text : config.placeholder).fontSize(18).fontFamily('"Mulish",sans-serif').fontWeight('700')
                    ),
                    Icon('\\e5c5').fontSize(25)
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
                    .height(isModalOpen ? dataSource.length  * itemHeight : 0)
                    .cursor('pointer')
                    .shadow('rgba(0,0,0,.3) 0 3px 4px 0')
                    .position('absolute').top('60px').left('0px').transition('height 100ms, opacity 10ms')
                    .opacity(isModalOpen ? 1 : 0)

            )
            .ref(ref)
            .height().width(config.width).zIndex(100)
        )
    }

}

