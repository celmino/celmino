import { UIView } from '@tuval/forms';
import { MVIHappyPathAbsoluteBoxModel } from './HappyPathBox';
import { MVIHappyPathDiagramItem } from './HappyPathDiagram';
export interface MVIHappyPathSectionModel {
    happyPathAbsoluteBoxModel: MVIHappyPathAbsoluteBoxModel;
    happyPathDiagramItems: MVIHappyPathDiagramItem[];
}
export declare function HappyPathSection(params: MVIHappyPathSectionModel): UIView;
