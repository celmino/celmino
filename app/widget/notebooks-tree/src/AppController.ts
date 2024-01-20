import { Button, FormBuilder, Fragment, HStack, Heading, Icon, Icons, Loader, LoaderSizes, OptionsContext, Spacer, SvgIcon, Text, UIController, UIView, UIWidget, VStack, cLeading, cTopLeading, useEffect, useState } from '@tuval/forms';

import { LeftSideMenuView } from './views/WorkspaceTree';
import { useGetWorkspaces } from '@celmino/workprotocol';
import { useSessionService } from '@realmocean/services';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { AddSpaceDialog, SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { DynoDialog } from '@realmocean/ui';
import { getAppletName, getNoteId } from './utils';
import { useGetDocument } from '@realmocean/sdk';
import { useLocalStorageState } from './views/localStorageState';
import { AddNotebookDialog } from './dialogs/AddNotebookDialog';



export class MyTestController extends UIController {

    public override LoadView(): UIView {
        const [isOpen, setIsOpen] = useState(getAppletName() === 'com.celmino.applet.notebooks');
        const isLoading = false;
        const { items } = this.props.data || {};
        const { selectedItem, team_id, workspaceId, folder_id, applet_id, showAllWorkspaces, opas, folder_menu, app_id } = this.props.config || {};

        let noteId = getNoteId();


        const { document: note, isLoading: isListLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'notebooks',
            collectionId: 'nb_notes',
            documentId: noteId
        }, { enabled: noteId != null });



        useEffect(() => {
            if (note! + null) {
                setExpanded(true);
            }
        }, []);

        const [expanded, setExpanded] = useLocalStorageState('notebooks_tree', false);

        return (
            OptionsContext(() => (
                VStack({ alignment: cTopLeading })(

                    HStack({ alignment: cLeading, spacing: 1 })(
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
                        Heading('Notebooks').fontSize(16)
                      //  .fontFamily('Figtree, Roboto, "Noto Sans Hebrew", "Noto Kufi Arabic", "Noto Sans JP", sans-serif')
                      //  .fontWeight('600')
                        .lineHeight(22),
                        Spacer(),
                        HStack(
                            Icon(Icons.Add).size(15).foregroundColor('white')
                        ).height(24).width(24).foregroundColor('white').background('rgb(0, 115, 234)').cornerRadius(4)
                            .onClick(() => {

                                DynoDialog.Show(AddNotebookDialog(workspaceId,'-1', '/'));
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