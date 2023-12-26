import { ForEach, HStack, Icon, Icons, Spinner, Text, UIController, 
    UINavigate, UIView, WorkProtocol, cHorizontal, cLeading,
     getAppFullName, useNavigate, useProtocol, useState , str2rgb} from '@tuval/forms';
import { TabItem } from './views/TabItem';
import { SelectAnalyseDialog } from './SelectAnalyseDialog';
import { is } from '@tuval/core';
import { Models } from '@realmocean/sdk';

const colors = [
    '#4A4A4A',
    '#6A849B',
    '#BEC5CC',
    '#D40915',
    '#E72065',
    '#9C2BAF',
    '#673DB6'


]
export class MyTestController extends UIController {


    public override LoadView(): UIView {
        
        const { views, view_id, actions, selectedIndex = 0, 
            onChange = void 0, isLoading = false } = this.props.config || {};

        const [selectedIndexState, setSelectedIndexState] = useState(selectedIndex);

        //const selectedIndex = views?.findIndex(view => view.id === view_id);

        return (
            HStack({ alignment: cLeading })(
                isLoading ? HStack(Spinner()).height().padding(cHorizontal, 20) :
                    HStack({ alignment: cLeading, spacing: 10 })(
                        ...ForEach(views as any[])((view: any, index) =>
                            TabItem(view, index, selectedIndexState,colors[index] ?? '#AAAAAA', () => { setSelectedIndexState(index); onChange?.(index); })
                        )
                    ).width(),
                ...ForEach(actions)((action: any, index) =>
                    HStack({ spacing: 5 })(
                        Icon(Icons.Add).fontSize(10),
                        Text(action.title).lineHeight('1')
                    )
                        .width().height().cursor('pointer').padding(5)
                        .background({ hover: '#fafbfc' })
                        .onClick(() => {
                            if (is.function(action.onClick)) {
                                action.onClick();
                            }
                        })
                )
            )
            .width()
            .padding(cHorizontal, 20)
        )
    }
}

