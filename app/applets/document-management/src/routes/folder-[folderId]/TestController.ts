import { UIController, UIView } from "@tuval/forms";

export class TestController extends UIController {

    public override LoadView(): UIView {
        const {view} = this.props;
        return view;
    }
}