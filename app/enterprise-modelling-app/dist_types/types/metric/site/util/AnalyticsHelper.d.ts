export type AnalyticsCategory = 'Activity' | 'Mail' | 'Onboarding' | 'Setup' | 'Validation' | 'Extension';
export declare class AnalyticsHelper {
    static sendEvent(name: string, category: AnalyticsCategory, label: string): void;
}
