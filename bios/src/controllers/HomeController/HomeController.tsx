import { useListTeams, Models, useGetProject, useListProjects, Query } from "@realmocean/sdk";
import { Button, Desktop, HStack, Icon, Icons, ReactView, Spacer, Text, UIController, UIRouteOutlet, UIView, UIViewBuilder, UIWidget, VDivider, VStack, cLeading, cTop, cTopLeading, useLocalStorage, useNavigate, useParams, useState } from "@tuval/forms";
import { LeftSidemenu } from "../../views/LeftSideMenu";
import React from "react";
import { LeftSideMenuView } from "./views/LeftSideMenu";

export class HomeController extends UIController {
    public override LoadView(): UIView {
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('Home'),
                UIRouteOutlet().width("100%").height("100%")
            )
        )
    }
}