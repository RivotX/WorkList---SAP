import { Logger } from "./lib/Logger.js";
/**
 * a (static) helper class named after the tool
 */
export declare class wdi5 {
    /**
     * get an instance of wdi5's logger for some pretty looking console output
     * @param sPrefix displayed within "[ ]" prepending the log message
     * @returns an instance of wdi5's logger
     */
    static getLogger(sPrefix?: string): Logger;
    /**
     * set the browsing context for to the WorkZone _shell_
     *
     * so that all methods of the browser object will be executed in the context of the WorkZone shell
     */
    static toWorkZoneShell(): Promise<void>;
    /**
     * set the browsing context for to the WorkZone _app_
     *
     * so that all methods of the browser object will be executed in the context of the WorkZone app
     */
    static toWorkZoneApp(): Promise<void>;
    /**
     * expose the current authentication status
     *
     * @param browserInstanceName
     * @returns the current authentication status
     */
    static isLoggedIn(browserInstanceName?: any): Promise<boolean>;
    /**
     * navigate to a route/view of a UI5 app - by router object
     *
     * @param routerOption a UI5 router object, e.g. {
        sComponentId,
        sName,
        oParameters,
        oComponentTargetInfo,
        bReplace
    }
     * @param browserInstance the currently remote controlled browser
     */
    static goTo(routerOption: any, browserInstance?: WebdriverIO.Browser): any;
    /**
     * navigate to a route/view of a UI5 app - by router object
     *
     * @param withSHash a UI5 router object, e.g. {sHash:"#/accounts/create"}
     * @param browserInstance the currently remote controlled browser
     */
    static goTo(withSHash: any, browserInstance?: WebdriverIO.Browser): any;
    /**
     * navigate to a route/view of a UI5 app - by string hash
     *
     * @hash hash hash-part of the URL, e.g. "#/accounts/create"
     * @param browserInstance the currently remote controlled browser
     */
    static goTo(hash: string, browserInstance?: WebdriverIO.Browser): any;
    /**
     * @deprecated please supply only a single parameter to .goTo() and optionally a browser instance
     */
    static goTo(param: any, oRoute: any, browserInstance?: WebdriverIO.Browser): any;
}
//# sourceMappingURL=wdi5.d.ts.map