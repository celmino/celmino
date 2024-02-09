import { useGetMe } from "@realmocean/sdk";
import { UIController, UIView, UIRouteOutlet, UINavigate } from "@tuval/forms";


export class LayoutController extends UIController {
    public override LoadView(): UIView {
        const { me, isLoading, isError } = useGetMe('console');

        return (
            isError ? UINavigate('/login') :
                UIRouteOutlet().width("100%").height("100%")
        )
    }
}
