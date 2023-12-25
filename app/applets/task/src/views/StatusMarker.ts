import { HStack } from "@tuval/forms";

export const StatusMarker = (status) => (
    HStack()
        .background(status.status_background_color)
        .width(8).height(8).marginLeft('10px').marginRight('10px').cornerRadius(2)
)