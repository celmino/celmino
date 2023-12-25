
import { useCreateTeam } from "@celmino/sdk";
import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { Button, Input, Text, UIViewBuilder, VStack, useState } from "@tuval/forms";

export const SelectOrganizationView = () => UIViewBuilder(() => {

    const { createTeam } = useCreateTeam('console');
    const [orgName, setOrgName] = useState<string>('');

    return (
        VStack(
            Text('Select Organization'),
            Input().renderer(InputRenderer)
                .onChange((e: any) => {
                    setOrgName(e.target.value);
                }),
            Button().label('Create Organization')
                .renderer(ButtonRenderer)
                .onClick(() => {
                    // alert(orgName)
                    createTeam({
                        name: orgName,
                        roles: ['admin']
                    })
                }),
        )
    )
})