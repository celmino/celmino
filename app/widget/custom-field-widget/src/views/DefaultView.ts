import { HStack, Icon, cHorizontal, Text } from "@tuval/forms";
import { Icons } from "../Icons";

export const DefaultLabelView = () => (
    HStack(
        Icon(Icons.Plus),
        Text('New Field')
            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'")
            .fontSize(14)
            .fontWeight('500')
    )
        .width()
        .height()
        .minHeight(28)
        .padding(cHorizontal, 12)
        .foregroundColor('hsl(205, 9%, 47%)')
        .background({ hover: 'rgba(109,122,131,0.15)' })
        //.border({ hover: '1px solid rgba(255, 255, 255, 0)' })
        .cornerRadius(6)
        .transition('all .15s ease-out')
        .cursor('pointer')
)