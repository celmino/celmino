import {
    DialogPosition,
    ForEach,
    Fragment,
    HStack, Icon, OptionsContext, PopupButton,
    ReactView,
    ScrollView,
    Segmented,
    Spinner,
    SvgIcon,
    Text, TextField,
    UIController, UIFormController, UIView, VStack,
    cTopLeading, cVertical, useEffect,
    useState
} from '@tuval/forms';
import { TuRectangle, TuShape, TuView, TuViewGridStyle, TuViewSnapStyle, ViewRenderingMode } from '@realmocean/diagram';
import { CGSize } from "@tuval/cg";

import { useGetAccount, useGetTenantAccounts } from '@celmino/directoryprotocol';
import { is } from '@tuval/core';
import { useClickAway } from "@uidotdev/usehooks";
import { CuIcons, Icons } from './Icons';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import React from 'react';
import { SegmentedRenderer } from '@realmocean/antd';
import { TaskTable2 } from './views/TaskTable/TaskTable2';
import { Brushes, Pens } from '@tuval/graphics';
import { evaluateExpression, parseExpression, printExpression, tokenizeExpression } from './expression';



export class MyTestController extends UIFormController {

    public override LoadView(): UIView {

       


        const tuView = new TuView();
        //tuView.GridStyle = TuViewGridStyle.Dot;
        tuView.GridSnapDrag = TuViewSnapStyle.Jump;
        tuView.GridCellSize = new CGSize(10, 10)

        tuView.Width = 2000;
        tuView.Height = 3000;
        tuView.RenderingMode = ViewRenderingMode.Canvas;

        const rect = new TuRectangle();
        rect.Left = 0;
        rect.Top = 0;
        rect.Width = 150;
        rect.Height = 105;
        rect.Pen = Pens.Black;
        rect.Brush = Brushes.White;

        tuView.Document.Add(rect);

        const rect1 = new TuRectangle();
        rect1.Left = 320;
        rect1.Top = 230;
        rect1.Width = 150;
        rect1.Height = 105;
        rect1.Pen = Pens.Black;
        rect1.Brush = Brushes.Green;

        tuView.Document.Add(rect1);

        const { attributes, items, groupBy, onItemClick } = this.props.config;
        const field = attributes.find((field) => field.key === groupBy);
        let groups = [];

        if (field?.type === 'dropdown') {
            const { options = [] } = JSON.parse(field.type_content ?? '{}');
            groups = options;
        }

        return (

            OptionsContext(() =>
                VStack({ alignment: cTopLeading })(
                    // tuView as any,

                    ScrollView({ axes: cVertical, alignment: cTopLeading })(
                        VStack({ alignment: cTopLeading })(
                            VStack({ alignment: cTopLeading })(

                                VStack({ alignment: cTopLeading })(
                                    TaskTable2(items, groups)
                                )
                            )
                        )
                            .cornerRadius(10)
                            .padding(20),

                        HStack().height(50)
                    )
                )
            )
                .options(this.props.config)


        )
    }
}

