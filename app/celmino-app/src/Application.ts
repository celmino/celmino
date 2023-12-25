import { UIController } from '@tuval/forms';
import { MyTestController } from './app/controllers/AppController';
import { FormBuilder } from '@celmino/ui';

import { SaveDocumentAction } from './app/dialogs/actions/SaveDocumentAction';
import { SaveTextFieldAction } from './app/dialogs/AddTextFieldDialog';
import { SaveNumberFieldAction } from './app/dialogs/AddNumberFieldDialog';
import { SaveAppletAction } from './app/dialogs/AddAppletDialog';
import { SaveBooleanFieldAction } from './app/dialogs/AddBooleanFieldDialog';
import { SaveDatetimeFieldAction } from './app/dialogs/AddDatetimeField';
import { SaveRelationFieldAction, SelectDBCollectionView } from './app/dialogs/AddRelationDialog';
import { RelationFormView } from './app/dialogs/FormViews/RelationFormView';
import { SaveCollectionAction } from './app/dialogs/AddCollection/actions/SaveCollectionAction';

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
export class ProcessMining {
    public GetMainController() {
       return MyTestController;
    }
}

FormBuilder.injectView('collectionSelect', SelectDBCollectionView);
FormBuilder.injectView('relation', RelationFormView);



//FormBuilder.injectAction('saveSpace', SaveSpaceAction);
FormBuilder.injectAction('saveCollection', SaveCollectionAction);
FormBuilder.injectAction('saveDocument', SaveDocumentAction);

FormBuilder.injectAction('saveTextField', SaveTextFieldAction);
FormBuilder.injectAction('saveNumberField', SaveNumberFieldAction);
FormBuilder.injectAction('saveApplet', SaveAppletAction);
FormBuilder.injectAction('saveBooleanField', SaveBooleanFieldAction);
FormBuilder.injectAction('saveDatetimeField', SaveDatetimeFieldAction);
FormBuilder.injectAction('saveRelationField', SaveRelationFieldAction);
