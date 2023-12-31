import {
  HStack,
  ScrollView,
  UIController, UIView,
  cHorizontal,
  cTopLeading,
  cVertical,
  useOptions
} from '@tuval/forms';

import { Editor } from '@realmocean/editor';

export class EditorJsController extends UIController {
  public override LoadView(): UIView {
    const { onChange = void 0, defaultValue = null } = this.props.config || {};
   const clamp = false;
  //  const { com_tuvalsoft_widget_editorjs: { clamp = false } } = useOptions() || { com_tuvalsoft_widget_editorjs: {} };
    return (
      ScrollView({ axes: cVertical, alignment: cTopLeading })(
        HStack({ alignment: cTopLeading })(
          Editor({
            defaultValue: defaultValue, // view.settings?.documentContent == null ? null : view.settings?.documentContent,
            onReady: () => void 0,
            onChange: (e) => {

              e.saver.save().then((outputData) => {
                onChange(outputData);
              })
            },
            readOnly: false,
            tools: {
              //mermaid: MermaidTool
            }

          } as any).width('100%')
        )
          .height()
          //.width('calc(100% - 40px)')
          // .border({ default: 'solid 1px #E2E2E2' }).tabIndex(0).cornerRadius(5)
          .padding()
          .padding(cHorizontal, 60)
          .paddingLeft(clamp ? 'clamp(84px,50%,calc(50% - 360px))' : '60px')
          .paddingRight(clamp ? 'clamp(84px,50%,calc(50% - 360px))' : '60px')
      )
    )

  }

}

