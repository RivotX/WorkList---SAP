const translate = (color) => {
    switch (color) {
        case "red":
            return "31";
        case "green":
            return "32";
        case "yellow":
            return "33";
        case "blue":
            return "34";
        case "magenta":
            return "35";
        case "cyan":
            return "36";
        case "default":
            return "0";
        default:
            return "32"; // all is good
    }
};
const colored = (color) => (prefix, msg, ...other) => typeof msg === "string"
    ? console.log(`\x1b[${translate(color)}m%s\x1b[0m`, prefix, msg, ...other)
    : console.log(prefix, msg, ...other);
export class Logger {
    static instance = {};
    constructor(sPrefix = "wdi5") {
        this.prefix = `[${sPrefix}]`;
    }
    prefix;
    logLevel = "error";
    static getInstance(sPrefix = "wdi5") {
        if (Logger.instance === null || !Logger.instance[sPrefix]) {
            Logger.instance[sPrefix] = new Logger(sPrefix);
        }
        return Logger.instance[sPrefix];
    }
    getLogLevel() {
        return this.logLevel;
    }
    setLogLevel(level) {
        this.logLevel = level;
    }
    error(msg, ..._) {
        if (this.logLevel !== "silent") {
            colored("red")(this.prefix, msg, ..._);
        }
    }
    warn(msg, ..._) {
        if (this.logLevel !== "silent") {
            colored("yellow")(this.prefix, msg, ..._);
        }
    }
    info(msg, ..._) {
        if (this.logLevel === "verbose") {
            colored("blue")(this.prefix, msg, ..._);
        }
    }
    success(msg, ..._) {
        if (this.logLevel === "verbose") {
            colored("green")(this.prefix, msg, ..._);
        }
    }
    log(msg, ..._) {
        if (this.logLevel !== "silent") {
            colored("default")(this.prefix, msg, ..._);
        }
    }
    debug(msg, ..._) {
        if (this.logLevel === "verbose") {
            colored("magenta")(this.prefix, msg, ..._);
        }
    }
}
//# sourceMappingURL=Logger.js.map