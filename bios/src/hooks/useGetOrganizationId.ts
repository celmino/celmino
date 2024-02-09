import { useGetDomainTeam, useGetMe } from "@realmocean/sdk";
import { is } from "@tuval/core";
import usePromise from 'react-use-promise';


export const useGetOrganizationId = () => {
    
    const { team, isLoading: isLoadingDomainOrganization } = useGetDomainTeam();
    const { me, isLoading: isLoadingMe } = useGetMe('console');

   
    if (!is.localhost()) {
        return { isLoading: isLoadingDomainOrganization, organizationId: team?.$id };

    }

    if (is.localhost()) {
        return { isLoading: isLoadingMe, organizationId: me?.prefs?.organization };
    }

}