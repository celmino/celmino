import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cLeading, HDivider, HStack, Icon, Icons, ReactView, Spacer, Text, TextField, UIWidget } from '@tuval/forms';
import { Task, TaskStatus } from './types';
import { statusColor } from './data';
import { TaskIcons } from '../TaslIcons';
import { InlineActionButton } from '../InlineActionButton';
import { StatusMarker } from '../StatusMarker';




type SortableTaskItemProps = {

    id: string;
    task: Task,
    status: TaskStatus
};

const SortableTaskItem = ({ id, task, status }: SortableTaskItemProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0 : 1,
        // background:isDragging ? 'blue' : '',
    };

    return (
        <div ref={setNodeRef} style={style}  >
            {
                /* isDragging ?
                HStack(
                    HDivider().background('blue').height(2)
                )
                .height()
                .render()
                : */
                HStack({ alignment: cLeading })(
                    ReactView(
                        <div {...attributes}  {...listeners}>{
                            HStack(
                            Icon('\\d338').fontSize(16).cursor('move')
                            )
                            .foregroundColor('#DBDBDB')
                            .cursor('move')
                            .render()
                        }</div>
                    ),
                   Text(task?.title)
                )
                    .zIndex({ hover: '100' })
                    .background(isDragging ? 'rgba(255,255,255,1)' : { default: 'rgba(255,255,255,1)', hover: 'rgb(247,248,249)' } as any)
                    .borderBottom('solid 1px rgb(240, 241, 243)')
                    //.shadow({ default: isDragging ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : '0 8px 8px -8px rgba(0,0,0, 0.1)', hover: '4px 3px 6px -3px var(--ui-border-color)' })
                    //.border('solid 1px gray')
                    .allHeight(36)
                    .variable('--show-rename', { default: '0', hover: '1' })
                    .render()
            }
        </div>

    );


};

export default SortableTaskItem;
