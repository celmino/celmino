/// <reference types="react" />
import { BoardSections } from './types';
import { Models } from '@celmino/sdk';
export declare function getTasksByStatus(tasks: Models.Task[], status: Models.TaskStage): Models.Task[];
export declare function getTaskById(tasks: Models.Task[], id: string): Models.Task;
export declare function getStatusById(statuses: Models.TaskStage[], id: string): Models.TaskStage;
export declare function initializeBoard(status: Models.TaskStage[], tasks: Models.Task[]): BoardSections;
export declare const findBoardSectionContainer: (boardSections: any, id: string) => string;
declare const BoardSectionList: ({ data, status }: {
    data: any;
    status: any;
}) => JSX.Element;
export default BoardSectionList;
