import Authenticator from "./lib/authentication/Authenticator.js";
import { Logger } from "./lib/Logger.js";
const authenticatorInstances = {};
/**
 * a (static) helper class named after the tool
 */
export class wdi5 {
    /**
     * get an instance of wdi5's logger for some pretty looking console output
     * @param sPrefix displayed within "[ ]" prepending the log message
     * @returns an instance of wdi5's logger
     */
    static getLogger(sPrefix = "wdi5") {
        return Logger.getInstance(sPrefix);
    }
    /**
     * set the browsing context for to the WorkZone _shell_
     *
     * so that all methods of the browser object will be executed in the context of the WorkZone shell
     */
    static async toWorkZoneShell() {
        await browser.switchToParentFrame();
        await browser.pause(100); // let the browsing context settle
    }
    /**
     * set the browsing context for to the WorkZone _app_
     *
     * so that all methods of the browser object will be executed in the context of the WorkZone app
     */
    static async toWorkZoneApp() {
        await browser.switchToFrame(0);
        await browser.pause(100); // let the browsing context settle
    }
    //// REVISIT: not yet/if still needed :)
    // static wz = new Proxy(this, {
    //     get(target, prop, receiver) {
    //         browser.switchToParentFrame()
    //         // eslint-disable-next-line prefer-rest-params
    //         console.log("GET", ...arguments)
    //         Reflect.get(odatav4Lib, prop, receiver)
    //         browser.switchToFrame(0)
    //     }
    // })
    /**
     * expose the current authentication status
     *
     * @param browserInstanceName
     * @returns the current authentication status
     */
    static async isLoggedIn(browserInstanceName) {
        let authenticatorInstance;
        if (!browserInstanceName) {
            return new Authenticator().getIsLoggedIn();
        }
        if (!authenticatorInstances[browserInstanceName]) {
            authenticatorInstance = new Authenticator(browserInstanceName);
            authenticatorInstances[browserInstanceName] = authenticatorInstance;
        }
        else {
            authenticatorInstance = authenticatorInstances[browserInstanceName];
        }
        return authenticatorInstance.getIsLoggedIn();
    }
    static async goTo(byWhat, oRoute, browserInstance = browser) {
        if (oRoute) {
            Logger.getInstance().warn("deprecated signature: please use single parameter as nav target: wdi5.goTo(target)");
            byWhat = oRoute;
        }
        if (typeof byWhat === "string") {
            Logger.getInstance().info(`Navigating via string hash: ${byWhat}`);
            await browserInstance.goTo(byWhat);
        }
        else if (typeof byWhat === "object" && byWhat.sHash) {
            Logger.getInstance().info(`Navigating via object w/ property sHash: ${JSON.stringify(byWhat)}`);
            await browserInstance.goTo(byWhat);
        }
        else if (typeof byWhat === "object") {
            Logger.getInstance().info(`Navigating via UI5 router object: ${JSON.stringify(byWhat)}`);
            await browserInstance.goTo({ oRoute: byWhat });
        }
        else {
            Logger.getInstance().info(`Navigating via generic object: ${JSON.stringify(byWhat)}`);
            await browserInstance.goTo({ byWhat });
        }
    }
}
//# sourceMappingURL=wdi5.js.map