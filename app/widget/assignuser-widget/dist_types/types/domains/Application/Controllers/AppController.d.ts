import { Event } from '@tuval/core';
import { UIController, UIView } from '@tuval/forms';
export declare class AppControllerClass extends UIController {
    RequestDesktop: Event<any>;
    private currentProject;
    private currentController;
    private recentFiles;
    protected InitController(): void;
    private MainPage;
    private LoadPortalView;
    private showAnim;
    private test;
    onTextChanged(): void;
    onCloseProject(): void;
    private getSubView;
    private getContextView;
    private data;
    private testCounter;
    LoadView(): UIView;
    private OnNewProject;
    private OnOpenProject;
    CLoseProject(): void;
    LoadRecentFiles(): void;
}
export declare function AppController(): AppControllerClass;
