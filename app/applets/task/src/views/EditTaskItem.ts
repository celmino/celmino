import { Button, HStack, Icon, Icons, RequiredRule, TaskProtocol, Text, TextField, UIViewBuilder, UIWidget, cHorizontal, useEffect, useFormController, useProtocol, useState } from "@tuval/forms"
import { StatusMarker } from "./StatusMarker"
import { EventBus, is } from "@tuval/core"
import { useCallback } from 'react';

function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState<boolean>(false);
    // If pressed key is our target key then set to true
    function downHandler({ key, keyCode }) {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        } else {
            if (keyCode === targetKey) {
                setKeyPressed(true);
            }
        }

    }
    // If released key is our target key then set to false
    const upHandler = ({ key, keyCode }) => {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                setKeyPressed(false);
            }
        } else {
            if (keyCode === targetKey) {
                setKeyPressed(false);
            }
        }
    };
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}

function useKeyPressEvent(targetKey, func: Function) {
    const eventFunc = useCallback(() => func(), [])

    function downHandler({ key, keyCode }) {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                eventFunc();
            }
        } else {
            if (keyCode === targetKey) {
                eventFunc();
            }
        }

    }
    ;
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        ;
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            ;
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return eventFunc;
}


export const AssigneeView = () => {

    return (
        UIWidget('com.tuvalsoft.widget.userselect')
    )
}

export const DuedateView = () => {

    return (
        UIWidget('com.tuvalsoft.widget.duedate')
    )
}

export const EditTagsView = () => {

    return (
        UIWidget('com.tuvalsoft.widget.tags')
    )
}

export const PriorityView = () => {

    return (
        UIWidget('com.tuvalsoft.widget.priority')
    )
}

export const EditTaskItem = (status) => (
    UIViewBuilder(() => {

        let createSource = 'B';

        const controller = useFormController();

        const { service } = useProtocol(TaskProtocol);
        const { createTask, isLoading, result } = service('createTask', {
            onSuccess: (task) => {

                EventBus.Default.fire('tasks.changed', { task })

                controller.InvalidateQuerie('tasks');
                controller.InvalidateQuerie('__query__');

               
                EventBus.Default.fire('task.opa.hideedit', null);

            }
        })

        const { createTask:createTaskWithEnter } = service('createTask', {
            onSuccess: (task) => {

                EventBus.Default.fire('tasks.changed', { task })

                controller.InvalidateQuerie('tasks');
                controller.InvalidateQuerie('__query__');

                controller.SetValue('title', '')

                EventBus.Default.fire('task.opa.hideedit', null);
                EventBus.Default.fire('task.opa.showedit', { stageId: status.id });
            }
        })

        useKeyPressEvent(13, () => {
            if (controller.validateForm()) {
                createTaskWithEnter({
                    title: controller.GetValue('title'),
                    stageId: status.id
                });

            }

        })

        useKeyPressEvent(27, () => {
            EventBus.Default.fire('task.opa.hideedit', {})
        })

        return (
            HStack({ spacing: 10 })(
                StatusMarker(status),
                TextField().placeholder('Task Name')
                    .formField('title', [new RequiredRule('Name must be exist.')])
                    .autofocus(true)
                    .padding(cHorizontal, 0)
                    .border('none')
                    .shadow({ focus: 'none' }),
                HStack(
                    AssigneeView(),
                    DuedateView(),
                    EditTagsView(),
                    PriorityView()
                ).width(),
                Button(
                    Text('SAVE').fontSize(11).fontWeight('500')
                ).width(52).height(22)
                    .onClick(() => {
                        if (controller.validateForm())
                            createTask({
                                title: controller.GetValue('title'),
                                stageId: status.id
                            })
                    }),
                HStack(
                    Icon(Icons.Close).fontSize(20)
                ).width().padding(cHorizontal, 10)
                    .onClick(() => EventBus.Default.fire('task.opa.hideedit', {})),
                HStack(

                ).width(32)
            )
                .background('white')
                .border('solid 1px #7B68EE').height(40)

        )
    })

)