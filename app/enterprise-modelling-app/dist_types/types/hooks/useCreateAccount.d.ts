export declare const useCreateAccount: () => {
    createAccount: (name: string, email: string, password: string) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
