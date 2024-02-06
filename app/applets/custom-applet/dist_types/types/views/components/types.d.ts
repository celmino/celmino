export type Task = {
    id: string;
    title: string;
    description: string;
    stageId: string;
};
export type TaskStatus = {
    id: string;
    status_name: string;
    status_background_color: string;
    status_color: string;
};
export type BoardSections = {
    [name: string]: Task[];
};
