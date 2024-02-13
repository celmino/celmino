import { useGetMe } from "@realmocean/sdk";
import { Fragment, UINavigate } from "@tuval/forms";

 export const LoginGuard = () => {
    const { me, isLoading } = useGetMe('console');
    return (
         (!isLoading || me != null) ? Fragment() :
            UINavigate('/login')
        
    )
} 