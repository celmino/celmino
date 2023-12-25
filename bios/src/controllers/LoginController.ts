import { Button, Fragment, HStack, Text, TextField, UIController, UINavigate, UIView, VStack } from "@tuval/forms";
import { useCreateEmailSession, useGetMe } from "@realmocean/sdk";
export class LoginController extends UIController {
    public override LoadView(): UIView {

        const {createEmailSession, isSuccess, isError, error} = useCreateEmailSession('console');
        

        return (
           
            HStack(
                HStack().width(200),
                VStack(
                    TextField(),
                    TextField(),
                    Button(
                        Text('Login')
                    )
                    .onClick(()=> {
                        createEmailSession({
                            email: 'stan@bimser.com.tr',
                            password: 'password'
                        }, ()=> console.log('success'))
                    }),
                    isError && Text(error?.message),
                    isSuccess && UINavigate('/main')
                )
            )
           
        )
    }
}