
import {
    DndContext,
    closestCenter,
    useDroppable,
    useSensors,
    useSensor,
    MouseSensor
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { is } from "@tuval/core";
import { cLeading, cTopLeading, ForEach, HStack, Icon, Icons, ReactView, Text, VStack } from "@tuval/forms";
import React, { useState, Fragment } from "react";

const containerStyle = {
    background: "#dadada",
    padding: 10,
    margin: 10,
    flex: 1
};

function Container(props) {
    const { id, items } = props;

    const { setNodeRef } = useDroppable({
        id
    });

    return (
        <SortableContext
            id={id}
            items={items}
            strategy={verticalListSortingStrategy}
        >
            <div ref={setNodeRef} style={containerStyle}>
                {items.map((id) => (
                    <SortableItem key={id} id={id} />
                ))}
            </div>
        </SortableContext>
    );
}

export function SortableItem(props) {
    // props.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: props.id });


    console.log(isDragging)

    console.log(attributes)

    return (

        <div ref={setNodeRef} style={{
            zIndex: isDragging ? 1 : 0,
            position: 'relative',
            transform: CSS.Transform.toString(transform),
            transition
        }} {...attributes} {...listeners}>
            {
                HStack({ alignment: cLeading })(
                    Text(props.task.taskName),
                    HStack(
                        Icon(Icons.API)
                    ).height().width().opacity('var(--show-rename)')
                )
                    .background(isDragging ? 'rgba(255,255,255,1)' : { default: 'rgba(255,255,255,1)', hover: 'rgb(247,248,249)' } as any)
                    .borderBottom('solid 1px rgb(240, 241, 243)')
                    .shadow(isDragging ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : '')
                    //.border('solid 1px gray')
                    .allHeight(36)
                    .variable('--show-rename', { default: '0', hover: '1' })
                    .render()
            }
        </div>
    )
}

function App(props) {
    const [languages, setLanguages] = useState(props.model);

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            }
        })
    );


    const status = {}
    for (let i = 0; i < languages.length; i++) {
        if (!is.array(status[languages[i].statu])) {
            status[languages[i].statu] = []
        }

        status[languages[i].statu].push(languages[i])
    }



    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            {
                VStack({alignment:cTopLeading, spacing:20})(
                    ...ForEach(Object.keys(status))(key =>
                        VStack({ alignment: cTopLeading })(
                            HStack({ alignment: cLeading, spacing: 5 })(
                                Text(key),
                                HStack(
                                    Icon(Icons.Edit),
                                    Icon(Icons.Menu),
                                ).display('var(--show-rename)')
                            )
                                .variable('--show-rename', { default: 'none', hover: 'flex' })
                                .height(22)
                                .padding('0 7px')
                                .cornerRadius('3px 3px 0 0')
                                .border('1px solid transparent')
                                .foregroundColor('white')
                                .background('rgb(128, 0, 0)').width(),
                            ReactView(

                                <div style={{ "width": "100%" }} >
                                    <SortableContext
                                    id=""
                                        items={status[key]}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {/* We need components that use the useSortable hook */}
                                        {status[key].map(language => <SortableItem key={language.id} id={language.id} task={language} />)}
                                    </SortableContext>
                                </div>


                            ),
                            HStack(
                                Icon(Icons.Add),
                                Text('New Task')
                            )
                                .padding('4px 7px')
                                .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                                .height(24)
                                .lineHeight('1')
                                .fontSize(11)
                                .fontWeight('400')
                                .foregroundColor('#7c828d')
                                .cornerRadius(3)
                                .background({ hover: 'rgba(188,192,199,.3)' }).width(),


                        )
                    )

                ).height().render()
            }


        </DndContext>
    );

    function handleDragEnd(event) {
       
        console.log("Drag end called");
        const { active, over } = event;
        console.log("ACTIVE: " + active.id);
        console.log("OVER :" + over.id);

        if (active.id !== over.id) {
            setLanguages((items) => {
                const activeIndex = items.findIndex(item => active.id === item.id);
                const overIndex = items.findIndex(item => over.id === item.id);
                console.log(arrayMove(items, activeIndex, overIndex));
                return arrayMove(items, activeIndex, overIndex);
                // items: [2, 3, 1]   0  -> 2
                // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 
            });

        }
    }
}

export const TaskTable = () => (
    ReactView(
        <App model={[
            {
                statu: 'Open',
                id: '1',
                taskName: 'test'
            },
            {
                statu: 'Open',
                id: '2',
                taskName: 'test'
            },
            {
                statu: 'Open',
                id: '3',
                taskName: 'test'
            },
            {
                statu: 'Todo',
                id: '4',
                taskName: 'todo'
            }
        ]}></App>
    )
)