import { useDroppable } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { EventBus } from '@tuval/core';
import { HStack, Icon, Icons, Text, cLeading, useState } from '@tuval/forms';
import React, { Fragment } from 'react';
import { EditTaskItem } from '../EditTaskItem';
import SortableTaskItem from './SortableTaskItem';
import { Task, TaskStatus } from './types';



type BoardSectionProps = {
    id: string;
    title: string;
    tasks: Task[];
    status: TaskStatus
};

const BoardSection = ({ id, title, tasks, status }: BoardSectionProps) => {



    const [showEdit, setShowEdit] = useState(false);

    const { setNodeRef } = useDroppable({
        id,
    });


    const eventBusHideEditCallback = () => {
        setShowEdit(false);
    }

    const eventBusShowEditCallback = ({ stageId }) => {
        if (status.id === stageId)
            setShowEdit(true);
    }

   /*  useEffect(() => {
        EventBus.Default.on('task.opa.hideedit', eventBusHideEditCallback);
        EventBus.Default.on('task.opa.showedit', eventBusShowEditCallback);
        return () => {
            EventBus.Default.off('task.opa.showedit', eventBusShowEditCallback);
            EventBus.Default.off('task.opa.hideedit', eventBusHideEditCallback);
        }
    }) */


    return (
        <Fragment>
            
            {
                //Stage Header
                HStack({ alignment: cLeading })(
                    HStack({ alignment: cLeading, spacing: 5 })(
                        Text(status.status_name).whiteSpace('nowrap').fontSize(9).fontWeight('500').lineHeight('1.15').foregroundColor('#ababab').textTransform('uppercase').padding('8px 0'),
                    ).height(22).padding('0 7px')
                ).height(32).render()
            }

            <SortableContext
                id={id}
                items={tasks}
                strategy={verticalListSortingStrategy}
            >
                <div ref={setNodeRef} style={{ width: '100%' }}>
                    {tasks.map((task) => (

                        <SortableTaskItem id={task?.id} task={task} status={status} />

                    ))}
                    {
                        showEdit && EditTaskItem(status).render()
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
                    .onClick(() => { EventBus.Default.fire('task.opa.hideedit', null); setShowEdit(true) }/* createTaskUI({ spaceId: space_id, folderId: folder_id, itemId: item_id, stageId: status.id }) */)
                    .render()
            }
        </Fragment>

    );
};

export default BoardSection;
