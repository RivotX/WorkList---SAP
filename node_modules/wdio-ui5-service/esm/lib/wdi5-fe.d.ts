export declare class WDI5FE {
    private appConfig;
    private browserInstance;
    private shell?;
    onTheShell: any;
    constructor(appConfig: any, browserInstance: any, shell?: any);
    toShell(): Promise<void>;
    toApp(): Promise<void>;
    static initialize(appConfig: any, browserInstance?: WebdriverIO.Browser): Promise<WDI5FE>;
    execute(fnFunction: any): Promise<void>;
}
//# sourceMappingURL=wdi5-fe.d.ts.map