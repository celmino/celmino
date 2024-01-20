import { Query, useCreateDocument, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { DynoDialog } from "@realmocean/ui";
import { Button, ForEach, HStack, Heading, Icon, Spacer, Text, UIViewBuilder, VStack, cLeading, cTopLeading, useNavigate, useParams } from "@tuval/forms";
import { AddNoteDialog } from "../../../dialogs/AddNoteDialog";
import { Button as VibeButton, Text as VibeText, TextType, TypographyColor } from '@realmocean/vibe';
import { moment } from "@tuval/core";
import React from "react";


export const NotebookIcon = props => (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M4.746 2.995h2.492v18H4.746v-18z" fill="currentColor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.738 20.995v-18h8.508a2 2 0 012 2v8.768h-.054a5.5 5.5 0 00-5.222 7.232H8.738zm7.055-11a.9.9 0 100-1.8h-3.6a.9.9 0 000 1.8h3.6z" fill="currentColor"></path><path d="M18.98 15.43a.288.288 0 01.54 0l.825 2.073a.294.294 0 00.247.188l2.138.18c.26.022.365.361.167.539l-1.629 1.461a.316.316 0 00-.094.305l.498 2.185c.06.265-.216.475-.439.333l-1.83-1.17a.282.282 0 00-.306 0l-1.83 1.17c-.223.142-.499-.068-.438-.333l.497-2.185a.316.316 0 00-.094-.305l-1.629-1.461c-.198-.178-.093-.517.167-.54l2.138-.179a.295.295 0 00.248-.188l.823-2.074z" fill="currentColor"></path></svg>
)

export const NoteListView = () => UIViewBuilder(() => {

    const { workspaceId, notebookId, noteId } = useParams();
    const navigate = useNavigate();

    const { document: notebook } = useGetDocument({ projectId: workspaceId, databaseId: 'notebooks', collectionId: 'nb_notebooks', documentId: notebookId });
    const { documents: notes, isLoading: isFoldersLoading } = useListDocuments(workspaceId, 'notebooks', 'nb_notes', [
        Query.equal('parent', notebookId)
    ]);

    const { createDocument } = useCreateDocument(workspaceId, 'notebooks', 'nb_notes');

    return (
        VStack({ alignment: cTopLeading })(
            Button(
                Text('Add note')
            ).onClick(() => {

                DynoDialog.Show(AddNoteDialog(workspaceId, notebookId))
                /*  createDocument({
                     data: {
                         name: 'New note',
                         parent: notebookId
                     }
                 }) */

            }),
            VStack({ alignment: cLeading })(
                HStack({ alignment: cLeading, spacing: 2 })(
                    Icon(NotebookIcon),
                    Heading(notebook?.name).fontSize(20)
                ),
                VibeText(`${notes?.length ?? '0'} notes`).color(TypographyColor.SECONDARY)
            ).height().padding()
                .borderBottom('1px solid #E6E6E6'),
            ...ForEach(notes)((note) =>
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        VibeText(note.name).type(TextType.TEXT1).maxLines(2).fontSize(14).foregroundColor('rgb(51, 51, 51)'),
                    ).height(),
                    Spacer(),
                    HStack({ alignment: cLeading })(
                        VibeText(moment(note.$createdAt).format('MMM DD, YYYY')).foregroundColor('rgb(115, 115, 115)').fontSize(12),
                        //VibeButton('Test')
                    ).height()
                )
                    .padding()
                    .height(100)
                    .cursor('pointer')
                    .background({ default: noteId === note.$id ? 'white' : '', hover: 'white' })
                    .border(noteId === note.$id ? '2px solid #E6E6E6' : '2px solid white' )
                    .borderBottom(noteId === note.$id ? '2px solid #E6E6E6' : '1px solid #E6E6E6' )
                    .borderTop(noteId === note.$id ? '1px solid #E6E6E6' : '0px solid #E6E6E6' )
                    .onClick(() => navigate(`/app/workspace/${workspaceId}/applet/com.celmino.applet.notebooks/notebook-${notebookId}/note-${note.$id}`))

            )
        ).width(400)
            .background('#F8F8F8')
    )
})
