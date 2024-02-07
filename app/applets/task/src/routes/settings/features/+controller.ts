import { Text,ForEach, HStack, UIFormController, UIImage, VStack, cLeading, cTop, cTopLeading } from "@tuval/forms";



const settings = [
    {
        key: 'isVersionManagementActive',
        title: 'Version',
        description: 'Is version management active'
    },
    {
        key: 'isVersionManagementActive',
        title: 'Document Metadata',
        description: 'Is version management active'
    },
    {
        key: 'isVersionManagementActive',
        title: 'Security',
        description: 'Is version management active'
    },
    {
        key: 'isVersionManagementActive',
        title: 'E-mail',
        description: 'Is version management active'
    },
    {
        key: 'isVersionManagementActive',
        title: 'History',
        description: 'Is version management active'
    }
]
export class FeatureSettingsController extends UIFormController {
    public LoadView() {

        return (
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text('Features').fontSize(24).fontWeight('600')
                    .foregroundColor('rgb(42, 46, 52)')
                    .lineHeight(32)
                )
                .height()
                .margin('0 0 30px'),
                HStack({ alignment: cTopLeading })(
                    ...ForEach(settings)(setting =>
                        VStack({ alignment: cTop })(
                            VStack()
                                .background('#7f77f1')
                                .cornerRadius('4px 4px 0 0')
                                .height(4),
                            HStack(
                                UIImage('/images/version.png')
                                .maxWidth('100%')
                                .maxHeight('100%')
                            )
                         
                                .width(268)
                                .height(180),
    
    
                                Text(setting.title)
                                .fontSize(17)
                                .fontWeight('500')
                                .lineHeight(24)
                                .foregroundColor('#505050')
                                .marginBottom('12px')
                                .padding('0 15px')
                                .transition('all .2s cubic-bezier(.785,.135,.15,.86) 0s'),
    
      
                            Text(setting.description)
                            .lineHeight(18)
                            .fontSize(12)
                            .foregroundColor('rgb(42, 46, 52)')
                        )
                            .background('rgb(247, 248, 249)')
                            .border('1px solid rgb(232, 234, 237)')
                            .padding('0 0 30px')
                            .margin('0 8px 30px')
                            .width(270)
                            .transition('all .2s cubic-bezier(.785,.135,.15,.86) 0s')
                            .allHeight(370)
                            .cornerRadius(4)
                            .shadow({ hover: '0 4px 15px #0000001a' })
                    )
                )
                .wrap('wrap')
                    .padding('24px 48px')
            )
            .padding('24px 48px')
            
        )
    }

}