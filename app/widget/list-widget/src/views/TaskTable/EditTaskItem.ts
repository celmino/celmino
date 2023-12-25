import { Button, HStack, Icon, Icons, RequiredRule, Text, TextField, UIViewBuilder, UIWidget, cHorizontal, nanoid, useEffect, useFormController, useParams, useProtocol, useState } from "@tuval/forms"
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
            .config({
                onChange: (account) => alert(JSON.stringify(account))
            })
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

/* export function EditTaskItem (status: Models.TaskStage) {
    return (
        UIViewBuilder(() => {
            const { applet_id } = useParams();
            const { applet, isLoading: isAppletLoaing } = useGetApplet(applet_id);
            const { createTask } = useCreateTask([
                Query.equal('appletId', applet_id)
            ])
            let createSource = 'B';
    
            const controller = useFormController();
    
    
            useKeyPressEvent(13, () => {
                if (controller.validateForm()) {
                    createTask({
                        $id: nanoid(),
                        appletId: applet_id,
                        title: controller.GetValue('title'),
                        stageId: status.$id
                    }, (task) => {
    
                     
                        EventBus.Default.fire('tasks.changed', { task })
                      
    
                        EventBus.Default.fire('task.opa.hideedit', null);
                        EventBus.Default.fire('task.opa.showedit', { stage_id: status.$id });
                        controller.ResetForm();
    
                    }
                    );
    
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
                      
                    ).width(),
                    Button(
                        Text('SAVE').fontSize(11).fontWeight('500')
                    ).width(52).height(22)
                        .onClick(() => {
                            if (controller.validateForm()) {
                                alert('asd');
                                createTask({
                                    $id: nanoid(),
                                    appletId: applet_id,
                                    title: controller.GetValue('title'),
                                }, (task) => {
                                  
                                    EventBus.Default.fire('tasks.changed', { task })
                                    EventBus.Default.fire('task.opa.hideedit', null);
    
                                }
                                )
                            }
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
} */