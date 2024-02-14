import { UIRoute, UIRoutes } from "@tuval/forms"

import { LogoutController } from "./logout/+controller"
import { WorkspaceLayoutController } from "./app/workspace/+controller"
import { HomeController } from "./app/*/+controller"
import { OrganizationController } from "./app/organization/[organizationId]/+controller"
import { AppletController } from "./app/workspace/[workspaceId]/applet/[appletId]/+controller"
import { RedirectToAppController } from "./RedirectToAppController"
import { LoginController } from "./login/+controller"
import { SignupController } from "./signup/+controller"
import { WorkspaceSelectController } from "./app/workspace/select/+controller"
import { OrganizationSelectController } from "./app/organization/select/+controller"
import { LayoutController } from "./app/+controller"
import { WorkspaceController } from "./app/workspace/[workspaceId]/+controller"
import { DefaultWorkspaceController } from "./app/+default"
import { ResetPasswordController } from "./reset-password/+controller"
import { UpdatePasswordController } from "./update-password/+controller"
import { LandingController } from "./LandingController"


export const Routes = () => {
    return (
        UIRoutes(
            UIRoute('/app', LayoutController).children(
                UIRoute('', DefaultWorkspaceController),
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

            UIRoute('/', LandingController),
            UIRoute('/login', LoginController),
            UIRoute('/signup', SignupController),
            UIRoute('/logout', LogoutController),
            UIRoute('/reset-password', ResetPasswordController),
            UIRoute('/update-password', UpdatePasswordController)
        )
    )
}