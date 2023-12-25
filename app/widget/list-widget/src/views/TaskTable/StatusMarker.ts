
import { HStack, UIViewBuilder } from "@tuval/forms";

export const StatusMarker = (status) => (
    HStack()
        .background(status.bgColor || 'gray')
        .allWidth(8).allHeight(8).marginLeft('10px').marginRight('10px').cornerRadius(2)
)


export const _StatusMarker = (stage_id) => UIViewBuilder(() => {
    //const { stage, isLoading: isStageLoading } = useGetStage( stage_id );
    return (
        HStack()
            .background(/* stage?.color?.split(';')?.[0] ||  */'gray')
            .allWidth(8).allHeight(8).marginLeft('10px').marginRight('10px').cornerRadius(2)
    )
})