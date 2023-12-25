import { HStack, Text, cLeading } from "@tuval/forms";


export const PropertyLabel = (label) => (
    HStack({alignment:cLeading})(
        Text(label)
       .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
         .fontWeight('400')
         .fontSize(12)
         .kerning('.6px')
         .lineHeight('1.25')
         .textTransform('uppercase')
         .minHeight(28)

      )
      .paddingLeft('10px')
)