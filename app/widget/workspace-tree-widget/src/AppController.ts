import { Button, FormBuilder, Fragment, HStack, Heading, Icon, Icons, Loader, LoaderSizes, OptionsContext, Spacer, Spinner, SvgIcon, Text, UIController, UIView, UIViewBuilder, UIWidget, VStack, cLeading, cTopLeading, cVertical, useEffect, useState } from '@tuval/forms';

import { LeftSideMenuView } from './views/WorkspaceTree';
import { useGetWorkspaces } from '@celmino/workprotocol';
import { useSessionService } from '@realmocean/services';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { AddSpaceDialog, SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { DynoDialog } from '@realmocean/ui';
import { getAppletName, getListId } from './utils';
import { useGetDocument, useUpdateDocument } from '@realmocean/sdk';
import { useLocalStorageState } from './views/localStorageState';
import { TextField } from '@realmocean/vibe';



export class MyTestController extends UIController {

    public override LoadView(): UIView {
        const [isOpen, setIsOpen] = useState(getAppletName() === 'com.celmino.applet.workmanagement');
        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { selectedItem, team_id, workspaceId, folder_id, appletId, showAllWorkspaces, opas, folder_menu, app_id } = this.props.config || {};

        let listId = getListId();


        const { document: list, isLoading: isListLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_lists',
            documentId: listId
        }, { enabled: listId != null });



        useEffect(() => {
            if (list! + null) {
                setExpanded(true);
            }
        }, []);

        const [expanded, setExpanded] = useLocalStorageState('work_management_tree', false);
        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })

        return (
            isAppletLoading ? Spinner() :
                OptionsContext(() => (
                    VStack({ alignment: cTopLeading })(

                        HStack({ alignment: cLeading, spacing: 1 })(
                            HStack(
                                HStack(
                                    isLoading ? Loader().size(LoaderSizes.XS) :
                                        Icon(WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')
                                ).width(20).height(20).cursor('pointer')
                                    .display(`var(--display-caret)`),

                            ).width(20).height(20)
                                .onClick(() => {
                                    setIsOpen(!isOpen);
                                }),

                            // Title
                            isEditing ? UIViewBuilder(() => {

                                const [appletName, setAppletName] = useState(applet.name);
                                const { updateDocument } = useUpdateDocument(workspaceId);
                                return (
                                    HStack(
                                        TextField()
                                        .fontSize(16)
                                        .fontWeight('500')
                                        .value(appletName)
                                            .onChange((value) => setAppletName(value))
                                            .onBlur(() => {
                                                if (applet.name !== appletName) {
                                                    updateDocument({
                                                        databaseId: 'workspace',
                                                        collectionId: 'applets',
                                                        documentId: appletId,
                                                        data: {
                                                            name: appletName
                                                        }
                                                    });
                                                }
                                                setIsEditing(false);
                                            })
                                    )
                                        .height()
                                        .onClickAway(() => {
                                            if (applet.name !== appletName) {
                                                updateDocument({
                                                    databaseId: 'workspace',
                                                    collectionId: 'applets',
                                                    documentId: appletId,
                                                    data: {
                                                        name: appletName
                                                    }
                                                });
                                            }
                                            setIsEditing(false);
                                        })

                                )
                            })
                                :
                                Heading(applet.name).fontSize(16)

                                    .lineHeight(22),

                            Spacer(),
                            HStack(
                                Icon(Icons.Add).size(15)
                            ).height(20).width(20)
                                .background('gray')
                                .onClick(() => {
                                    setIsEditing(!isEditing)
                                    // DynoDialog.Show(AddSpaceDialog(workspaceId, appletId, '/'));
                                })
                        )
                            .fontWeight('500')
                            .allHeight(37).padding(5).padding(cVertical, isEditing ? 0 : 5)
                            .variable('--show-space-action-buttons', { default: 'none', hover: 'flex' })

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