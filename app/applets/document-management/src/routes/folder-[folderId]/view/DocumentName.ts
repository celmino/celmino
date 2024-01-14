import { HStack, Heading, Icon, SvgIcon, Text, cLeading } from "@tuval/forms";


export const DocumentName = (folder: any) => (
    HStack({ alignment: cLeading ,spacing: 10})(
        Icon(SvgIcon('cu3-icon-sidebarDoc', '#151719','18px','18px')),
        Heading(folder?.name).ellipsis(true).ellipsisMaxLines(1).fontSize(14).fontWeight('400')
    )
)