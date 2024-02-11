import { useGetOrganization } from "@realmocean/sdk";
import { useGetOrganizationId } from "./useGetOrganizationId";

export const useGetCurrentOrganization = () => {
    const { organizationId, isLoading: isOrganizationIdLoading } = useGetOrganizationId();
    const isEnabled = !isOrganizationIdLoading && organizationId != null;
    const { organization, isLoading: isOrganizationLoading } = useGetOrganization({ organizationId: organizationId, hookEnabled: !isOrganizationIdLoading && organizationId != null});
    
    
    if (isOrganizationIdLoading) {
        return { isLoading: true, organization: null };
    }

    if (isEnabled && isOrganizationLoading) {
        return { isLoading: true, organization: null };
    }

    if (!isOrganizationIdLoading && organizationId == null) {
        return { isLoading: false, organization: null };
    }

    return { isLoading: false, organization };


}