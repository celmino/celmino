import { Text } from "@realmocean/vibe";
import { moment } from "@tuval/core";
import { Button, DialogStack, ForEach, Fragment, HStack, Icons, MeetingProtocol, MenuButton, ReactView, Segmented, Spacer, Spinner, UIController, UIRouteOutlet, UIView, UIViewBuilder, VStack, cHorizontal, cLeading, cTop, getAppFullName, useDialogStack, useNavigate, useParams, useProtocol } from "@tuval/forms";
import React from "react";
import { DatePickerRenderer, ButtonRenderer, SegmentedRenderer } from '@realmocean/antd'
import { DynoDialog } from '@realmocean/ui'
import { AddMeetingDialog } from "../../../dialogs/AddMeetingDialog";
import { EmptyView } from "../../../views/EmptyView";
import { Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { ActionPanel } from "./views/ActionPanel";

export class MeetingsController extends UIController {


    public override LoadView(): UIView {
        const navigate = useNavigate();
        const { workspaceId, appletId, spaceId } = useParams();
        const [showTemplates, setShowTemplates] = React.useState(false);
        const { documents: meetings, isLoading } = useListDocuments(workspaceId, appletId, 'meeting', [
            Query.equal('parent', spaceId)
        ]);

        /*  const { updateMeeting } = useUpdateMeeting();
 
         const { createMetric } = useCreateMetric(); */


        return (
            isLoading ? Fragment() :
                ReactView(
                    <DialogStack>
                        {
                            VStack({ alignment: cTop })(
                                ActionPanel(),
                                /* DocumentHeader(document?.name, (e) => {
                                    updateDocument({
                                        databaseId: appletId,
                                        collectionId: 'dm_documents',
                                        documentId: documentId,
                                        data: {
                                            name: e
                                        }
                                    })
                                }), */
                                VStack({ alignment: cTop, spacing: 10 })(
                                    HStack({ alignment: cLeading })(
                                        Segmented().options(["Upcoming", "This week", "Past", "Templates"])
                                            .onChange((value) => {
                                                if (value === 'Templates') {
                                                    setShowTemplates(true);
                                                } else {
                                                    setShowTemplates(false);
                                                }
                                            })
                                            .renderer(SegmentedRenderer),
                                        Spacer(),
                                        Button().label('New Meeting')
                                            .renderer(ButtonRenderer)
                                            .onClick(() => {
                                                /*   createMetric({
                                                      goalid: '23',
                                                      name: 'Metric 1'
                                                  }) */
                                                DynoDialog.Show(AddMeetingDialog(workspaceId, appletId, spaceId))
                                            })
                                        /*  Button(
                                             Text('New Meeting')
                                         ).onClick(() => {
                                             DynoDialog.Show(AddMeetingDialog(scope_id))
                                         }) */
                                    ).height(),
                                    meetings?.length === 0 ? EmptyView() :
                                        isLoading ? Spinner() :
                                            UIViewBuilder(() => {
                                                const { openDialog } = useDialogStack();
                                                return (
                                                    VStack({ spacing: 10 })(
                                                        ...ForEach(meetings)(meeting =>
                                                            HStack(
                                                                HStack({ alignment: cLeading })(
                                                                    !meeting.is_template ?
                                                                        HStack(
                                                                            Text(moment(meeting.start_at).date())
                                                                                .foregroundColor('white')
                                                                                .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                                                                                .fontSize(19)
                                                                                .fontWeight('700')
                                                                        ).allWidth(35).allHeight(35).background('#0072CE').cornerRadius('50%').foregroundColor('white') : Fragment()

                                                                    ,

                                                                    !meeting.is_template ?
                                                                        Text(`${moment.utc(meeting.start_at).local().format('MMM')?.toUpperCase()}, ${moment.utc(meeting.end_at).local().format('dd')?.toUpperCase()}`)
                                                                            .padding(cHorizontal, 10)
                                                                            .fontSize(13)
                                                                            .fontWeight('700')
                                                                            .foregroundColor('#8895a7')
                                                                            .fontFamily('Poppins, sans-serif, Helvetica, Arial') : Fragment(),

                                                                    !meeting.is_template ?

                                                                        Text(`${moment.utc(meeting.start_at).local().format('HH:mm')} - ${moment.utc(meeting.end_at).local().format('HH:mm')}`)
                                                                            .padding(cHorizontal, 10)
                                                                            .fontSize(13)
                                                                            .foregroundColor('#414953')
                                                                            .fontFamily('Poppins, sans-serif, Helvetica, Arial') : Fragment(),

                                                                    HStack(
                                                                        HStack()
                                                                            .background('rgb(255, 216, 163)')
                                                                            .width(10)
                                                                            .height(10)
                                                                            .cornerRadius('50%')
                                                                    )
                                                                        .padding(cHorizontal, 20)
                                                                        .width()
                                                                        .height()

                                                                    ,


                                                                    Text(meeting.name).fontSize('1.4rem').fontWeight('700')
                                                                        .padding(cHorizontal, 10)
                                                                        .foregroundColor('#00263A')
                                                                        .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                                                                )
                                                                    .height()
                                                                    .onClick(() => {
                                               /*  team_id ?
                                                    navigate(`/app/${getAppFullName()}/team/${team_id}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}/meeting/${meeting.id}`)
                                                    :
                                                    navigate(`/app/${getAppFullName()}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}/meeting/${meeting.id}`);
            */                                 })
                                                                ,

                                                                MenuButton().icon(Icons.Menu)
                                                                    .model([
                                                                        {
                                                                            title: 'Set as template',
                                                                            onClick: () => {
                                                                                //  updateMeeting(meeting.$id, { is_template: 1 })
                                                                            }
                                                                        }
                                                                    ])
                                                            )
                                                                //  .allHeight(45)
                                                                .padding(7)
                                                                .shadow('0 1px 2px 0 rgba(0, 0, 0, 0.1)')
                                                                .foregroundColor('#00263A')
                                                                .cornerRadius('0.5rem')
                                                                .background({ default: 'white', hover: '#f0f2f5' })
                                                                .cursor('pointer')
                                                                .transition('color 0.3s')
                                                                .onClick(()=> {
                                                                    navigate(`/app/workspace/${workspaceId}/applet/${appletId}/space-${spaceId}/meeting-${meeting.$id}`)
                                                                    /* openDialog({
                                                                        title: meeting.name,
                                                                        view: Text(JSON.stringify(meeting))

                                                                    }) */
                                                                })


                                                        )

                                                    )
                                                    .height()
                                                )
                                            })

                                )

                                    .padding()
                                    .maxWidth(900)
                            )
                                .background('#F8F9FA')
                                .render()


                        }
                    </DialogStack>
                )

        )
    }

}

