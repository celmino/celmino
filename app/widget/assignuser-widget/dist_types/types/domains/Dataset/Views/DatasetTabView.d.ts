import { int } from '@tuval/core';
import { UIView } from '@tuval/forms';
import { MVIDatasetTabModel } from '../Models/MVIDatasetTabModel';
export interface DatasetTabViewParams {
    tabModel: MVIDatasetTabModel[];
    selectedTabIndex: int;
    onTabSelected: (tabname: int) => void;
}
export declare function DatasetTabView(datasetTabViewParams: DatasetTabViewParams): UIView;
