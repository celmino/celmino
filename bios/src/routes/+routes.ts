import { UIRoute, UIRoutes } from "@tuval/forms"

import { LogoutController } from "./logout/+controller"
import { WorkspaceLayoutController } from "./app/workspace/+controller"
import { HomeController } from "./app/*/+controller"
import { OrganizationController } from "./app/organization/[organizationId]/+controller"
import { AppletController } from "./app/workspace/[workspaceId]/applet/[appletId]/+controller"
import { RedirectToAppController } from "../controllers/RedirectToAppController"
import { LoginController } from "./login/+controller"
import { SignupController } from "./signup/+controller"
import { WorkspaceSelectController } from "./app/workspace/select/+controller"
import { OrganizationSelectController } from "./app/organization/select/+controller"
import { LayoutController } from "./app/+controller"
import { WorkspaceController } from "./app/workspace/[workspaceId]/+controller"


export const Routes = () => {
    return (
        UIRoutes(
            UIRoute('/app', LayoutController).children(
                UIRoute('*', HomeController),
                UIRoute('organization/:organizationId', OrganizationController),
                UIRoute('organization/select', OrganizationSelectController),
                UIRoute('workspace/', WorkspaceLayoutController).children(
                    UIRoute(':workspaceId', WorkspaceController).children(
                        UIRoute('applet/:appletId/*', AppletController)
                    )
                ),
                UIRoute('workspace/select', WorkspaceSelectController)
            ),

            UIRoute('/', RedirectToAppController),
            UIRoute('/login', LoginController),
            UIRoute('/signup', SignupController),
            UIRoute('/logout', LogoutController)
        )
    )
}