import { UIController } from '@tuval/forms';
export interface MVIDatasetTabModel {
    id: string;
    icon: string;
    name: string;
    isRight: boolean;
    controller: UIController;
    isVisible: () => boolean;
}
export declare const topModels: MVIDatasetTabModel[];
