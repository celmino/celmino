import { UIController } from '@tuval/forms';
import { MyTestController } from './AppController';
import { FormBuilder } from '@realmocean/ui';
import { GenericAction } from './dialogs/Actions/GenericAction';


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

FormBuilder.injectAction('genericAction', GenericAction);


