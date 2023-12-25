import { UIController, UIView, UIViewBuilder, UIWidget } from "@tuval/forms";



export class WidgetController extends UIController {
    public LoadView(): UIView {

        const { objectId, view, defaultValue = {}, onChange = void 0 } = this.props || {};
        
        return (
            UIViewBuilder(() =>
                UIWidget(view)

                    .config({
                        objectId,
                        defaultValue: defaultValue,

                        onChange: (data) => {
                            onChange(data);
                            /*  if (selectedViewIndex === 0) {
                                 onDescriptionChange(data);
                             }
                             else {
                                 updateTaskView(taskViews?.[selectedViewIndex]?.id, {
                                     data: data
                                 }, {
                                     onSuccess: () => {
                                         invalidateTaskViewsCache();
                                     }
                                 })
                             } */
                        }
                    })
            )

        )
    }
}