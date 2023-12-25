import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { MyTestController } from "./AppController";
import { ViewController } from "./controllers/ViewController";
import { DocumentController } from "./controllers/DocumentController";
import { ListController } from "./controllers/ListController";


export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', MyTestController).children(
                            UIRoute('list/:listId', ListController).children(
                                UIRoute('view/:viewId', class extends  ViewController {}),
                            ),
                          
                            UIRoute('document/:documentId',   DocumentController ),
                            UIRoute(':view_id', ViewController),
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