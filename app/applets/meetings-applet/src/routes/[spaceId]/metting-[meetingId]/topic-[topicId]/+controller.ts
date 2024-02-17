import { UIController, UIView, useState, useParams, HStack, cTopLeading, VStack, cLeading, EditableHeader, 
    EditableHeadingSizes, Spacer, MenuButton, Icon, cHorizontal, UIWidget, Fragment } from "@tuval/forms";
import { views } from "../../../../Views";
import { useGetDocument } from "@realmocean/sdk";
import { AssignUser } from "../../../../views/AssignUser";
import { Text } from "@realmocean/vibe";

const findTopic = (items: any[], topic_id) => {
    if (items == null) return null;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == topic_id) {
            return items[i]
        } else if (items[i].subItems) {
            const found = findTopic(items[i].subItems, topic_id)
            if (found) {
                return found
            }
        }
    }

    return null;

}


export class TopicController extends UIController {

    public LoadView(): UIView {
        const [api, setApi] = useState<any>();
        const [selectedViewIndex, setSelectedViewIndex] = useState(0);

        const { workspaceId, appletId, meetingId, topicId } = useParams();
        const { document: meeting, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'meeting',
            documentId: meetingId

        })
     /*    const { updateMeeting, invalidateCache: invalidateSectionCache } = useUpdateMeeting();
        const { createMeetingTopicView, invalidateCache } = useCreateMeetingTopicView();
        const { updateMeetingTopicView } = useUpdateMeetingTopicView();
        const { meetingTopicViews: _meetingTopicViews } = useGetMeetingTopicViews({
            meeting_id,
            topic_id
        }); */
        const topic = findTopic(meeting?.sections, topicId)

        const meetingTopicViews = [
            {
                title: "Meeting Notes",
                view: "com.tuvalsoft.widget.meeting-notes",
                data: topic?.data
            },
          //  ...(_meetingTopicViews ? _meetingTopicViews : [])
        ]

        const updateDuration = (topic, duration) => {
            topic.duration = duration;
          /*   updateMeeting(meeting_id, {
                sections: meeting?.sections
            }, {
                onSuccess: () => {
                    invalidateSectionCache();
                }
            }); */
        }

        return (
            HStack({ alignment: cTopLeading })(
                HStack({ alignment: cTopLeading })(
                    VStack(
                        HStack({ alignment: cLeading, spacing: 5 })(
                            HStack()
                                .width(20).height(20)
                                .border('solid 1px #E5E9EE').cornerRadius('50%')
                                .background('white'),
                            EditableHeader(topic?.name).size(EditableHeadingSizes.MEDIUM)
                                .onChange((name) => {
                                    topic.name = name;
                                   /*  updateMeeting(meeting_id, {
                                        sections: meeting?.sections
                                    }, {
                                        onSuccess: () => {
                                            invalidateSectionCache();
                                        }
                                    }); */
                                }),
                            Spacer(),
                            AssignUser({
                                width:30,
                                height: 30,
                                account_id: topic?.account_id, onChange: (account) => {
                                    topic.account_id = account.id;
                                    /* updateMeeting(meeting_id, {
                                        sections: meeting?.sections
                                    }, {
                                        onSuccess: () => {
                                            invalidateSectionCache();
                                        }
                                    }); */
                                }
                            }),
                          
                                HStack(
                                    MenuButton().view(() =>
                                        HStack(
                                            (topic?.duration == null || topic?.duration == 0) ? 
                                            Icon('\\d37b').fontSize(20).foregroundColor('#8895a7') :
                                            Text(topic?.duration +"'").fontSize(14).fontWeight('700').foregroundColor('rgb(136, 149, 167)')
                                        ).allWidth(34).allHeight(30)
                                            .border('solid 1px #e1e7ec')
                                            .background({ hover: '#f0f2f5' })
                                            .cornerRadius(3)
                                            .cursor('pointer')
                                    ).model([
                                        {
                                            title: "No duration",
                                            onClick : () => {
                                                updateDuration(topic, null);
                                            }
                                        },
                                        {
                                            title: "5 minutes",
                                            onClick: () => {
                                               updateDuration(topic, 5);
                                            }
                                        },
                                        {
                                            title: "10 minutes",
                                            onClick: () => {
                                                updateDuration(topic, 10);
                                            }
                                        },
                                        {
                                            title: "15 minutes",
                                            onClick: () => {
                                                updateDuration(topic, 15);
                                            }
                                        },
                                        {
                                            title: "30 minutes",
                                            onClick: () => {
                                                updateDuration(topic, 30);
                                            }
                                        },
                                        {
                                            title: "45 minutes",
                                            onClick: () => {
                                                updateDuration(topic, 45);
                                            }
                                        },
                                        {
                                            title: "60 minutes",
                                            onClick: () => {
                                                updateDuration(topic, 60);
                                            }
                                        }
                                    ])
                                ).allWidth(34).allHeight(30),
                                HStack(
                                    MenuButton().view(() =>
                                        HStack(
                                            Icon('\\e628').fontSize(20).foregroundColor('#8895a7')
                                        ).allWidth(34).allHeight(30)
                                            .border('solid 1px #e1e7ec')
                                            .background({ hover: '#f0f2f5' })
                                            .cornerRadius(3)
                                            .cursor('pointer')
                                    ).model([
                                        {
                                            title: 'Add subtopic'
                                        }
                                    ])
                                ).allWidth(34).allHeight(30),

                            HStack(
                                MenuButton().view(() =>
                                    HStack(
                                        Icon('\\e5d4').fontSize(20).foregroundColor('#8895a7')
                                    ).allWidth(34).allHeight(30)
                                        .border('solid 1px #e1e7ec')
                                        .background({ hover: '#f0f2f5' })
                                        .cornerRadius(3)
                                        .cursor('pointer')
                                ).model([
                                    {
                                        title: 'Add subtopic'
                                    }
                                ])
                            ).allWidth(34).allHeight(30)
                            ,



                        )
                            .height().padding()
                            .padding(cHorizontal, 20),

                        HStack({ alignment: cLeading })(
                            UIWidget('com.tuvalsoft.widget.tab-view')
                                .config({
                                    allViews: views,
                                    views: [...meetingTopicViews],
                                    //isLoading: isTaskViewsLoading,
                                    onChange: (index) => setSelectedViewIndex(index),
                                    actions: [
                                        {
                                            title: 'View',
                                            onClick: () => {
                                               /*  SelectViewDialog.Show().then((view) => {
                                                    createMeetingTopicView({
                                                        meeting_id,
                                                        topic_id,
                                                        title: view.name,
                                                        view: view.type
                                                    }, {
                                                        onSuccess: () => {
                                                            invalidateCache();
                                                        }
                                                    })
                                                }); */
                                            }
                                        }
                                    ]
                                })
                        ).allHeight(40)
                            .border("solid 1px #E8EAED"),
                        meetingTopicViews?.length > 0 ?
                            HStack(
                                UIWidget(meetingTopicViews?.[selectedViewIndex]?.view)
                                    .config({
                                        defaultValue: meetingTopicViews?.[selectedViewIndex]?.data,
                                        onChange: (data) => {
                                            if (selectedViewIndex == 0) {
                                                topic.data = data;
                                               /*  updateMeeting(meeting_id, {
                                                    sections: meeting?.sections
                                                }); */
                                            } else {
                                               /*  updateMeetingTopicView(meetingTopicViews?.[selectedViewIndex]?.id, {
                                                    data: data
                                                }, {
                                                    onSuccess: () => {
                                                        //invalidateTaskViewsCache();
                                                    }
                                                }) */
                                            }

                                        }
                                    })
                            )
                            : Fragment(),
                        /*   HStack({ spacing: 20 })(
                              HStack(
                                  Text('Paragraph')
                              )
                                  .cursor('pointer')
                                  .width()
                                  .padding(cHorizontal, 15)
                                  .height(30)
                                  .foregroundColor({ default: '#5f6b7a', hover: '#5f6b7a' })
                                  .background({ default: '#F0F2F5', hover: '#cfd6de' })
                                  .cornerRadius(5)
                                  .onClick(() => {
                                      api?.blocks?.insert('checklist')
                                  }),
                              HStack(
                                  Text('Decision')
                              )
                                  .cursor('pointer')
                                  .width()
                                  .padding(cHorizontal, 15)
                                  .height(30)
                                  .foregroundColor({ default: '#5f6b7a', hover: '#5f6b7a' })
                                  .background({ default: '#F0F2F5', hover: '#cfd6de' })
                                  .cornerRadius(5),
                              HStack(
                                  Text('Task')
                              )
                                  .cursor('pointer')
                                  .width()
                                  .padding(cHorizontal, 15)
                                  .height(30)
                                  .foregroundColor({ default: '#5f6b7a', hover: '#5f6b7a' })
                                  .background({ default: '#F0F2F5', hover: '#cfd6de' })
                                  .cornerRadius(5),
                              HStack(
                                  Text('Attachment')
                              )
                                  .cursor('pointer')
                                  .width()
                                  .padding(cHorizontal, 15)
                                  .height(30)
                                  .foregroundColor({ default: '#5f6b7a', hover: '#5f6b7a' })
                                  .background({ default: '#F0F2F5', hover: '#cfd6de' })
                                  .cornerRadius(5),
                              HStack(
                                  Text('Note')
                              )
                                  .cursor('pointer')
                                  .width()
                                  .padding(cHorizontal, 15)
                                  .height(30)
                                  .foregroundColor({ default: '#5f6b7a', hover: '#5f6b7a' })
                                  .background({ default: '#F0F2F5', hover: '#cfd6de' })
                                  .cornerRadius(5),
                              HStack(
                                  Text('Image')
                              )
                                  .cursor('pointer')
                                  .width()
                                  .padding(cHorizontal, 15)
                                  .height(30)
                                  .foregroundColor({ default: '#5f6b7a', hover: '#5f6b7a' })
                                  .background({ default: '#F0F2F5', hover: '#cfd6de' })
                                  .cornerRadius(5),
                              HStack(
                                  Text('Vote')
                              )
                                  .cursor('pointer')
                                  .width()
                                  .padding(cHorizontal, 15)
                                  .height(30)
                                  .foregroundColor({ default: '#5f6b7a', hover: '#5f6b7a' })
                                  .background({ default: '#F0F2F5', hover: '#cfd6de' })
                                  .cornerRadius(5),
  
                          )
                              .height()
                              .padding()
                              .fontSize(12)
                              .fontWeight('700')
                              .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                          ,
  
                          HStack(
                              Editor({
                                  defaultValue: topic.data,
                                  onReady: (e) => {
                                      setApi(e._editorJS)
                                    
                                  },
                                  onChange: (e) => {
                                    
                                      e.saver.save().then((outputData) => {
  
                                          topic.data = outputData;
                                          updateMeeting(meeting_id, {
                                              sections: meeting?.sections
                                          });
                                         
                                      })
                                  },
                                  readOnly: false,
                                  tools: {
  
                                  }
  
                              } as any).height(500).width('100%')
                          ).padding()
                              .padding(cHorizontal, 70)
   */
                    )
                        .height('calc(100% - 20px)')
                        .shadow('rgba(0, 38, 58, 0.2) 0px 2px 5px 0px')
                        .background('white')
                        .cornerRadius(5)



                )
                    .maxWidth('calc(100% - 40px)')
                // .minWidth(360)
            )
                .margin(10)
                .marginLeft(20)
                .marginRight(20)
        )
    }
}