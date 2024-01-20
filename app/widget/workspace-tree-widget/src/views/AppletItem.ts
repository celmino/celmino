import { UIViewBuilder, VStack, cTopLeading, useOptions, useState } from "@tuval/forms";
import { AppletName } from "./AppletName";


export const AppletItem = (appletId: string) => UIViewBuilder(() => {
    const { workspaceId, applet_id } = useOptions();
    const [expanded, setExpanded] = useState(applet_id === appletId);


    return (
        VStack({ alignment: cTopLeading })(
            AppletName(appletId, () => {
                setExpanded(!expanded);
            }),
           /*  !expanded ? Fragment() :
                UIViewBuilder(() => {
                    const { applets, isLoading: isAppletsLoading } = useListApplets(true, [
                        Query.equal('parentId', applet.id),
                    ]);
                    return (
                        isAppletsLoading ? Fragment() :
                            VStack(
                                // Applets
                                ...ForEach(applets)((_applet: any) =>
                                    AppletItem(applet, _applet)
                                ),
                                // Folders
                            ).paddingLeft('20px')
                    )
                }) */

        )
            .height()
        //  .allWidth('calc(100% - 20px)')
    )
})