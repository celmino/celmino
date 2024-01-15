
import { useDroppable } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { EventBus } from '@tuval/core';
import { Button, ForEach, Fragment, HStack, Icon, Icons, Spacer, Text, Fragment as UIFragment, UIViewBuilder, UIWidget, VStack, cLeading, useDialog, useEffect, useFormBuilder, useFormController, useNavigate, useOptions, useParams, useState } from '@tuval/forms';
import React, { Fragment as ReactFragment } from 'react';
import SortableTaskItem from './SortableTaskItem';
import { DynoDialog } from "@realmocean/ui";
import { DatePickerRenderer } from '@realmocean/antd';



type BoardSectionProps = {
    id: string;
    title: string;
    items: any[];
    status: any;
};



export const SaveItemAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();


    const views = []
    const { onClick } = formMeta;

    return (
        Button(
            Text('Save Item')
        )
            .onClick(() => {
                onClick?.(formController.GetFormData()).then(() => {
                    dialog.Hide();
                });
            })
    )
});

function BoardSection({ id, items, status }: BoardSectionProps) {

    const { applet_id, workspaceId } = useParams();

    const { attributes: fields = [], onItemSave, onNewFieldAddded = () => void 0 } = useOptions();

    const [mounted, setMounted] = useState(false)

    const [showEdit, setShowEdit] = useState(false);

    const { setNodeRef } = useDroppable({
        id,
    });

    const eventBusHideEditCallback = () => {
        setShowEdit(false);
    }

    const eventBusShowEditCallback = ({ stage_id }) => {
        if (status.$id === stage_id)
            setShowEdit(true);
    }

    useEffect(() => {
        EventBus.Default.on('task.opa.hideedit', eventBusHideEditCallback);
        EventBus.Default.on('task.opa.showedit', eventBusShowEditCallback);
        return () => {
            EventBus.Default.off('task.opa.showedit', eventBusShowEditCallback);
            EventBus.Default.off('task.opa.hideedit', eventBusHideEditCallback);
        }
    })


    return (
        <ReactFragment>
            {
                VStack(
                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            HStack({ alignment: cLeading })(
                                HStack({ alignment: cLeading, spacing: 5 })(
                                    Text(status.name).fontSize(11),
                                    HStack(
                                        Icon(Icons.Edit),
                                        Icon(Icons.Menu),
                                    ).display('var(--show-rename)')
                                )

                                    .height(22)
                                    .padding('0 7px')
                                    .cornerRadius(3)
                                    .border('1px solid transparent')
                                    .foregroundColor(status.fgColor || 'blue')
                                    .background(status.bgColor || 'blue').width()
                            )
                                .height(22).width().paddingRight('10px')
                                .variable('--show-rename', { default: 'none', hover: 'flex' }),

                            Text(items.length.toString() + ' Tasks')
                                .foregroundColor('var(--cu-content-tertiary)')
                                .fontSize(10)
                                .fontWeight('500')
                                .textOverflow('ellipsis')
                                .whiteSpace('nowrap')
                                .textTransform('uppercase')
                        ).allWidth(200).height(30)

                    ).height(),
                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            Text('Name').fontSize(10).fontWeight('500').textTransform('uppercase')
                        ).allWidth(300).height(30),
                        ...ForEach(fields)((field: any) => (
                            (field.key === 'name' || field.hidden) ? Fragment() :
                                HStack({ alignment: cLeading })(
                                    Text(field.name).fontSize(10).fontWeight('500').textTransform('uppercase')
                                ).allWidth(100).height(30)
                        )),
                       
                        /*   items.length > 0 ?
                              HStack(
                                  Text('Assignee').fontSize(10).fontWeight('500').textTransform('uppercase')
                              ).allWidth(100).height(30) : UIFragment(),
                          items.length > 0 ?
                              HStack(
                                  Text('Due date').fontSize(10).fontWeight('500').textTransform('uppercase')
                              ).allWidth(100).height(30) : UIFragment(),
                          items.length > 0 ?
                              HStack(
                                  Text('Priority').fontSize(10).fontWeight('500').textTransform('uppercase')
                              ).allWidth(100).height(30) : UIFragment(), */

                        /* ...ForEach(isCustomFieldsLoading ? [] : customFields)((field: any) =>
                            HStack(
                                Text(field.name).fontSize(10).fontWeight('500').textTransform('uppercase')
    
                            )
                                .allWidth(100).height(30)
                        ), */
                        HStack(
                            UIWidget('com.tuvalsoft.widget.custom-field-popup')
                                .config({
                                    label: '+',
                                    onAction: (data) => onNewFieldAddded(data)
                                })
                        ).width(),
                        HStack(
                            Text('+').fontSize(18).fontWeight('500').cursor('pointer')
                        ).allWidth(100).height(30)
                            .onClick(() => {
                                alert('create custom field')
                                /* createTaskCustomField({
                                    name: 'Test',
                                    type: 'short_text',
                                    entity: {
                                        id: applet?.scope_id,
                                        name: 'item',
                                        type: 'com.type.dsf.com',
                                        subcategory_access: true
                                    },
                                    order_column: 0,
                                    scope_id: applet?.scope_id
                                }) */
                            })
                        ,

                    ).height()
                ).height()
                    .render()
            }
            <SortableContext
                id={id}
                items={items}
                strategy={verticalListSortingStrategy}
            >
                <div ref={setNodeRef} style={{ width: '100%' }}>
                    {items.map((task) => (

                        <SortableTaskItem id={task.$id} task={task} status={status} />

                    ))}
                    {
                        showEdit && /* EditTaskItem(status) */Text('ll').render()
                    }
                </div>
            </SortableContext>
            {
                HStack(
                    Icon(Icons.Add),
                    Text('New Task')
                )
                    .marginTop(5)
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .cursor('pointer')
                    .padding('4px 7px')
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .height(24)
                    .lineHeight('1')
                    .fontSize(11)
                    .fontWeight('400')
                    .foregroundColor('#7c828d')
                    .cornerRadius(3)
                    .background({ hover: 'rgba(188,192,199,.3)' }).width()
                    .onClick(() => {
                        const _fields = {};

                        for (let i = 0; i < fields?.length; i++) {
                            const anyAttribute: any = fields[i];
                            if (anyAttribute.type === 'string') {
                                const stringAttribute = anyAttribute;
                                _fields[stringAttribute.key] = {
                                    label: stringAttribute.name,
                                    type: 'text',
                                    category: 'string',
                                    name: stringAttribute.key
                                }
                            } else if (anyAttribute.type === 'number') {
                                const integerAttribute = anyAttribute;
                                _fields[integerAttribute.key] = {
                                    label: integerAttribute.name,
                                    type: 'number',
                                    category: 'number',
                                    name: integerAttribute.key
                                }
                            } else if (anyAttribute.type === 'boolean') {
                                const integerAttribute = anyAttribute;
                                _fields[integerAttribute.key] = {
                                    label: integerAttribute.name,
                                    type: 'checkbox',
                                    name: integerAttribute.key
                                }
                            } else if (anyAttribute.type === 'datetime') {
                                const integerAttribute = anyAttribute;
                                _fields[integerAttribute.key] = {
                                    label: integerAttribute.name,
                                    type: 'datepicker',
                                    name: integerAttribute.key,
                                    value: new Date(),
                                    renderer: DatePickerRenderer
                                }
                            } else if (anyAttribute.type === 'relationship') {
                                const relationAttribute = anyAttribute;
                                _fields[relationAttribute.key] = {
                                    label: relationAttribute.name,
                                    type: 'relation',
                                    name: relationAttribute.key,
                                    relatedCollection: relationAttribute.relatedCollection,
                                    relationType: relationAttribute.relationType,
                                }
                            }
                        }

                        DynoDialog.Show({
                            "title": `Create Item`,
                            'onClick': onItemSave,
                            /*   "mutation":"_create_workspace", */
                            "actions": [
                                {
                                    "label": "Save",
                                    "type": "saveItem"
                                }
                            ],
                            "fieldMap": {
                                "status": {
                                    "name": "status",
                                    "type": "virtual",
                                    "value": status.$id
                                },
                                ..._fields

                            },
                            "layout": {
                                "type": "category"
                            }
                        })
                        // EventBus.Default.fire('task.opa.hideedit', null);
                        //   setShowEdit(true) ;
                    }/* createTaskUI({ spaceId: space_id, folderId: folder_id, itemId: item_id, stageId: status.id }) */)
                    .render()
            }
        </ReactFragment>

    );
};

export default BoardSection;
