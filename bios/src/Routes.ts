import { UIRoute, UIRoutes } from "@tuval/forms"

import { LayoutController } from "./controllers/LayoutController"
import { HomeController } from "./controllers/HomeController/HomeController"
import { LoginController } from "./controllers/LoginController"
import { AppletController } from "./controllers/AppletController"
import { WorkspaceController } from "./controllers/Workspace/WorkspaceController"
import { OrganizationController } from "./controllers/OrganizationController"
import { SignupController } from "./controllers/SignupController"
import { RedirectToAppController } from "./controllers/RedirectToAppController"


export const Routes = () => {
    return (
        UIRoutes(
            UIRoute('/app', LayoutController).children(
                UIRoute('*', HomeController),
                UIRoute('organization/:organizationId', OrganizationController),
                UIRoute('workspace/:workspaceId', HomeController).children(
                    UIRoute('applet/:appletId/*', AppletController)
                )
            ),
            UIRoute('/', RedirectToAppController),
            UIRoute('/login', LoginController),
            UIRoute('/signup', SignupController),
            UIRoute('/logout', LoginController)
        )
    )
}