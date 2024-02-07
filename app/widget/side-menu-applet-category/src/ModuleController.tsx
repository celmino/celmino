import {
    HStack,
    Text, UIController, UIView, cLeading
} from '@tuval/forms';

import { Query, useGetDocument, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
export class WorkspaceTreeWidgetController extends UIController {

    public override LoadView(): UIView {

        const { workspaceId, appletId, onItemSelected } = this.props.config || {};
        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })

        return (
            HStack({alignment:cLeading})(
                Text(applet?.name)
                    .fontSize(16)
                    .fontWeight('500')
                    .foregroundColor('#222522')
            ).height(20)
            .marginVertical(5)
                .padding()
                .background('#E4EAE2')
                .cornerRadius(10)
                //.clipPath('polygon(95% 0, 100% 50%, 95% 100%, 0 100%, 0 50%, 0 0)')
        )
    }
}
