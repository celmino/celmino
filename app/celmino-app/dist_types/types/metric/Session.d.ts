export declare var Session: {
    _sessionId: number;
    _storageDisabled: boolean;
    getSessionId(): number;
    refreshSession(): void;
    isSessionExpired(now: number, timestamp: number): boolean;
};
