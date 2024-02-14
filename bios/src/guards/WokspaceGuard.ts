import { useListRealms, Query } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { Fragment, UINavigate, UIViewBuilder, useParams } from "@tuval/forms"
import { useGetCurrentOrganization } from "../hooks/useGetCurrentOrganization";
import { CreateWorkspaceView } from "../views/CreateWorkspaceView";


export const WorkspaceGuard = () => {
    const { workspaceId } = useParams();
    return {
        release: workspaceId,
        view: (
            UINavigate('/app/workspace/select')
        )
    }
}

export const DefaultWorkspaceGuard = () => {
    const { organization, isLoading } = useGetCurrentOrganization();
    const { workspaceId } = useParams();

    return (
        workspaceId != null ? Fragment() :
            isLoading ? Fragment() :
                UIViewBuilder(() => {
                    const { realms, isLoading: isRealmsLoading } = useListRealms(organization != null, [
                        Query.equal('teamId', organization?.$id)
                    ])

                    return (
                        isRealmsLoading ? Fragment() :
                            (realms?.length === 0) ? UINavigate(`/app/workspace/select`) :
                                UINavigate(`/app/workspace/${realms[0].$id}`)
                    )
                })

    )
}

