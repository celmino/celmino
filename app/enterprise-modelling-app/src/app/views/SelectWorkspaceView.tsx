import {
  useCreateProject,
  useGetCurrentTeam
} from '@celmino/sdk';
import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { Button, Input, Text, UIViewBuilder, VStack, useState } from "@tuval/forms";

export const SelectWorkspaceView = () => UIViewBuilder(() => {

  const { createProject } = useCreateProject();
  const { team } = useGetCurrentTeam();
  const [orgName, setOrgName] = useState<string>('');

  return (
    VStack(
      Text('Select Workspace'),
      Input().renderer(InputRenderer)
        .onChange((e: any) => {
          setOrgName(e.target.value);
        }),
      Button().label('Create Workspace')
        .renderer(ButtonRenderer)
        .onClick(() => {
          // alert(orgName)
          createProject({
            name: orgName,
            teamId: team
          })
        }),
    )
  )

})