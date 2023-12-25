import {
    DialogPosition, DirectoryProtocol, ForEach, Fragment, HStack, Icon, Icons, PopupButton, ReactView, ScrollView,
    TaskProtocol, Text, TextField, TooltipPositions, UIAvatar, UIController, UIView, VStack, cHorizontal, cLeading, cTopLeading, useEffect, useProtocol, useState
} from '@tuval/forms';

import React, { Fragment as _Fragment, } from 'react';
import { is } from '@tuval/core';
import { usePopper } from 'react-popper';
import { useClickAway } from "@uidotdev/usehooks";
import { UserAvatar } from './views/UserAvatar';
import { Models, useGetCurrentTeam, useGetTeamMembership, useListTeamMemberships, useGetUser } from '@celmino/sdk';


export const Assignee = () => (

    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'}
        className="ng-star-inserted"><g _ngcontent-plw-c186="" fill="none" fill-rule="evenodd">
            <circle _ngcontent-plw-c186="" cx="18" cy="18" r="17.5" stroke-dasharray="3" stroke={'#c1c1c1'}></circle>
            <path stroke={'#c1c1c1'} d="M10.35,25.65 C10.35,20.9555796 13.7836186,17.15 18,17.15 C22.2249783,17.15 25.65,20.9651318 25.65,
              25.65" stroke-linecap="round" ></path>
            <circle stroke={'#c1c1c1'} cx="18" cy="12.9" r="4.3" className="cu-stroke"></circle>
            <circle fill={'#c1c1c1'} fill-rule="nonzero" cx="27.4" cy="27.4" r="7.7" >
            </circle><path d="M28.2,26.5 L28.2,23.946088 C28.2,23.4873147 27.819442,23.1 27.35,23.1 C26.8772851,23.1 26.5,
              23.4788065 26.5,23.946088 L26.5,26.5 L23.946088,26.5 C23.4873147,26.5 23.1,26.880558 23.1,27.35 C23.1,
              27.8227149 23.4788065,28.2 23.946088,28.2 L26.5,28.2 L26.5,30.753912 C26.5,31.2126853 26.880558,31.6 27.35,
              31.6 C27.8227149,31.6 28.2,31.2211935 28.2,30.753912 L28.2,28.2 L30.753912,28.2 C31.2126853,28.2 31.6,
              27.819442 31.6,27.35 C31.6,26.8772851 31.2211935,26.5 30.753912,26.5 L28.2,26.5 Z" fill="#FFF" fill-rule="nonzero"></path></g>
    </svg>
)



const Assignees = () => (
    <svg aria-hidden="true" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'}  >
        <g fill="none" fill-rule="evenodd">
            <circle cx="18" cy="18" r="17.5" stroke-dasharray="3" stroke='#c1c1c1'></circle>
            <g transform="translate(8.1 9.9)" stroke='#c1c1c1'>
                <path d="M3.6 16.2C3.6 12.2235498 6.42768594 9 9.9 9 13.3793939 9 16.2 12.2316411 16.2 16.2M6.32989412 5.86608027C5.77082649 5.56660058 5.15158583 5.4 4.5 5.4 2.01977567 5.4 0 7.81766235 0 10.8M19.8 10.8C19.8 7.82373081 17.7852813 5.4 15.3 5.4 14.6488874 5.4 14.0295078 5.56661956 13.4700731 5.86633373" stroke-linecap="round"></path><circle _ngcontent-ng-c3875430379="" cx="9.9" cy="5.4" r="3.6"></circle><path _ngcontent-ng-c3875430379="" d="M12.6216451,3.04350737 C12.6073618,2.9310179 12.6,2.81636867 12.6,2.7 C12.6,1.20883117 13.8088312,
              0 15.3,0 C16.7911688,0 18,1.20883117 18,2.7 C18,4.19116882 16.7911688,5.4 15.3,5.4 C14.5686355,
              5.4 13.9051886,5.10920978 13.4189705,4.63694028 M6.38102953,4.63694028 C5.89481133,5.10920978 5.23136452,
              5.4 4.5,5.4 C3.00883118,5.4 1.8,4.19116882 1.8,2.7 C1.8,1.20883117 3.00883118,0 4.5,0 C5.99116883,0 7.2,
              1.20883117 7.2,2.7 C7.2,2.81636867 7.1926382,2.9310179 7.17835491,3.04350737"></path></g>
            <circle fill-rule="nonzero" cx="27.9" cy="27.9" r="8.1" fill='#c1c1c1'></circle>
            <path d="M28.8,27 L28.8,24.2958578 C28.8,23.810098 28.3970562,23.4 27.9,23.4 C27.3994783,23.4 27,
            23.8010892 27,24.2958578 L27,27 L24.2958578,27 C23.810098,27 23.4,27.4029438 23.4,27.9 C23.4,
            28.4005217 23.8010892,28.8 24.2958578,28.8 L27,28.8 L27,31.5041422 C27,31.989902 27.4029438,32.4 27.9,
            32.4 C28.4005217,32.4 28.8,31.9989108 28.8,31.5041422 L28.8,28.8 L31.5041422,28.8 C31.989902,28.8 32.4,
            28.3970562 32.4,27.9 C32.4,27.3994783 31.9989108,27 31.5041422,27 L28.8,27 Z" fill="#FFF" fill-rule="nonzero"></path></g></svg>
)

export class MyTestController extends UIController {
    public override LoadView(): UIView {
        let _hideHandle;

        const { onChange = void 0, tenant_id, isMultiSelect = false, width = 36, height = 36, tooltip = '', readonly = false } = this.props.config || {};

        const [selectedAccountId, setSelectedAccountId] = useState(this.props.config.selectedAccountId);

        const { team } = useGetCurrentTeam();
        const { memberships }: { memberships: Models.MembershipList } = useListTeamMemberships(team);
        const { user }: { user: Models.User<any> } = useGetUser(selectedAccountId);
        /*  const { accounts, isLoading } = useGetTenantAccounts({ tenant_id });
         const { account } = useGetAccount(selectedAccountId);
  */

        useEffect(() => {
            setSelectedAccountId(this.props.config.selectedAccountId);
        }, [this.props.config.selectedAccountId])

        const [isOpen, setIsOpen] = useState(false);

        const ref = useClickAway(() => {
            setIsOpen(false);
        });


        return (
            readonly ? UserAvatar(user, width, height) :
                PopupButton(
                    selectedAccountId ?
                        UserAvatar(user, width, height)
                        :
                        HStack(
                            isMultiSelect ?
                                Icon(Assignees)
                                :
                                Icon(Assignee)
                        ).allWidth(width).allHeight(height)
                            .tooltip(tooltip)
                            .tooltipPosition(TooltipPositions.TOP)
                            .overflow('hidden')
                            //.border('solid 1px #EAEAEA')
                            .cornerRadius('50%').padding(3)
                            .cursor('pointer')
                            .onClick(() => setIsOpen(true))
                )(

                    VStack({ spacing: 10 })(
                        HStack(
                            HStack(
                                TextField().paddingLeft('25px').placeholder('Search...')
                                    .border('none').shadow({ focus: 'none' }),
                                Icon(Icons.Search).position('absolute').left('8px').top('12px')
                            ).height().padding(5)
                        )
                            .borderBottom('1px solid #E8EAED')
                            .height(),
                        ScrollView(
                            VStack({ alignment: cTopLeading, spacing: 5 })(
                                ...ForEach(memberships?.memberships)((account) =>
                                    HStack(
                                        HStack({ alignment: cLeading, spacing: 10 })(
                                            UIAvatar(
                                                Text(`${account?.userName?.[0]?.toUpperCase()}`)
                                            ),
                                            Text(account?.userName)
                                        ).background({ hover: '#F0F1F3' }).height(44).padding(cHorizontal, 10)
                                            .cornerRadius(10)
                                    )
                                        .cursor('pointer')
                                        .height().onClick(() => {
                                            if (is.function(onChange)) {
                                                onChange(account);
                                            }
                                            setSelectedAccountId(user?.$id);
                                            _hideHandle();
                                        })
                                )
                            ).height()
                        )
                    ).height(300).width(250).padding(2)




                )
                    //.open(isOpen)
                    .hideHandle(hideHandle => _hideHandle = hideHandle)
                    .dialogPosition(DialogPosition.BOTTOM_START))

    }

}

