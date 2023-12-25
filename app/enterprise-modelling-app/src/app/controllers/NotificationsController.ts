import { Text, UIFormController, UIView } from '@tuval/forms';




export class NotificationsController extends UIFormController {

    public override LoadView(): UIView {
        return (
           Text('Notifications')
        )
    }
}