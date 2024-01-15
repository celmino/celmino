import { is, moment } from '@tuval/core';
import {
    Calendar,
    ConfigContext,
    DialogPosition,
    ForEach,
    HStack, Icon,
    PopupButton,
    Text,
    TooltipPositions,
    UIController, UIView, VStack, cHorizontal, cLeading, cTrailing
} from '@tuval/forms';
import React from 'react';
import { Icons } from './Icons';
import { DynoDialog } from '@realmocean/ui';
import { AddBooleanFieldDialog } from './dialogs/AddBooleanFieldDialog';
import { AddDatetimeFieldDialog } from './dialogs/AddDatetimeField';
import { AddNumberFieldDialog } from './dialogs/AddNumberFieldDialog';
import { AddTextFieldDialog } from './dialogs/AddTextFieldDialog';
import { DefaultLabelView } from './views/DefaultView';
import { AddFormulaField } from './dialogs/AddFormulaField';


let _hideHandle = null;

export class MyTestController extends UIController {
    public override LoadView(): UIView {
        const { label = DefaultLabelView, onAction = () => void 0 } = this.props.config;

        const AttributesMenuItems = [
            {
                title: 'Text',
                icon: Icons.TextAttribute,
                onClick: () => (
                    DynoDialog.Show(AddTextFieldDialog(onAction))
                )
            },
            {
                title: 'Rich Text',
                icon: Icons.RichTextAttribute,
                onClick: () => (
                    DynoDialog.Show(AddNumberFieldDialog(onAction))
                )
            },
            {
                title: 'Number',
                icon: Icons.NumberAttribute,
                onClick: () => (
                    DynoDialog.Show(AddNumberFieldDialog(onAction))
                )
            },
            {
                title: 'Single Select',
                icon: Icons.SingleSelectAttribute
            },
            {
                title: 'Multi Select',
                icon: Icons.MultiSelectAttribute
            },
            {
                title: 'Workflow',
                icon: Icons.WorkflowAttribute
            },
            {
                title: 'Assignments',
                icon: Icons.AssignmentAttribute
            },
            {
                title: 'Date',
                icon: Icons.DateAttribute,
                onClick: () => (
                    DynoDialog.Show(AddDatetimeFieldDialog())
                )
            },
            {
                title: 'Checkbox',
                icon: Icons.CheckboxAttribute,
                onClick: () => (
                    DynoDialog.Show(AddBooleanFieldDialog())
                )
            },
            {
                title: 'URL',
                icon: Icons.URLAttribute
            },
            {
                title: 'Email',
                icon: Icons.EmailAttribute
            },
            {
                title: 'Phone',
                icon: Icons.PhoneAttribute
            },
            {
                title: 'Location',
                icon: Icons.LocationAttribute
            },
            {
                title: 'Avatar',
                icon: Icons.AvatarAttribute
            },
            {
                title: 'Icon',
                icon: Icons.IconAttribute
            },
            {
                title: 'Files',
                icon: Icons.FilesAttribute
            },
            {
                title: 'Comments',
                icon: Icons.CommentsAttribute
            },

            {
                title: 'Formula',
                icon: Icons.RelationAttribute,
                onClick: () => (
                    DynoDialog.Show(AddFormulaField(onAction))
                )
            },
            {
                title: 'Relation to...',
                icon: Icons.RelationAttribute,
                onClick: () => {
                    //DynoDialog.Show(AddRelationFieldDialog())
                }
            }
        ]

        return (
            ConfigContext(() => (
                HStack({ alignment: cTrailing })(
                    PopupButton(
                        is.string(label) ? Text(label) : label
                    )(
                        VStack(
                            ...ForEach(AttributesMenuItems)((item) =>
                                HStack({ alignment: cLeading, spacing: 10 })(
                                    Icon(item.icon),
                                    Text(item.title)
                                )
                                    .background({ hover: 'rgba(81,97,108,.1)' })
                                    .padding()
                                    .cursor('pointer')
                                    .height(32)
                                    .onClick(() => {
                                        _hideHandle();
                                        is.function(item.onClick) ? item.onClick() : void 0;
                                    })
                            )
                        )
                            .width(200)
                            .border('1px solid #EFF0F1')
                            .cornerRadius(6)
                            .margin(-8)
                    )
                        .hideHandle(hideHandle => _hideHandle = hideHandle)
                        .dialogPosition(DialogPosition.BOTTOM_START)

                )
            ))


        )
    }

}

