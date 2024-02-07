import {
    Models, useCreateDocument, useDeleteAttribute, useGetCollection,
    useGetDatabase, useListDocuments, useUpdateCollection
} from "@realmocean/sdk";
import { DynoDialog } from "@realmocean/ui";
import { ButtonRenderer, DatePickerRenderer, InputRenderer } from "@realmocean/antd";
import { is } from "@tuval/core";
import {
    Button,
    CheckBox,
    DialogPosition,
    ForEach,
    Fragment,
    Geometry,
    HStack,
    Icon,
    Input,
    MenuButton,
    PopupButton,
    Text,
    Icons as TuvalIcons,
    UIDataTable,
    UIFormController, UIView,
    UIViewBuilder,
    UIWidget,
    VStack,
    cHorizontal,
    cLeading,
    cTopLeading,
    cTrailing,
    css,
    useParams
} from "@tuval/forms";
import { useState } from "react";
import { Icons } from "../../Icons";
import { ColorItemView } from "./views/ColorItemView";
import { AddTextFieldDialog } from "../../dialogs/AddTextAttributeDialog";

/* import { AddBooleanFieldDialog } from "../dialogs/AddBooleanFieldDialog";
import { AddDatetimeFieldDialog } from "../dialogs/AddDatetimeField";
import { AddNumberFieldDialog } from "../dialogs/AddNumberFieldDialog";
import { AddRelationFieldDialog } from "../dialogs/AddRelationDialog";
import { AddTextFieldDialog } from "../dialogs/AddTextFieldDialog"; */

const colors = [
    '#4A4A4A',
    '#6A849B',
    '#BEC5CC',
    '#D40915',
    '#E72065',
    '#9C2BAF',
    '#673DB6',
    '#3E53B4',
    '#2978FB',
    '#199EE3',
    '#1FBED3',
    '#159789',
    '#4FAF54',
    '#8EC351',
    '#FBA32F',
    '#FC551F',
    '#B04E31'
]

const tableStyle = css`
    border-spacing: 0px;
    width: 100%;
`

const headerCell = css`
    font-family:"Inter var", sans-serif;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    text-align: left;
    box-shadow:rgba(193, 200, 205, 0.5) -1px 0px 0px 0px inset, rgba(193, 200, 205, 0.5) 0px -1px 0px 0px inset;
    font-weight: 700;
    color: rgb(109, 122, 131);
    background: #F9FAFB;
    transition: box-shadow 0.2s;
`

const bodyRow = css`
    background: #ffffff;
    color: #4b5563;
    transition: box-shadow 0.2s;
`

const bodyCell = css`
    box-shadow:rgba(193, 200, 205, 0.5) -1px 0px 0px 0px inset, rgba(193, 200, 205, 0.5) 0px -1px 0px 0px inset;
`

const paginator = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-width: 0 0 1px 0;
    border-radius: 0;

    & .p-paginator-first {
        background-color: transparent;
        border: 0 none;
        color: #6b7280;
        min-width: 3rem;
        height: 3rem;
        margin: 0.143rem;
        transition: box-shadow 0.2s;
        border-radius: 50%;
    }

`



function getAttributeIcon(type: string) {
    switch (type) {
        case 'text':
            return Icons.TextAttribute;
        case 'integer':
            return Icons.NumberAttribute;
        case 'boolean':
            return Icons.CheckboxAttribute;
        case 'datetime':
            return Icons.DateAttribute;
        default:
            return Icons.TextAttribute;
    }
}

let _hideHandle = null;
export class CollectionController extends UIFormController {
    public override LoadView(): UIView {
        const { workspaceId, appletId: databaseId, collectionId } = useParams();


        const AttributesMenuItems = [
            {
                title: 'Text',
                icon: Icons.TextAttribute,
                onClick: () => (
                    DynoDialog.Show(AddTextFieldDialog(workspaceId, databaseId, collectionId))
                )
            },
            {
                title: 'Rich Text',
                icon: Icons.RichTextAttribute,
                onClick: () => (
                    alert()
                    //  DynoDialog.Show(AddNumberFieldDialog(workspaceId, databaseId, collectionId))
                )
            },
            {
                title: 'Number',
                icon: Icons.NumberAttribute,
                onClick: () => (
                    alert() // DynoDialog.Show(AddNumberFieldDialog(workspaceId, databaseId, collectionId))
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
                    alert() //DynoDialog.Show(AddDatetimeFieldDialog(workspaceId, databaseId, collectionId))
                )
            },
            {
                title: 'Checkbox',
                icon: Icons.CheckboxAttribute,
                onClick: () => (
                    alert() // DynoDialog.Show(AddBooleanFieldDialog(workspaceId, databaseId, collectionId))
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
                title: 'Relation to...',
                icon: Icons.RelationAttribute,
                onClick: () => {
                    alert() //DynoDialog.Show(AddRelationFieldDialog(workspaceId,databaseId, collectionId))
                }
            }
        ]

        const { database } = useGetDatabase(workspaceId, databaseId);
        const { deleteAttribute } = useDeleteAttribute(workspaceId);

        const { updateCollection } = useUpdateCollection(workspaceId);

        //const { createDocument } = useCreateDocument(workspaceId);
        const { documents } = useListDocuments(workspaceId, databaseId, collectionId);

        const { collection }: { collection: Models.Collection } = useGetCollection(workspaceId, databaseId, collectionId);
        const [collectionName, setCollectionName] = useState<string>(collection?.name ?? 'New Collection');
        const [showDialog, setShowDialog] = useState<boolean>(false);


        let index = 1;
        return (
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    HStack({ alignment: cLeading })(
                        Geometry(({ x, y }) =>
                            HStack({ alignment: cLeading, spacing: 5 })(
                                showDialog ?
                                    HStack({ alignment: cTopLeading })(
                                        VStack({ alignment: cTopLeading, spacing: 10 })(
                                            //Text(JSON.stringify(params))
                                            Input()
                                                .autoFocus(true)
                                                .renderer(InputRenderer)
                                                .value(collection?.name)
                                                .fontSize(18)
                                                .prefix(
                                                    Icon(Icons.Collection)
                                                )
                                                .onChange((e: any) => setCollectionName(e.target.value))
                                                .onBlur(value => {
                                                    if (collectionName !== '' && collectionName !== collection?.name) {
                                                        updateCollection({
                                                            databaseId,
                                                            collectionId,
                                                            name: collectionName
                                                        })
                                                    }

                                                }),
                                            HStack({ alignment: cTopLeading, spacing: 2 })(
                                                ...ForEach(colors)((color) => (
                                                    ColorItemView(color)
                                                )
                                                )
                                            ).wrap('wrap')
                                        )
                                    )
                                        .onClickAway(() => {
                                            if (collectionName !== '' && collectionName !== collection?.name) {
                                                updateCollection({
                                                    databaseId,
                                                    collectionId,
                                                    name: collectionName
                                                })
                                            }
                                            setShowDialog(false);
                                        })
                                        .zIndex(10)
                                        .transform(`translate3d(${x}px, ${y}px, 0px)`)
                                        .position('fixed')
                                        .inset('0px auto auto 0px')
                                        .background('white')
                                        .shadow('0 0 0 1px hsla(205,9%,47%,.1),0 12px 16px -4px hsla(205,9%,47%,.3)')
                                        .width(330)
                                        .height(200)
                                        .cornerRadius(8)
                                        .padding(12)
                                    : Fragment(),
                                HStack(
                                    Icon(Icons.Collection)
                                )
                                    // .background('#FCE8E8')
                                    .width(32)
                                    .height(32)
                                    .cornerRadius(5),
                                Text(collection?.name)
                                    .fontSize(18)
                                    .fontWeight('500')
                                    .foregroundColor('#212526')
                                    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                                    .onClick(() => {
                                        setCollectionName(collection?.name);
                                        setShowDialog(true);
                                    })
                            )
                                .width()

                        )
                    ).width(300),

                    HStack({ alignment: cTopLeading })(

                        UIWidget('com.tuvalsoft.widget.editorjs')
                            .config({
                                scrollable: false
                            })
                    )

                    ,
                    HStack({ alignment: cTrailing })(
                        UIViewBuilder(() => {
                            const [menuIsOpen, setMenuIsOpen] = useState(false);
                            return (
                                PopupButton(
                                    HStack(
                                        Icon(Icons.Plus).foregroundColor(menuIsOpen ? 'white' : ''),
                                        Text('New Field')
                                            .foregroundColor(menuIsOpen ? 'white' : '')
                                            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'")
                                            .fontSize(14)
                                            .fontWeight('500')
                                    )
                                        .width()

                                        .height(30)
                                        .padding(cHorizontal, 12)
                                        .foregroundColor('hsl(205, 9%, 47%)')
                                        .background({ default: menuIsOpen ? '#6D7A83' : '', hover: menuIsOpen ? '#6D7A83' : 'rgba(109,122,131,0.15)' })
                                        //.border({ hover: '1px solid rgba(255, 255, 255, 0)' })
                                        .cornerRadius(6)
                                        .transition('all .15s ease-out')
                                        .cursor('pointer')
                                        .onClick(() => {
                                            setMenuIsOpen(!menuIsOpen);
                                        })
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
                                        .marginTop(8)
                                        .border('1px solid #EFF0F1')
                                        .cornerRadius(6)
                                )
                                    .hideHandle(hideHandle => _hideHandle = hideHandle)
                                    .dialogPosition(DialogPosition.BOTTOM_END)
                                    .onDidHide(() => setMenuIsOpen(false))
                            )
                        })


                    ).width()


                )

                    .height()
                    .background('#F9FAFB')
                    .minHeight(60)
                    .paddingLeft('10px')
                    .paddingTop('12px')
                    .paddingRight('24px')
                    .paddingBottom('8px')
                    .borderBottom('1px solid rgba(0,0,0,.05)'),
                UIDataTable()
                    .dataTablePT({
                        table: tableStyle,
                        bodyRow,
                        paginator


                    })
                    .columnPT({
                        headerCell,

                        bodyCell
                    })
                    .columns([{
                        field: 'indexNo',
                        width: '80px',
                        header: '',
                        align: 'right',
                        body: (row) => {
                            return (
                                HStack({ alignment: cTrailing })(
                                    Text(row['indexNo'])
                                )
                                    .paddingRight('8px')
                                    .height(38)
                            )
                        }
                    }, ...(collection?.attributes ?? []).map((column: any) => {
                        return {
                            field: column.key,
                            dataType: "boolean",
                            header: (data) => (
                                HStack({ alignment: cLeading, spacing: 5 })(
                                    Icon(getAttributeIcon(column.type))
                                        .width(20)
                                        .height(20),
                                    Text(column.key)
                                        .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
                                        .foregroundColor('rgb(109, 122, 131)')
                                        .fontSize(14),
                                    HStack({ alignment: cTrailing })(
                                        MenuButton()
                                            .model([
                                                {
                                                    title: 'Edit',
                                                    onClick: () => {
                                                        DynoDialog.Show(AddTextFieldDialog(workspaceId, databaseId, collectionId))
                                                    }
                                                },
                                                {
                                                    title: 'Delete',
                                                    onClick: () => {
                                                        deleteAttribute({
                                                            databaseId,
                                                            collectionId,
                                                            key: column.key
                                                        })
                                                        //  DynoDialog.Show(AddTextFieldDialog(databaseId, collectionId))
                                                    }
                                                }
                                            ])
                                            .icon(TuvalIcons.Menu)
                                    )
                                        .opacity('var(--hoverOpacity)')
                                )
                                    .padding(8)
                                    .variable('--hoverOpacity', {
                                        default: '0',
                                        hover: '1'
                                    })
                            ),
                            body: (row) => {
                                if (column.type === 'boolean') {
                                    const values = row[column.key];
                                    return (
                                        CheckBox().checked(row[column.key])
                                    )
                                } else if (column.type === 'relationship') {
                                    const values = row[column.key];

                                    return (
                                        HStack({ alignment: cLeading })(
                                            ...ForEach(values)((value: any) => (
                                                HStack({ spacing: 5 })(
                                                    HStack(
                                                        Icon(Icons.Relation)
                                                    )
                                                        .width()
                                                        .height()
                                                        .foregroundColor('rgb(79, 175, 84)'),
                                                    Text(value.Name),
                                                    Icon(Icons.RightArrow)
                                                )
                                                    .width()
                                                    .height()
                                                    .border('solid 1px #E9EBED')
                                                    .cornerRadius(6)
                                                    .padding(2)
                                            )
                                            )
                                        )
                                    )
                                } else {
                                    return (
                                        HStack({ alignment: cLeading })(
                                            Text(row[column.key])
                                        )
                                            .paddingLeft('8px')
                                            .height(38)
                                    )
                                }
                            }

                        }
                    })])
                    .model(documents?.map((document, index) => {
                        return {
                            indexNo: index + 1,
                            ...document
                        }
                    })),

                Button()
                    .label('Create Document')
                    .renderer(ButtonRenderer)
                    .onClick(() => {
                        const fields = {};

                        for (let i = 0; i < collection?.attributes?.length; i++) {
                            const anyAttribute: any = collection?.attributes[i];
                            if (anyAttribute.type === 'string') {
                                const stringAttribute: Models.AttributeString = anyAttribute;
                                fields[stringAttribute.key] = {
                                    label: stringAttribute.key,
                                    type: 'text',
                                    name: stringAttribute.key
                                }
                            } else if (anyAttribute.type === 'integer') {
                                const integerAttribute: Models.AttributeInteger = anyAttribute;
                                fields[integerAttribute.key] = {
                                    label: integerAttribute.key,
                                    type: 'number',
                                    name: integerAttribute.key
                                }
                            } else if (anyAttribute.type === 'boolean') {
                                const integerAttribute: Models.AttributeBoolean = anyAttribute;
                                fields[integerAttribute.key] = {
                                    label: integerAttribute.key,
                                    type: 'checkbox',
                                    name: integerAttribute.key
                                }
                            } else if (anyAttribute.type === 'datetime') {
                                const integerAttribute: Models.AttributeDatetime = anyAttribute;
                                fields[integerAttribute.key] = {
                                    label: integerAttribute.key,
                                    type: 'datepicker',
                                    name: integerAttribute.key,
                                    value: new Date(),
                                    renderer: DatePickerRenderer
                                }
                            } else if (anyAttribute.type === 'relationship') {
                                const relationAttribute: Models.AttributeRelationship = anyAttribute;
                                fields[relationAttribute.key] = {
                                    label: relationAttribute.key,
                                    type: 'relation',
                                    name: relationAttribute.key,
                                    relatedCollection: relationAttribute.relatedCollection,
                                    relationType: relationAttribute.relationType,
                                }
                            }
                        }

                        DynoDialog.Show({
                            "title": `Create ${collection?.name}`,
                            "actions": [
                                {
                                    "label": "Save",
                                    "type": "ca_SaveDocument"
                                }
                            ],
                            "fieldMap": {
                                "workspaceId": {
                                    "name": "workspaceId",
                                    "type": "virtual",
                                    "value": workspaceId
                                },
                                "databaseId": {
                                    "name": "databaseId",
                                    "type": "virtual",
                                    "value": databaseId
                                },
                                "collectionId": {
                                    "name": "collectionId",
                                    "type": "virtual",
                                    "value": collectionId
                                },
                                ...fields

                            }
                        }
                        );

                    }),



            )
        )
    }
}