import { OptionsContext, Spinner, Text, UIController, UIView, WorkProtocol, useProtocol } from '@tuval/forms';
import { AppletName } from './views/AppletName';
import { useGetApplet } from '@celmino/sdk';




export class MyTestController extends UIController {


    public override LoadView(): UIView {
        
     
        return (
                OptionsContext(() =>
                    AppletName()
                )
                    .options( this.props.config )


        )
    }

}

