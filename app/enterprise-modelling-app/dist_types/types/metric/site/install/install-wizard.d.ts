export interface InstallWizardProps {
    includeScriplet: boolean;
    ingestUrl: string;
    returnUrl: string;
    applicationId: string;
    token: string;
    hasInstalled: boolean;
}
export declare function renderInstallWizard(element: any, props: InstallWizardProps): void;
