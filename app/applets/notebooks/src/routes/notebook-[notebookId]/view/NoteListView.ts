import { Query, useCreateDocument, useListDocuments } from "@realmocean/sdk";
import { Button, ForEach, HStack, Heading, Text, UINavigate, UIRouteLink, UIViewBuilder, VStack, cLeading, cTopLeading, useNavigate, useParams } from "@tuval/forms";


export const NoteListView = () => UIViewBuilder(() => {

    const { workspaceId, notebookId } = useParams();
    const navigate = useNavigate();
    const { documents: notes, isLoading: isFoldersLoading } = useListDocuments(workspaceId, 'notebooks', 'nb_notes', [
        Query.equal('parent', notebookId)
    ]);

    const { createDocument } = useCreateDocument(workspaceId, 'notebooks', 'nb_notes');

    return (
        VStack({ alignment: cTopLeading })(
            Button(
                Text('Add note')
            ).onClick(() => {
                createDocument({
                    data: {
                        name: 'New note',
                        parent: notebookId
                    }
                })

            }),
            ...ForEach(notes)((note) =>

                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Heading(note.name).fontSize(14)
                    ).height(),
                ).height(100)
                    .background({ hover: 'white' })
                    .borderBottom('1px solid #E6E6E6')
                    .onClick(() => navigate(`/app/workspace/${workspaceId}/applet/com.celmino.applet.notebooks/notebook-${notebookId}/note-${note.$id}`))

            )
        ).width(300)
            .background('#F8F8F8')
    )
})
