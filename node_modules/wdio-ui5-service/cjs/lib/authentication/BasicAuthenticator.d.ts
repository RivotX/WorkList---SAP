import Authenticator from "./Authenticator.js";
import { BasicAuthAuthenticator as BasicAuthenticatorType } from "../../types/wdi5.types.js";
declare class BasicAuthenticator extends Authenticator {
    private options;
    private baseUrl;
    constructor(options: BasicAuthenticatorType, browserInstanceName: any, baseUrl: string);
    login(): Promise<void>;
    private basicAuthLogin;
}
export default BasicAuthenticator;
//# sourceMappingURL=BasicAuthenticator.d.ts.map