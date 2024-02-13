import { useGetDomainTeam, useGetMe } from "@realmocean/sdk";
import { is } from "@tuval/core";
import usePromise from 'react-use-promise';
import { useGetSubdomain } from "./useGetSubdomain";



export const useGetOrganizationId = () => {

  
    const subdomain = useGetSubdomain();
    const { team, isLoading: isLoadingDomainOrganization } = useGetDomainTeam();
    const { me, isLoading: isLoadingMe } = useGetMe('console');
   

    if (!is.nullOrEmpty(subdomain)) {
        return { isLoading: isLoadingDomainOrganization, organizationId: team?.$id };

    }

    if (is.nullOrEmpty(subdomain)) {

        return { isLoading: isLoadingMe, organizationId: me?.prefs?.organization };
    }

}