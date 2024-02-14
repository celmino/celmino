import { useGetMe } from "@realmocean/sdk";
import { Fragment, UINavigate } from "@tuval/forms";
import { Release, Wait } from "../views/WaitViewClass";


export const LoginGuard = () => {
    const { me, isLoading } = useGetMe('console');
   
    return (
        isLoading ? Wait() :
            me == null ? UINavigate('/login') : Release()


    )
} 