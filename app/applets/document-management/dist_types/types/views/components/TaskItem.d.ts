/// <reference types="react" />
import { Task } from './types';
type TaskItemProps = {
    task: Task;
};
declare const TaskItem: ({ task }: TaskItemProps) => JSX.Element;
export default TaskItem;
