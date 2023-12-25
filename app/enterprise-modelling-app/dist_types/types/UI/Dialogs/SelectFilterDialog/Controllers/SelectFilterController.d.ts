import { UIController, UIView } from '@tuval/forms';
import { SelectFilterDialog } from '../SelectFilterDialog';
export declare class SelectFilterController extends UIController {
    private dialog;
    private $txtName;
    protected InitController(): void;
    OnBindModel(dialog: SelectFilterDialog): void;
    LoadView(): UIView;
}
