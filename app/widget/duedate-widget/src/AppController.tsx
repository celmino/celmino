import { moment } from '@tuval/core';
import {
    Calendar, DialogPosition,
    HStack, Icon,
    PopupButton,
    Text,
    TooltipPositions,
    UIController, UIView, VStack
} from '@tuval/forms';
import React from 'react';


export const Duedate = () => (
    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" >
        <g fill='none' fill-rule="evenodd" >
            <circle cx="18" cy="18" r="17.5" stroke-dasharray="3" stroke="#b9bec7"></circle>
            <rect x="9.4" y="10.3" width="17.1" height="15.3" rx="2" stroke="#b9bec7"></rect>
            <path d="M14.4 20.2339051L16.5687413 22.05 21.6 17.55" stroke="#b9bec7"></path>
        </g>
        <path fill-rule="nonzero" d="M9.9 14.4H26.1V15.4H9.9zM12.6 8.1H13.6V12.6H12.6zM22.5 8.1H23.5V12.6H22.5z" fill='#b9bec7'></path>
    </svg>
)

export class MyTestController extends UIController {
    public override LoadView(): UIView {

        const { value, onChange } = this.props.config;

        let _hideHandle;

        const month = moment(value).format('MMM');
        const day = moment(value).format('DD');
        return (
            PopupButton(
                HStack(
                    value ?
                        Text(`${month} ${day}`).fontSize(11).whiteSpace('nowrap') :
                        Icon(Duedate).width(32).height(32)
                ).width(36).height(36)
                    //.border('solid 1px #EAEAEA')
                    .cornerRadius('50%').padding(3)
                    .cursor('pointer')
                    .tooltip('Set Due Date')
                    .tooltipPosition(TooltipPositions.TOP)
            )(
                VStack({ spacing: 10 })(
                    Calendar()
                        .onChange((d) => {
                            onChange(d);
                            _hideHandle();
                        })
                ).height().width()
            )
                .hideHandle(hideHandle => _hideHandle = hideHandle)
                .dialogPosition(DialogPosition.BOTTOM_START))
    }

}

