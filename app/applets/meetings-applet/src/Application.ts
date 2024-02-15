import {  UIController } from '@tuval/forms';
import { AppletController } from './AppController';
import { RouteController } from './routes/+routes';
import { FormBuilder } from '@realmocean/ui';
import { SaveMeetingAction } from './dialogs/AddMeetingDialog';
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
export class Module {
    public GetMainController() {
       return RouteController;
    }
}


FormBuilder.injectAction('saveMeetingAction', SaveMeetingAction);


