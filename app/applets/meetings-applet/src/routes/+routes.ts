import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { AppletController } from "../AppController";
import { MeetingsController } from "./[spaceId]/meetings/+controller";
import { SettingsController } from "./settings/+controller";
import { FeatureSettingsController } from "./settings/features/+controller";
import { GeneralSettingsController } from "./settings/general/+controller";
import { MeetingSpaceController } from "./[spaceId]/+controller";
import { MeetingController } from "./[spaceId]/metting-[meetingId]/+controller";
import { TopicController } from "./[spaceId]/metting-[meetingId]/topic-[topicId]/+controller";


export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', AppletController).children(
                            UIRoute(':spaceId', MeetingSpaceController).children(
                                UIRoute('meetings', MeetingsController),
                                UIRoute(':meetingId', MeetingController).children(
                                    UIRoute(':topicId', TopicController),
                                ),
                            ),
                            /*  UIRoute('list/:listId', ListController).children(
                                 UIRoute('view/:viewId', class extends  ViewController {}),
                             ),
                             UIRoute('folder/:folderId',   class extends  FolderController {} ),
                             UIRoute('document/:documentId',   class extends  DocumentController {} ),
                             UIRoute('whiteboard/:whiteboardId',   class extends  WhiteboardController {} ),
                             UIRoute(':view_id', ViewController),
                             UIRoute(':view_id/*', ViewController) */
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