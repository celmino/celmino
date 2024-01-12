import { UITextBoxView } from "@realmocean/inputs";
import { useSessionService } from "@realmocean/services";
import { EventBus } from "@tuval/core";
import {
    cTopLeading, cTrailing, DialogView, HStack, RequiredRule, UICreateContext, UIRecordsContext,
    VStack, Text, State, ViewProperty, Button, cLeading, Icon, PopupButton, Calendar, DialogPosition
} from "@tuval/forms";
import { RealmDataContext } from "../DataContexts";
import { TaskIcons } from "../views/TaslIcons";
import { AssigneeView } from "./views/Assignee";


export class AddTaskDialog extends DialogView {

    @ViewProperty()
    private space_id: string;

    @ViewProperty()
    private folder_id: string;

    @ViewProperty()
    private item_id: string;

    @ViewProperty()
    private task_status: string;

    
    public constructor() {
        super();
        this.Header = 'Create task'
        this.Width = '700px'
        //this.Height = '500px'

    }


    public BindRouterParams({ space_id, folder_id, item_id, task_status }) {
        this.space_id = space_id;
        this.folder_id = folder_id;
        this.item_id = item_id;
        this.task_status=task_status;

        
    }

    public OnOK() {
        this.ShowDialogAsyncResolve();
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }


    public override LoadView() {

        
        return (
            RealmDataContext(
                UICreateContext((create, isLoading) =>
                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        VStack({ alignment: cTopLeading, spacing: 15 })(
                            UITextBoxView()
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('*Task title')
                                .formField('task_name', [new RequiredRule('Name required.')]),
                            HStack({ alignment: cLeading, spacing: 10 })(
                                Text('In'),
                                Text('Yapilacak isler').padding(10).border('solid 1px #CED4DA').cornerRadius(10),
                                Text('For'),
                                AssigneeView()
                            ).fontSize(13),
                            UITextBoxView()
                                .multiline(true)
                                .floatlabel(false)
                                .width('100%')
                                .placeholder('Task description')
                                .formField('task_description', []),
 
                                PopupButton(
                                    Icon(TaskIcons.Duedate).width(32).height(32)
                                )(
                                    Calendar()
                                )
                                    .dialogPosition(DialogPosition.BOTTOM_START)
                                   //.dialogOffset({ main: -30, secondary: 55 })
                                   
                               
                        ),
                        HStack(
                            HStack({ alignment: cTrailing, spacing: 10 })(
                                Text('Cancel').foregroundColor('rgb(96, 106, 123)').fontSize(14)
                                    .fontWeight('600').cursor('pointer').onClick(() => this.OnCancel()),
                                Button(
                                    Text('Create')
                                ).loading(isLoading)
                                    .onClick(() => {
                                       
                                        this.SetValue('space_id', this.space_id);
                                        this.SetValue('folder_id', this.folder_id);
                                        this.SetValue('item_id', this.item_id);

                                        this.SetValue('task_status', this.task_status);
                                        

                                     //   this.SetValue('tenant_id', useSessionService().TenantId);
                                        this.SetValue('app_id', 'com.tuvalsoft.app.workbench');
                                     //   this.SetValue('account_id', useSessionService().AccountId);

                                        create()
                                    })
                                ,
                            )
                                .paddingTop('20px')
                                .height(50)
                                .borderTop('solid 1px hsl(230, 30%, 96%)')
                        ).paddingTop('20px').height()



                    ).padding(30).foregroundColor('#676767').height()
                ).resource('tasks')
                    .onSuccess((task) => {
                        EventBus.Default.fire('tasks.changed',{task})
                        this.OnOK();
                    })
            )
        )
    }

    public static Show(space_id: string, folder_id: string, item_id: string, task_status: string) {

        
        const dialog = new AddTaskDialog();
        dialog.BindRouterParams({ space_id, folder_id, item_id, task_status })
        return dialog.ShowDialogAsync();
    }
}