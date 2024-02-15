import { UIController, UIRouteOutlet } from "@tuval/forms";

export class MeetingSpaceController extends UIController {


    public LoadView() {

        return (
            UIRouteOutlet().width('100%').height('100%')
        )
    }

}