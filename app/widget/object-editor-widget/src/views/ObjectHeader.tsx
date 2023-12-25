
import { is } from "@tuval/core";
import { EditableHeader, EditableHeadingSizes, Fragment, HStack, UIViewBuilder, cLeading, useConfig } from "@tuval/forms";


const fontFamily = 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
export const ObjectHeader = () => UIViewBuilder(() => {

    const { header, onHeaderChange = void 0, headerIcon } = useConfig();
    /*  const { access_type, team_id, applet_id, view_id } = useParams();
 
     const navigate = useNavigate(); */

    return (
         
            HStack({ alignment: cLeading, spacing: 5 })(
                headerIcon ? headerIcon : Fragment(),
                //  _StatusMarker(task?.stage_id),
                is.string(header) ?
                    EditableHeader(header).size(EditableHeadingSizes.MEDIUM)
                        .onChange((e) => onHeaderChange(e))
                        .fontSmoothing('auto')
                        .foregroundColor('#212526')
                        .fontSize(28).fontFamily(fontFamily).fontWeight('500')
                        .lineHeight('1.25')
                        .kerning('-0.003em')
                    :
                    is.function(header) ? header() : Fragment(),
            ).height().padding(8)
     

    )

})