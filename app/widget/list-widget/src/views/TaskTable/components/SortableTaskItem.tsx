
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
    cLeading, ForEach, Fragment, Heading, HStack, Icon, Icons, ReactView, Spacer, Text, UIViewBuilder, UIWidget,
    useDialogStack, useNavigate, useOptions, useParams
} from '@tuval/forms';
import React from 'react';
//import { TaskController } from '../../../controllers/TaskController';
import { StatusMarker } from '../StatusMarker';
import { RendererProxy } from '../../renderers/RendererProxy';
import { tokenizeExpression, parseExpression, evaluateExpression } from '../../../expression';






type SortableTaskItemProps = {

    id: string;
    item: any,
    status: any
};

const SortableTaskItem = ({ id, task: item, status }/* : SortableTaskItemProps */) => UIViewBuilder(() => {


    const { onItemClick = void 0, attributes: fields = [] } = useOptions();

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

    /*   const { assignResponsibleToTask } = useAssignResponsibleToTask();
      const { updateTask } = useUpdateTask(); */

    const { access_type, team_id, applet_id, view_id } = useParams();
    const navigate = useNavigate();



    const { openDialog } = useDialogStack();

    return (
        ReactView(
            <div ref={setNodeRef} style={style} {...attributes}   >
                {
                    /* isDragging ?
                    HStack(
                        HDivider().background('blue').height(2)
                    )
                    .height()
                    .render()
                    : */
                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            ReactView(
                                <div {...listeners} style={{ cursor: 'move' }}>{
                                    HStack(
                                        Icon(Icons.Drag).size(15).foregroundColor('lightgray')
                                    ).allWidth(15).allHeight(15)
                                        .render()
                                }</div>
                            ),
                            StatusMarker(status),
                            HStack({ alignment: cLeading })(
                                Heading(item?.name).ellipsis(true).ellipsisMaxLines(1).fontSize(14).fontWeight('400')

                            ).allWidth(250).height()
                                .cursor('pointer')
                                .onClick(() => {
                                    onItemClick(item);
                                }

                                )
                        ).allWidth(300).allHeight(30),

                        ...ForEach(fields)((field: any) => (
                            (field.key === 'name' || field.hidden) ? Fragment() :
                                RendererProxy(item,fields, field)
                        )),
                      
                        HStack().allWidth(100)
                    )
                        .zIndex({ hover: '100' })
                        .background(isDragging ? 'rgba(255,255,255,1)' : { default: 'rgba(255,255,255,1)', hover: 'rgb(247,248,249)' } as any)
                        .borderBottom('solid 1px rgb(240, 241, 243)')
                        .shadow({ default: isDragging ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : '0 8px 8px -8px rgba(0,0,0, 0.1)', hover: '4px 3px 6px -3px var(--ui-border-color)' })
                        //.border('solid 1px gray')
                        .allHeight(36)
                        .variable('--show-rename', { default: '0', hover: '1' })
                        .render()
                }
            </div>
        )

    );
}).render()



export default SortableTaskItem;
