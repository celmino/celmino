import { HStack, Icon, TooltipPositions, Text, Fragment } from "@tuval/forms"
import { Assignee } from "../AppController"
import { Models } from "@celmino/sdk"


export function UserAvatar (account: Models.User<any>, width, height) {

    const names = account?.name?.split(' ');
    return (
        HStack(
            HStack(
                account ?
                    Text(`${names?.[0]?.[0]?.toUpperCase()}${names?.[1]?.[0]?.toUpperCase()}`)
                        .fontWeight('bold')
                        .fontSize(12)
                        .lineHeight('20px')
                    : Fragment()
            ).background('rgb(94, 218, 149)').foregroundColor('rgb(0, 0, 0)')
                .allWidth(width).allHeight(height)
                .cornerRadius('50%')
                .cursor('pointer')
               
        )
            .shadow('rgb(255, 255, 255) 0px 0px 0px 2px')
            .cornerRadius('50%')
            .allWidth(width).allHeight(height)
            .tooltip(account ? `${account?.name} ${account?.name}` : '')
            .tooltipPosition(TooltipPositions.TOP)

    )
}