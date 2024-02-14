import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { Query, Services, useCreateRealm, useDeleteSession, useGetMe, useListRealms } from "@realmocean/sdk";

import { Button, ForEach, HStack, Heading, Input, TextField, Text, UINavigate, UIViewBuilder, VStack, useNavigate, useState, Spacer, cLeading, cHorizontal, darken, Icon, Icons, HDivider, UIController, UIView } from "@tuval/forms";





export class ResetPasswordController extends UIController {
    /* LoadViewInternal(): UIView {
        const result = (this as any).GetDepends();
        return UIViewBuilder(()=> {
            return (
                VStack(
                    result ,
                    this.LoadView()
                )
            )
        })
    } */
    public override LoadView(): UIView {
        const [workspaceName, setWorkspaceName] = useState('');
        const { me } = useGetMe('console');
        const navigate = useNavigate();



        const [email, setEmail] = useState('');

        return (

            UIViewBuilder(() => {

                return (
                    VStack(
                        VStack({alignment:cLeading, spacing: 10 })(


                            Heading('Reset password').fontFamily('"Hagrid", sans-serif').fontSize('6rem').foregroundColor('#090e13').lineHeight(90),
                            VStack({ alignment: cLeading, spacing: 10 })(
                                TextField()
                                .fontSize('1.8rem')
                                    .lineHeight('4.6rem')
                                    .placeholder('Email address')
                                    .transition('all 0.3s ease-in-out')
                                    .border('none')
                                    .borderBottom({default:'2px solid #ffffff', hover: '2px solid #162330' })
                                    .background('white')
                                    .outline({ focus: 'none' })
                                    .padding('0 1.5rem')
                                    .onChange(e => setEmail(e)),
                                    HStack(
                                        Text('Send reset link')
                                            .fontFamily('"Graphik Regular", sans-serif')
        
                                            .fontSize('2rem')
                                    )
                                        .height()
                                        .lineHeight('4.8rem')
                                        .padding('0 5rem')
                                        .background('#242938')
                                        .cornerRadius(3)
                                        .foregroundColor('white')
                                        .cursor('pointer')
                                        .onClick(() => {
                                            Services.Accounts.createRecovery(email, `${window.location.origin}/update-password`)
                                        }),
                            ).height().marginBottom('1.5rem')
                            .maxWidth('40rem'),
                           
                           
                        ).width(),
                        HStack().height('9rem')
                            .background('linear-gradient(0deg,#fff 42.67%,hsla(0,0%,100%,.8) 60.67%,hsla(0,0%,100%,0))')
                    ).background('#7FE8D4')
                )
            })

        )


    }
}
