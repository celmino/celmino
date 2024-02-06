
//Icon(isOpen ? SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px') : SvgIcon('cu3-icon-sidebarFolder', '#151719', '18px', '18px'))
import { EditableHeader, EditableHeadingSizes, Fragment, HStack, Icon, SvgIcon, UIViewBuilder, VStack, cLeading, Text, cTopLeading, cHorizontal, useDialogStack } from "@tuval/forms";

import { is } from "@tuval/core";


const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif'
export const FolderHeader = (header, onHeaderChange = void 0) => UIViewBuilder(() => {

    const { openDialog } = useDialogStack();
    /*  const { access_type, team_id, applet_id, view_id } = useParams();
 
     const navigate = useNavigate(); */

    return (
        VStack({ alignment: cTopLeading })(
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading, spacing: 5 })(
                    Icon(SvgIcon('svg-sprite-global__comment', '#87909e')),
                    Text('Add comment').fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')
                ).foregroundColor('#87909e')
                    .height(28).width().padding('0 15px').cornerRadius(4).background({ hover: 'rgb(240, 241, 243)' })
                    .onClick(() => {
                        openDialog({
                            title: 'Open',
                            view: Text('Hans')
                        })
                    }),
                HStack({ alignment: cLeading, spacing: 5 })(
                    HStack(
                        //  _StatusMarker(task?.stage_id),
                        Icon(SvgIcon('cu3-icon-sidebarFolder', '#151719', '36px', '36px')),
                        is.string(header) ?
                            EditableHeader(header).size(EditableHeadingSizes.SMALL)
                                .onChange((e) => onHeaderChange(e))
                                .fontSmoothing('auto')
                                .foregroundColor('#212526')
                                .fontSize(28)
                                //.fontFamily(fontFamily)
                                .fontWeight('500')
                                .lineHeight('1.25')
                                .kerning('-0.003em')
                            :
                            is.function(header) ? header() : Fragment()
                    ),
                )
                    .background('white')
                    .height()
                    .padding(8).paddingBottom('20px'),
                HStack({ alignment: cLeading, spacing: 10 })(
                    HStack({ spacing: 5 })(
                        HStack(
                            Text('ST').foregroundColor('white').fontSize(10).fontWeight('500').fontFamily(fontFamily).lineHeight('1.33').kerning('-0.003em')
                        ).width(20).height(20).cornerRadius('50%').background('rgb(255, 87, 34)'),
                        Text('You').foregroundColor('#87909e')
                    ).height().width(),
                    HStack(
                        Text('Last Updated: 6/29/23 at 11:27 pm').foregroundColor('#87909e')
                    ).height().width()
                ).height().padding(cHorizontal, 15).paddingBottom('5px')
            ).height()
                .paddingBottom('10px')
                .borderBottom('1px solid #F2F2F2')
        )
            .padding()
            .paddingBottom('0px')
            .height()


    )

})