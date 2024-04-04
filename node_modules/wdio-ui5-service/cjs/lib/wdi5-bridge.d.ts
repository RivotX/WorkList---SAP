import { wdi5Config } from "../types/wdi5.types.js";
export declare function setup(config: wdi5Config): Promise<void>;
export declare function start(config: wdi5Config): Promise<void>;
/**
 * function library to setup the webdriver to UI5 bridge, it runs all the initial setup
 * make sap/ui/test/RecordReplay accessible via wdio
 * attach the sap/ui/test/RecordReplay object to the application context window object as 'bridge'
 */
export declare function injectUI5(config: wdi5Config, browserInstance: any): Promise<boolean>;
export declare function checkForUI5Page(browserInstance: any): Promise<any>;
export declare function authenticate(options: any, browserInstanceName?: any): Promise<void>;
export declare function _addWdi5Commands(browserInstance: WebdriverIO.Browser): Promise<void>;
//# sourceMappingURL=wdi5-bridge.d.ts.map