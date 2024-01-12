import { UIController, UIView, IUploadFileReady } from '@tuval/forms';
export declare class SelectUploadFileController extends UIController {
    private project;
    protected BindRouterParams({ project }: {
        project: any;
    }): void;
    action_OnFileSelected(fileInfo: IUploadFileReady): void;
    LoadView(): UIView;
}
