import { UIRoute, UIRoutes } from "@tuval/forms"

import { LayoutController } from "./LayoutController"
import { HomeController } from "./controllers/HomeController/HomeController"
import { LoginController } from "./controllers/LoginController"
import { AppletController } from "./controllers/AppletController"
import { WorkspaceController } from "./controllers/Workspace/WorkspaceController"
import { OrganizationController } from "./controllers/OrganizationController"


export const Routes = () => {
    return (
        UIRoutes(
            UIRoute('/', LayoutController).children(
                UIRoute('*', HomeController),
                UIRoute('organization/:organizationId', OrganizationController),
                UIRoute('workspace/:workspaceId', HomeController).children(
                    UIRoute('applet/:appletId/*', AppletController)
                ),



                UIRoute('/login', LoginController),
                UIRoute('/logout', LoginController)
            )
        )
    )
}