import {
  HStack,
  UIController, UIView,
  VStack,
  cHorizontal,
  cTopLeading,
  nanoid
} from '@tuval/forms';

import { Editor } from '@realmocean/editor';
import { CanvasView } from './CanvasView';

export class MyTestController extends UIController {
  public override LoadView(): UIView {

    //const { initialData  } = this.props.data || {};
    const { onChange = void 0, defaultValue = null } = this.props.config || {};


    return (
      VStack(

        CanvasView({
          id: nanoid(),
          initialData: defaultValue, /* data.content ? JSON.parse(data.content) : */ // null,
          onSaveProject: (e) => {
            onChange(e);
          }
        })
      )
    )
  }



}

