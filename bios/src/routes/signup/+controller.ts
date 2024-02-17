import { Button, Fragment, HStack, Heading, HeadingSizes, SecureField, Text, TextField, UIController, UINavigate, UIView, VStack, cLeading, useNavigate, useState } from "@tuval/forms";
import { Services, useCreateAccount, useCreateEmailSession, useCreateOrganization, useDeleteCache, useGetMe, useUpdatePrefs } from "@realmocean/sdk";
import { is } from "@tuval/core";

export class SignupController extends UIController {
    public override LoadView(): UIView {

        const { createAccount, isSuccess: isCreateAccountSuccess, isError: isCreateAccountError, error: createAccountError } = useCreateAccount('console');
        const { createEmailSession, isSuccess, isError, error } = useCreateEmailSession('console');

        const [userName, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate();

        const { createTeam, isError: isOrganizationCreateError, error: OrgError } = useCreateOrganization();
        const { updatePrefs } = useUpdatePrefs({});
        const { deleteCache } = useDeleteCache('console');

        return (

            HStack(
                HStack().width('50%'),
                VStack({ alignment: cLeading, spacing: 20 })(
                    Heading('Sign up').size(HeadingSizes.LARGE),
                    VStack({ alignment: cLeading, spacing: 10 })(
                        Text('Name'),
                        TextField().onChange(e => setUserName(e))
                    ).height(),
                    VStack({ alignment: cLeading, spacing: 10 })(
                        Text('Email'),
                        TextField().onChange(e => setEmail(e))
                    ).height(),
                    VStack({ alignment: cLeading, spacing: 10 })(
                        Text('Password'),
                        SecureField().onChange(e => setPassword(e))
                    ).height(),
                    Button(
                        Text('Signup')
                    ).width('100%')
                        .onClick(() => {
                            createAccount({
                                name: userName,
                                email: email,
                                password: password
                            }, (account) => {

                                createEmailSession({
                                    email: email,
                                    password: password
                                }, async () => {
                                    try {
                                        const team = await Services.Teams.create(account.$id, `${userName}'s Organization`);
                                      //  alert(JSON.stringify(team))
                                        //if (is.localhost()) {
                                        updatePrefs({
                                            prefs: {
                                                ...(account?.prefs ? account?.prefs : {}),
                                                organization: team.$id
                                            }

                                        }, () => {
                                            deleteCache();
                                            navigate(`/app/workspace/select`);
                                        })
                                    } catch(e) {
                                        alert('Hata')
                                    }
                                   /*  } else {
                                        window.location.href = `https://${team.$id}.celmino.io`;
                                    } */
                                    
                                })
                            })
                        }),
                    (isError || isCreateAccountError) && Text(createAccountError?.message),
                    (isCreateAccountSuccess && isSuccess) && UINavigate('/')
                ).width('50%').padding(100)
            )

        )
    }
}