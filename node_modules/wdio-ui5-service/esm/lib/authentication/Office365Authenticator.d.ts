import { Office365Authenticator as Office365AuthenticatorType } from "../../types/wdi5.types.js";
import Authenticator from "./Authenticator.js";
declare class Office365Authenticator extends Authenticator {
    staySignedIn: boolean;
    constructor(options: Office365AuthenticatorType, browserInstanceName: any);
    login(): Promise<void>;
}
export default Office365Authenticator;
//# sourceMappingURL=Office365Authenticator.d.ts.map