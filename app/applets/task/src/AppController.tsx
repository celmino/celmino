import {
    DialogStack,
    Fragment,
    HStack,
    ReactView,
    ScrollView,
    Spacer,
    SvgIcon,
    Text,
    UIFormController,
    UIRouteOutlet,
    UIViewBuilder,
    UIWidget,
    VStack,
    cLeading, cTopLeading,
    cVertical,
    getAppFullName,
    useDialogStack,
    useNavigate,
    useParams
} from "@tuval/forms";
import { DynoDialog } from "./dialogs/DynoDialog";
import { ListStatusesDialog } from "./dialogs/ListStatusesDialog";
import { Query, useCreateDocument, useGetDocument, useListAttributes, useListDocuments, useUpdateDocument } from "@celmino/sdk";
import { ActionPanel } from "./views/ActionPanel";
import React from "react";
import { ViewHeader } from "./views/ViewHeader";
import { SelectViewDialog } from "./dialogs/SelectViewDialog";


export class MyTestController extends UIFormController {


    public LoadView() {

        return (
            UIRouteOutlet().width('100%').height('100%')
        )
    }

}