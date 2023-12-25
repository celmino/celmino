import {
    BiosController,
    QueryClient,
    Text,
    UIController,
    UIView
} from "@tuval/forms";




import { Routes } from "./Routes";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5000 * 60 * 1000, // 5 minutes
            retry: false
        }
    },
});


export class BiosMainController extends UIController {
    public override LoadView(): UIView {
        return (
            Routes()
        )
    }
}

export class MainController extends BiosController {
    public override LoadBiosView(): UIView {
        return (
            Routes()
        )
    }
}