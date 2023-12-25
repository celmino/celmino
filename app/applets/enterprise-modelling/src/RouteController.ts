import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { MyTestController } from "./AppController";
import { ViewController } from "./ViewController";
import { ModelTypesController } from "./applet/controllers/ModelTypesController";
import { ObjectTypesController } from "./applet/controllers/ObjectTypesController";


export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', MyTestController).children(
                            UIRoute('model_types', ModelTypesController),
                            UIRoute('object_types', ObjectTypesController),
                            UIRoute(':view_id/*', ViewController)
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