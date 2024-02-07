import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { MyTestController } from "../AppController";
import { ViewController } from "./list-[listId]/view-[viewId]/+controller";
import { DocumentController } from "./document-[documentId]/+controller";
import { ListController } from "./list-[listId]/+controller.ts";
import { WhiteboardController } from "./whiteboard-[whiteboardId]/+controller";
import { SettingsController } from "./settings/+controller";
import { FeatureSettingsController } from "./settings/features/+controller";
import { GeneralSettingsController } from "./settings/general/+controller";


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
                          
                            UIRoute('document/:documentId',   class extends  DocumentController {} ),
                            UIRoute('whiteboard/:whiteboardId',   class extends  WhiteboardController {} ),
                            UIRoute(':view_id', ViewController),
                            UIRoute(':view_id/*', ViewController)
                        ),
                        UIRoute('/settings', SettingsController).children(
                            UIRoute('features', FeatureSettingsController),
                            UIRoute('general', GeneralSettingsController)
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