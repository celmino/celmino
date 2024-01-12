import { Button, FormBuilder, Fragment, HStack, Icon, Icons, Loader, LoaderSizes, OptionsContext, Spacer, SvgIcon, Text, UIController, UIView, UIWidget, VStack, cTopLeading, useEffect, useState } from '@tuval/forms';

import { LeftSideMenuView } from './views/WorkspaceTree';
import { useGetWorkspaces } from '@celmino/workprotocol';
import { useSessionService } from '@realmocean/services';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { AddSpaceDialog, SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { DynoDialog } from '@realmocean/ui';
import { getListId } from './utils';
import { useGetDocument } from '@realmocean/sdk';
import { useLocalStorageState } from './views/localStorageState';



export class MyTestController extends UIController {

    public override LoadView(): UIView {
        const [isOpen, setIsOpen] = useState(true);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { selectedItem, team_id, workspaceId, folder_id, applet_id, showAllWorkspaces, opas, folder_menu, app_id } = this.props.config || {};

        let listId = getListId();


        const { document: list, isLoading: isListLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_lists',
            documentId: listId
        }, { enabled: listId != null });



        useEffect(() => {
            if (list! + null) {
                setExpanded(true);
            }
        }, []);

        const [expanded, setExpanded] = useLocalStorageState('work_management_tree', false);

        return (
            OptionsContext(() => (
                VStack({ alignment: cTopLeading })(

                    HStack({ alignment: cTopLeading, spacing: 1 })(
                        HStack(
                            HStack(
                                isLoading ? Loader().size(LoaderSizes.XS) :
                                    Icon(WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')
                            ).width(20).height(20).cursor('pointer')
                                .display(`var(--display-caret)`),
                            /* HStack(
                                UIWidget("com.tuvalsoft.widget.icons")
                                    .config({
                                        selectedIcon: 'bookmark',
                                        color: 'gray',
                                        width: 18,
                                        height: 18,
                                        padding: 1
                                    })
                            )
                                .width().height()
                                .cornerRadius(5)
                                .display('var(--display-icon)'), */
                        ).width(20).height(20)
                            .onClick(() => {
                                setIsOpen(!isOpen);
                            }),
                        /*   HStack(
                              isLoading ? Loader().size(LoaderSizes.XS) :
                                  Icon(SvgIcon('cu3-icon-caret', 'gray', '1em','1em')).transform(isOpen ?  'rotate(90deg)': '')
                          ).width().height()
                              .onClick(() => {
                                  setIsOpen(!isOpen);
                              }), */
                        Text('Work Management').fontSize(14),
                        Spacer(),
                        HStack(
                            Icon(Icons.Add).size(15)
                        ).height(20).width(20)
                        .background('gray')
                            .onClick(() => {

                                DynoDialog.Show(AddSpaceDialog(workspaceId, '/'));
                            })
                    )
                    .fontWeight('500')
                    .height().padding(5)
                        .variable('--show-space-action-buttons', { default: 'none', hover: 'flex' })
                       // .variable(`--display-caret`, { default: 'none', hover: 'flex' })
                       // .variable(`--display-icon`, { default: 'flex', hover: 'none' })
                    ,
                    isOpen ?
                        HStack(
                            LeftSideMenuView(selectedItem)
                        ).height().paddingLeft('30px') : Fragment()
                ).height()
            ))
                .options({
                    ...(this.props.config || {})
                })
        )
    }
}

FormBuilder.injectAction('saveSpace', SaveSpaceAction);