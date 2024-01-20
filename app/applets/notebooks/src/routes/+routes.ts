import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { MyTestController } from "../AppController";

import { NotebookController } from "./notebook-[notebookId]/+controller";
import { NoteController } from "./notebook-[notebookId]/note-[noteId]/+controller";


export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', MyTestController).children(
                           /*  UIRoute('list/:listId', ListController).children(
                                UIRoute('view/:viewId', class extends ViewController { }),
                            ), */
                            UIRoute(':notebookId', NotebookController).children(
                                UIRoute(':noteId',class extends  NoteController {}),
                            ),
                            /*    UIRoute('document/:documentId',   class extends  DocumentController {} ),
                               UIRoute('whiteboard/:whiteboardId',   class extends  WhiteboardController {} ),
                               UIRoute(':view_id', ViewController),
                               UIRoute(':view_id/*', ViewController) */
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