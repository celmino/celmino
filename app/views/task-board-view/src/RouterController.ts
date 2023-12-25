import { UIController, UIViewBuilder, VStack, UIRoutes, UIRoute, UIView } from "@tuval/forms";
import { MyTestController } from "./AppController";
import { TaskController } from "./controllers/TaskController";

export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', MyTestController).children(
                            UIRoute('object/:object_id', class extends  TaskController {}),/* .children(
                                UIRoute('task/:task_id', class extends  TaskController {})
                            ) */
                            UIRoute('object/:object_id/*', class extends  TaskController {})
                        )
                    )
                )
                    .background('var(--primary-background-color)')
            )


        )
    }
    public LoadView(): UIView {
        return this.routeView();
    }
}