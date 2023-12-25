import { UIController } from '@tuval/forms';
import { IProjectModel, IMiningModelModel } from '@procetra/common';
export interface MIProjectItem {
    project_item_id: string;
    name: string;
    type: string;
}
export interface MVIProjectItem extends MIProjectItem {
    icon: string;
    controller: UIController;
}
export declare function CreateMVIProjectItem(project: IProjectModel, miningModel: IMiningModelModel): MVIProjectItem;
