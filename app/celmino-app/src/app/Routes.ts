import { UIRoute, UIRoutes, VStack } from "@tuval/forms";
import { CollectionController } from "./controllers/CollectionController";
import { DatabaseController } from "./controllers/DatabaseController";
import { HomeController, NullController } from "./controllers/HomeController";
import { LayoutController } from "./controllers/LayoutController";
import { NotificationsController } from "./controllers/NotificationsController";
import { WorkspaceLayoutController } from "./controllers/WorkspaceLayout";
import { AppletController } from "./controllers/AppletController";
import { OrganizationController } from "./controllers/OrganizationController";

export const Routes = () => {

    let regex = /\/app\/com\.([A-Za-z]+)\.([A-Za-z]+)\.([A-Za-z]+)/i;

    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('(?:^\\/app\\/+|\\G(?!^)\\.)\\K\\w+', 'g')

    const str = window.location.href;

    return (
        VStack(

            UIRoutes(
                UIRoute('/', LayoutController).children(
                    UIRoute('', HomeController).isIndex(true),
                    UIRoute('home', HomeController).children(
                        UIRoute(':project_id(\d+)?', NullController),
                    ),

                    UIRoute('notifications', NotificationsController),

                    UIRoute('organization/:organizationId', OrganizationController),
                    UIRoute('workspace/:workspaceId', WorkspaceLayoutController).children(
                        UIRoute('database/:databaseId', DatabaseController).children(
                            UIRoute(':collectionId', CollectionController)
                        ),
                        UIRoute('applet/:applet_id/*', AppletController),
                    )
                ),


                // UIRoute(':applet_id/*', AppletController),


                /* UIRoute('teams', TeamsController).children(
                    UIRoute(':team_id_members', TeamMembersController),
                ),
                UIRoute('tables', TablesController).children(
                    UIRoute(':team_id_members', TeamMembersController),
                ),
 
                UIRoute('team/:team_id', TeamHomeController).children(
 
                    UIRoute('view/:view_id/*', ViewController),
 
                ),
                UIRoute('team/:team_id/workspace/:workspace_id', HomeController),
                UIRoute('team/:team_id/workspace/:workspace_id/folder/:folder_id/applet/:applet_id/scope/:scope_id/*', OPAController),
                UIRoute('team/:team_id/applet/:applet_id/*', OPAController),
               */

            )
        )
    )

}