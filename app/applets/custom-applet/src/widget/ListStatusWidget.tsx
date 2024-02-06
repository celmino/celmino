
import { useSessionService } from "@realmocean/services";
import { HStack, Spinner, UIDataTable, WorkProtocol, useDialog, useProtocol, Text, useNavigate, cLeading, SortableListView, VStack, ReactView, cHorizontal, Fragment } from "@tuval/forms";
import BoardSectionList from "../views/components/BoardSectionList";
import React from "react";
import { MultipleContainers } from "../views/components/MultipleContainers";
import { Handle } from "../views/components/Item/components/Handle";
import { CancelDropArguments } from "@dnd-kit/core/dist/components/DndContext/DndContext";
import { Modifier } from "@dnd-kit/core/dist/modifiers";


export const restrictToHorizontalAxis: Modifier = ({ transform, over }) => {
    return {
        ...transform,
        x: 0,
    };

};

const statuses = [
    {
        id: '1',
        title: 'To Do',
        stageId: '1'
    },
    {
        id: '2',
        title: 'In Progress',
        stageId: '1'
    },
    {
        id: '3',
        title: 'Done',
        stageId: '1'
    }
]

const stages = [
    {
        id: "1",
        status_name: "Active Statuses",
        status_background_color: "",
        status_color: ""
    },
    {
        id: "2",
        status_name: "Done Statuses",
        status_background_color: "",
        status_color: ""
    }
]

export const ListStatusWidget = (fieldInfo: any) => {
    /* const dialog = useDialog();
    const navigate = useNavigate();

    const { columns, resource, filter, sort } = fieldInfo;
    const { getList } = useProtocol(WorkProtocol);
    const { data: workspaces, isLoading } = getList('workspaces', {
        filter: {
            tenant_id: useSessionService().TenantId
        }
    }) */


    return (
        VStack(
            ReactView(
                <MultipleContainers handle items={{
                    "Opened Status": [
                        { id: "1", title: "To Do", color: '#D3D3D3' },
                       

                    ],
                    "Active Statuses": [
                   
                        { id: "2", title: "In Progress", color: '#A875FF' },
                        { id: "3", title: "COMPLETE", color: '#6BC950' }

                    ],
                    "Done Statuses": [
                        /* { id: "4", title: "To Do" },
                        { id: "5", title: "In Progress" },
                        { id: "6", title: "Done" } */
                    ],
                    "Closed Status": [
                        { id: "4", title: "COMPLETE", color: '#6BC950' }
                    ]
                }} vertical

                   // modifiers={[restrictToHorizontalAxis]}
                    /*  cancelDrop={(args: CancelDropArguments) => {
                         if (args.over.id === "1")
                             return true;
                         return false
                     }} */
                    placeholderTemplate={({ containerId }) => containerId === 'Done Statuses' ?
                        HStack(
                            Text('Move statuses here to consider tasks Done.')
                                .fontSize(11)
                                .foregroundColor('#2229')
                        )
                            .border('1px dashed #cbc9cf')
                            .height(30)
                        :
                        Fragment()
                    }
                    containerLabelTemplate={({ label }) =>
                        HStack({ alignment: cLeading, spacing: 5 })(
                            Text(label)
                        ).textTransform("uppercase").fontSize(9).fontWeight('500').foregroundColor('rgb(107, 119, 140)')
                            .height(30)

                    }
                    template={(args) => {
                        return (
                            HStack({ alignment: cLeading, spacing: 5 })(
                                (args.value.id !== "1" && args.value.id !== "4") ? args.handleView : HStack().width(13).height(20),
                                HStack().width(10).height(10).background(args.value.color).cornerRadius(2),
                                HStack({ alignment: cLeading })(
                                    Text(args.value.title).fontSize(12).textTransform('uppercase')
                                ).foregroundColor(args.value.color)
                            )
                                .padding(cHorizontal, 5)
                                .border(args.dragOverlay ? '' : '1px solid #d8d8d8')
                                .cornerRadius(3)
                                .height(28).background('white')
                        )
                    }} />
            ).frame(true).width('100%')
        )
    )
}