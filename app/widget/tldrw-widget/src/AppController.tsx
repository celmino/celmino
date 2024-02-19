import { ForEach, HStack, Icon, Icons, Spinner, Text, UIController, 
    UINavigate, UIView, WorkProtocol, cHorizontal, cLeading,
     getAppFullName, useNavigate, useProtocol, useState , str2rgb, ReactView} from '@tuval/forms';
import { TabItem } from './views/TabItem';
import { SelectAnalyseDialog } from './SelectAnalyseDialog';
import { is } from '@tuval/core';
import { Models } from '@realmocean/sdk';

import { Tldraw } from '@tldraw/tldraw'

//import '@tldraw/tldraw/tldraw.css'

import React from 'react';

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
            ReactView(
                <Tldraw></Tldraw>
            )
        )
    }
}

