import {
    UIFormController,
    UIRouteOutlet
} from "@tuval/forms";


export class MyTestController extends UIFormController {


    public LoadView() {

        return (
            UIRouteOutlet().width('100%').height('100%')
        )
    }

}