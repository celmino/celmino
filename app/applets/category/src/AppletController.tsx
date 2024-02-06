import {
    Text,
    UIFormController,
    UIRouteOutlet
} from "@tuval/forms";


export class AppletControler extends UIFormController {


    public LoadView() {

        return (
            Text('Category')
        )
    }

}