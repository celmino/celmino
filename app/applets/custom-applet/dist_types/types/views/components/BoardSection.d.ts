/// <reference types="react" />
import { Task, TaskStatus } from './types';
type BoardSectionProps = {
    id: string;
    title: string;
    tasks: Task[];
    status: TaskStatus;
};
declare const BoardSection: ({ id, title, tasks, status }: BoardSectionProps) => JSX.Element;
export default BoardSection;
