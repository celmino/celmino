import {  UIController } from '@tuval/forms';
import { MyTestController } from './AppController';
import { FormBuilder } from '@realmocean/ui';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { SaveNotebookAction } from './dialogs/AddNotebookDialog';
import { SaveListAction } from './dialogs/AddListDialog';
import { SaveDocumentAction } from './dialogs/AddDocumentDialog';
import { SaveWhiteboardAction } from './dialogs/AddWhiteboardDialog';

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
       return MyTestController;
    }
}

FormBuilder.injectAction('saveSpace', SaveSpaceAction);
FormBuilder.injectAction('saveNotebook', SaveNotebookAction);
FormBuilder.injectAction('saveList', SaveListAction);
FormBuilder.injectAction('saveDocument', SaveDocumentAction);
FormBuilder.injectAction('saveWhiteboard', SaveWhiteboardAction);





