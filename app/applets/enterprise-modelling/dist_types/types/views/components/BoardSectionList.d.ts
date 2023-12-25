/// <reference types="react" />
import { BoardSections, Task, TaskStatus } from './types';
export declare const getTasksByStatus: (tasks: Task[], status: TaskStatus) => Task[];
export declare const getTaskById: (tasks: Task[], id: string) => Task;
export declare const getStatusById: (statuses: TaskStatus[], id: string) => TaskStatus;
export declare const initializeBoard: (status: TaskStatus[], tasks: Task[]) => BoardSections;
export declare const findBoardSectionContainer: (boardSections: BoardSections, id: string) => string;
declare const BoardSectionList: ({ data, status }: {
    data: any;
    status: any;
}) => JSX.Element;
export default BoardSectionList;
