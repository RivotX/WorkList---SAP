export default class Authenticator {
    usernameSelector;
    passwordSelector;
    submitSelector;
    browserInstanceName;
    browserInstance;
    constructor(browserInstanceName) {
        this.browserInstanceName = browserInstanceName;
        if (browserInstanceName) {
            this.browserInstance = browser[browserInstanceName];
        }
        else {
            this.browserInstance = browser;
        }
    }
    getUsername() {
        let envName = "wdi5_username";
        if (browser.isMultiremote) {
            envName = `wdi5_${this.browserInstanceName}_username`;
        }
        return process.env[envName];
    }
    getPassword() {
        let envName = "wdi5_password";
        if (browser.isMultiremote) {
            envName = `wdi5_${this.browserInstanceName}_password`;
        }
        return process.env[envName];
    }
    async getIsLoggedIn() {
        const cookies = await this.browserInstance.getCookies();
        const index = cookies.findIndex((item) => {
            return item.name === "isLoggedIn";
        });
        const value = index !== -1 ? cookies[index].value : "false";
        return value === "true";
    }
    async setIsLoggedIn(status) {
        await this.browserInstance.setCookies({ name: "isLoggedIn", value: status.toString() });
    }
}
//# sourceMappingURL=Authenticator.js.map