
import { EditableHeader, EditableHeadingSizes, Fragment, HStack, UIViewBuilder, cLeading } from "@tuval/forms";

import { is } from "@tuval/core";


const fontFamily = 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
export const ViewHeader = (header, onHeaderChange = void 0) => UIViewBuilder(() => {

    
    /*  const { access_type, team_id, applet_id, view_id } = useParams();
 
     const navigate = useNavigate(); */

    return (
         
            HStack({ alignment: cLeading, spacing: 5 })(

                //  _StatusMarker(task?.stage_id),
                is.string(header) ?
                    EditableHeader(header).size(EditableHeadingSizes.SMALL)
                        .onChange((e) => onHeaderChange(e))
                        .fontSmoothing('auto')
                        .foregroundColor('#212526')
                        .fontSize(24).fontFamily(fontFamily).fontWeight('500')
                        .lineHeight('1.25')
                        .kerning('-0.003em')
                    :
                    is.function(header) ? header() : Fragment(),
            )
            .background('white')
            .height().padding(8)
           // .borderBottom('1px solid #F2F2F2')
     

    )

})