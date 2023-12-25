/// <reference types="react" />
import { Models } from '@celmino/sdk';
type TaskItemProps = {
    task: Models.Task;
};
declare function TaskItem({ task }: TaskItemProps): JSX.Element;
export default TaskItem;
