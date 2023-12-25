export interface SubscriptionFormApp {
    id: string;
    name: string;
    stripePlanId: string;
    sessionCountEstimate: number;
    index: number;
}
export interface SubscriptionFormPlan {
    stripePlanId: string;
    name: string;
    price: number;
    sessionsPerMonth: number;
    sessionsPerMinute: number;
    index: number;
    isRetired: boolean;
    isAnnual: boolean;
}
export interface SubscriptionFormProps {
    isCurrentTrial: boolean;
    applications: SubscriptionFormApp[];
    monthlyPlans: SubscriptionFormPlan[];
    annualPlans: SubscriptionFormPlan[];
    retiredPlans: SubscriptionFormPlan[];
}
export interface SubscriptionFormRowProps {
    isCurrentTrial: boolean;
    application: SubscriptionFormApp;
    plans: SubscriptionFormPlan[];
}
export declare function renderSubscriptionForm(element: any, props: SubscriptionFormProps): void;
