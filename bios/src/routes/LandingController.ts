import { Heading, UIController, UINavigate, UIView } from "@tuval/forms";


export class LandingController extends UIController {
    public override LoadView(): UIView {
        return (
            Heading('Build your company brain').fontFamily('"Hagrid", sans-serif').fontSize('6rem').foregroundColor('#090e13').lineHeight(90)
        )
    }
}