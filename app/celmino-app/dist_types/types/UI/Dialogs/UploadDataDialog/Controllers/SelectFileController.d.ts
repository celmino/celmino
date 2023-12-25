import { UIController, UIView, IUploadFileReady } from '@tuval/forms';
import { Delegate } from '@tuval/core';
import { Event } from '@tuval/core';
export declare class FileSelected extends Delegate<(e: IUploadFileReady) => void> {
}
export declare class SelectFileController extends UIController {
    OnFileSelected: Event<FileSelected>;
    protected InitController(): void;
    LoadView(): UIView;
}
