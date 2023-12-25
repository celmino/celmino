import {
    HStack,
    Text,
    UIFormController,
    UIRouteOutlet,
    cTopLeading,
    useParams
} from "@tuval/forms";


export class MyTestController extends UIFormController {


    public LoadView() {
        const { applet_id, view_id } = useParams();
        return (
            HStack({ alignment: cTopLeading })(
                UIRouteOutlet().width('100%').height('100%'),
            ).background('#FAFBFC')
        )



    }

}
/* export class MyTestController extends UIFormController {
    LoadView(): UIView {
         const { applet_id } = useParams();
        const { createTask } = useCreateTask([]);
       const { tasks } = useListTasks();

       // const {stageSets} = useListTaskStageSets(); 
        return (
            
            // Text(JSON.stringify(stageSets)),
            Text(JSON.stringify(tasks))
                .onClick(() => {
                    createTask({
                        appletId: applet_id,
                        $id: ID.unique(),
                        title: 'Hello world',
                        

                    })
                })
 
        )
    }
} */