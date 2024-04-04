import { CustomAuthenticator as CustomAuthenticatorType } from "../../types/wdi5.types.js";
import Authenticator from "./Authenticator.js";
declare class CustomAuthenticator extends Authenticator {
    constructor(options: CustomAuthenticatorType, browserInstance: WebdriverIO.Browser | WebdriverIO.MultiRemoteBrowser);
    login(): Promise<void>;
}
export default CustomAuthenticator;
//# sourceMappingURL=CustomAuthenticator.d.ts.map