import {
    ForEach,
    HStack,
    ScrollView,
    Spacer,
    State,
    Text,
    TextAlignment, UIAvatar,
    UIFormController,
    UIView,
    VStack,
    cLeading,
    cTopLeading, cVertical
} from '@tuval/forms';




import { UIKanban } from '@realmocean/kanban';


export class MyTestController extends UIFormController {
    @State()
    private formEditor: any;

    /* private tasksChanged() {
        alert('changed')
        this.InvalidateQuerie('tasks')
        this.formEditor = 'fsdfsdfsdf'
    }

    OnControllerLoaded(){
        EventBus.Default.on('tasks.changed', this.tasksChanged.bind(this))
    }

    OnControllerUnLoaded(){
        EventBus.Default.off('tasks.changed', this.tasksChanged.bind(this))
    } */

    public override LoadView(): UIView {

        const { attributes, items, groupBy, onItemClick } = this.props.config;
        const field = attributes.find((field) => field.key === groupBy);
        let groups = [];

        if (field?.type === 'dropdown') {
            const { options = [] } = JSON.parse(field.type_content ?? '{}');
            groups = options;
        }

        return (

            ScrollView({ axes: cVertical, alignment: cTopLeading })(
                VStack({ alignment: cTopLeading })(
                    VStack({ alignment: cTopLeading })(
                        UIKanban()
                            .dataSource(
                                items.map(item => ({
                                    Id: item.$id,
                                    Title: item.name,
                                    Status: item.status,
                                    Summary: '',
                                    Type: "Story",
                                    Priority: "Low",
                                    Tags: "Analyze,Customer",
                                    Estimate: 3.5,
                                    Assignee: "Nancy Davloio",
                                    RankId: 1,
                                    Color: "#02897B",
                                    ClassName: "e-story, e-low, e-nancy-davloio"
                                }))

                            )
                            .columns(
                                groups.map(group => ({
                                    headerText: group.name,
                                    keyField: group.$id,
                                    allowToggle: true
                                }))
                            )
                            .cardTemplate((e) =>
                                VStack({ alignment: cTopLeading, spacing: 5 })(
                                    Text(e.Title).fontWeight('500'),
                                    Text(e.Summary)
                                        .lineHeight('20px')
                                        .multilineTextAlignment(TextAlignment.leading),
                                    Spacer(),
                                    HStack({ alignment: cLeading, spacing: 5 })(
                                        ...ForEach(e.Tags.split(',') as string[])((item: string) =>
                                            HStack(
                                                Text(item)
                                            )
                                                .allHeight(23).padding(10)
                                                .width()
                                                .background('#ececec')
                                                .foregroundColor('#6b6b6b')

                                        ),
                                        Spacer(),
                                        UIAvatar(
                                            Text('ST')
                                        )
                                    ).height()
                                )
                                    .minHeight(110)
                                    .borderLeft(`solid 4px ${e.Color}`).padding(7)
                                    .onClick(()=> {
                                       // console.log();
                                        onItemClick(items.find(item => item.$id === e.Id));
                                    })

                            )
                            .headerTemplate((e) =>
                                HStack({ alignment: cLeading, spacing: 10 })(
                                    Text(e.headerText).fontSize(15).fontWeight('500')
                                )

                                    .height()

                            )



                    )
                )

                    .cornerRadius(10)
                    .padding(20)
                    .border('solid 1px rgb(240, 241,243)'),
                HStack().height(50)
            )


        )


    }

}
