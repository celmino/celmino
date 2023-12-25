import { UIController, UIViewBuilder, VStack, UIRoutes, UIRoute, UIView, ConfigContext } from "@tuval/forms";
import { MyTestController } from "./AppController";
import { ObjectViewController } from "./ObjectViewController";


export class RouteController extends UIController {

    private routeView() {
        return (
            ConfigContext(() => {
                return (
                    UIViewBuilder(() =>
                        VStack(
                            UIRoutes(
                                UIRoute('/', MyTestController).children(
                                    UIRoute('objectView/:object_view_id', class extends ObjectViewController { }),/* .children(
                                UIRoute('task/:task_id', class extends  TaskController {})
                            ) */

                                )
                            )
                        )
                            .background('var(--primary-background-color)')
                    )

                )
            }).config({
                ...(this.props.config || {})
            })


        )
    }
    public LoadView(): UIView {
        return this.routeView();
    }
}