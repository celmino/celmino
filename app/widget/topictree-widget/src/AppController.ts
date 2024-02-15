import { OptionsContext, UIController, UIView, VStack, useState } from '@tuval/forms';
import { TopicTree } from './views/SectionTree';
import { is } from '@tuval/core';



export class MyTestController extends UIController {

    public override LoadView(): UIView {

        const { items } = this.props.data;
        const { onChange, onSelected, selectedTopicId, topicTemplate } = this.props.config || {};
       



        return (
         
                VStack(
                    TopicTree(items, (item) => {
                        if (is.function(onSelected)) {
                            onSelected(item)
                        }
                    }, onChange, selectedTopicId, topicTemplate)
                )
                    .borderRight('solid 1px #D2D2D2')
                    .allWidth(420)
                    .background('white')
          

        )
    }

}

