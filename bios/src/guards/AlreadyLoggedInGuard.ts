import { useGetMe } from "@realmocean/sdk";
import { Fragment, Text, UINavigate, UIViewBuilder } from "@tuval/forms";
import { Release, Wait } from "../views/WaitViewClass";


// redirect to /app if user is logged in
// it is using login page
export const AlreadyLoggedInGuard = () => {
    const { me, isLoading } = useGetMe('console');
   
    return (
        isLoading ? Wait() :
            me != null ? UINavigate('/app') : Release()
    )
} 