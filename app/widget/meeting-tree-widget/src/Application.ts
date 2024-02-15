import {  UIController } from '@tuval/forms';
import { WorkspaceTreeWidgetController } from './ModuleController';
import { FormBuilder } from '@realmocean/ui';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { SaveFolderAction } from './dialogs/AddFolderDialog';
import { SaveListAction } from './dialogs/AddListDialog';
import { SaveDocumentAction } from './dialogs/AddDocumentDialog';
import { SaveWhiteboardAction } from './dialogs/AddWhiteboardDialog';
import { SaveBoardAction } from './dialogs/AddBoardDialog';
import { SaveMeetingSpace } from './dialogs/AddMeetingSpace';

const manifest = require('./manifest');

declare var tuval$core;

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}

@App(manifest)
export class RatingWidget {
    public GetMainController() {
       return WorkspaceTreeWidgetController;
    }
}

 FormBuilder.injectAction('saveMeetingSpace', SaveMeetingSpace);
/*FormBuilder.injectAction('saveFolder', SaveFolderAction);
FormBuilder.injectAction('saveList', SaveListAction);
FormBuilder.injectAction('wm_saveDocument', SaveDocumentAction);
FormBuilder.injectAction('wm_saveWhiteboard', SaveWhiteboardAction);
FormBuilder.injectAction('wm_saveBoard', SaveBoardAction);
 */




