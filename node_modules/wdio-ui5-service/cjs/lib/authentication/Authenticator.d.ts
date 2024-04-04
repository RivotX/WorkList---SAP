export default class Authenticator {
    usernameSelector: string;
    passwordSelector: string;
    submitSelector: string;
    browserInstanceName: string;
    browserInstance: WebdriverIO.Browser;
    constructor(browserInstanceName?: any);
    getUsername(): string;
    getPassword(): string;
    getIsLoggedIn(): Promise<boolean>;
    setIsLoggedIn(status: boolean): Promise<void>;
}
//# sourceMappingURL=Authenticator.d.ts.map