import { Capabilities, Services } from "@wdio/types";
import { wdi5Config } from "./types/wdi5.types.js";
export default class Service implements Services.ServiceInstance {
    private _options?;
    private _capabilities?;
    private _config?;
    constructor(_options?: wdi5Config, // TODO: this is the successor to _config in wdio^8
    _capabilities?: Capabilities.RemoteCapability, _config?: wdi5Config);
    before(): Promise<void>;
    /**
     * waits until btp's wz std ed iframe containing the target app is available,
     * switches the browser context into the iframe
     * and eventually injects the wdi5 into the target app
     */
    enableBTPWorkZoneStdEdition(browser: any): Promise<void>;
    /**
     * this is a helper function to late-inject ui5 at test-time
     * it relays the the wdio configuration (set in the .before() hook to the browser.options parameter by wdio)
     * to the injectUI5 function of the actual wdi5-bridge
     */
    injectUI5(browserInstance?: WebdriverIO.Browser): Promise<void>;
}
//# sourceMappingURL=service.d.ts.map