import { useGetDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { Fragment, Text, UIController, UIView, UIWidget, VStack, useParams } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { DocumentHeader } from "../../views/ViewHeader";


export class ProxyController extends UIController {


    public override LoadView(): UIView {
        const { workspaceId, documentId } = this.props;

        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'document_management',
            collectionId: 'dm_documents',
            documentId: documentId
        })

        const { document: content, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'document_management',
            collectionId: 'dm_document_contents',
            documentId: documentId
        })

        return (
            isLoading ? Fragment():
            VStack(
                ActionPanel(),
                DocumentHeader(document?.name, (e)=> {
                    /* updateDocument({
                        databaseId: 'document_management',
                        collectionId: 'dm_documents',
                        documentId: documentId,
                        data: {
                            name: e
                        }
                    }) */
                }),
                UIWidget('com.tuvalsoft.widget.editorjs')
                    .config({
                        defaultValue: is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                        onChange: (data) => {
                            console.log(data)
                            /* updateDocument({
                                databaseId: 'document_management',
                                collectionId: 'dm_document_contents',
                                documentId: documentId,
                                data: {
                                    content: JSON.stringify(data)
                                }
                            }) */
                        }
                    })
            )
                .background('white')
        )
    }
}