import { int } from '@tuval/core';
import { UIController, UIView } from '@tuval/forms';
export interface PortalSideMenuParams {
    items: MVIPortalSideMenuItem[];
    selectedAction: (index: int) => void;
    second?: boolean;
}
export interface MVIPortalSideMenuItem {
    name: string;
    icon: string;
    controller: UIController;
    isVisible: () => boolean;
}
export declare function PortalSideMenu(params: PortalSideMenuParams): UIView;
