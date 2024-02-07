
import { MyTestController } from './AppController';
import { RouteController } from './routes/+routes';
import { ListStatusWidget } from './widget/ListStatusWidget';
import { SaveCollectionAction } from './dialogs/AddCollection/actions/SaveCollectionAction';
import { FormBuilder } from '@realmocean/ui';
import { SaveDocumentAction } from './dialogs/AddCollection/actions/SaveDocumentAction';
import { SaveTextFieldAction } from './dialogs/AddTextAttributeDialog';

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
       return RouteController;
    }
}


FormBuilder.injectView('liststatus', ListStatusWidget)

FormBuilder.injectAction('ca_saveCollection', SaveCollectionAction)
FormBuilder.injectAction('ca_SaveDocument', SaveDocumentAction)
FormBuilder.injectAction('ca_saveTextField', SaveTextFieldAction)


