import { useDeleteSession } from "@realmocean/sdk";
import { Fragment, Spinner, UIController, UINavigate, UIView, useEffect, useNavigate, useState } from "@tuval/forms";


export class LogoutController extends UIController {
    public override LoadView(): UIView {

        const { deleteSession } = useDeleteSession('console');
        const navigate = useNavigate();


        useEffect(() => {
            deleteSession({ sessionId: 'current' }, () => navigate('/login'));
        }, []);

        return (
                Fragment()
        )
    }
}