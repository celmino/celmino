import { UIController, UIView } from '@tuval/forms';
export declare class UploadFileController extends UIController {
    private fileContent;
    private mappingName;
    private mappingFileName;
    private project;
    private gridHeaders;
    private mapping;
    private progress;
    protected BindRouterParams({ gridHeaders, project, mappingName, mappingFileName, fileContent }: {
        gridHeaders: any;
        project: any;
        mappingName: any;
        mappingFileName: any;
        fileContent: any;
    }): void;
    private action_OnPrepareColumnMapping;
    LoadView(): UIView;
}
