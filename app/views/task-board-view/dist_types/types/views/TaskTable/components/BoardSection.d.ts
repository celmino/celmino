/// <reference types="react" />
import { Models } from '@celmino/sdk';
type BoardSectionProps = {
    id: string;
    title: string;
    tasks: Models.Task[];
    status: Models.TaskStage;
};
declare function BoardSection({ id, title, tasks, status }: BoardSectionProps): JSX.Element;
export default BoardSection;
