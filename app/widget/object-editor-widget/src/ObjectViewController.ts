
import { Spinner, UIController, UIView, UIWidget } from "@tuval/forms";


export class ObjectViewController extends UIController {
    public LoadView(): UIView {
        const {object_view_id} = this.props || {};
        const { objectView, isLoading } = {} as any // useGetObjectView(object_view_id);
        //const { updateObjectView, invalidateCache } = useUpdateObjectView();
       
        return (
            isLoading ? Spinner() :
            UIWidget(objectView.view)
                .config({
                    defaultValue: objectView.data || {},
                  
                    onChange: (data) => {
                       
                         
                        /* updateObjectView(objectView.id, {
                                data: data
                            }, {
                                onSuccess: () => {
                                    invalidateCache();
                                }
                            }) */
                        
                    }
                })
        )

    }
}