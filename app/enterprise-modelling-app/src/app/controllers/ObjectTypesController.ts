import { Text, UIFormController, UIView } from "@tuval/forms";

export class ObjectTypesController extends UIFormController {

    public override LoadView(): UIView {
        return (
           Text('Object types')
        )

    }

}