"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var translate = function (color) {
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
var colored = function (color) {
    return function (prefix, msg) {
        var other = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            other[_i - 2] = arguments[_i];
        }
        return typeof msg === "string"
            ? console.log.apply(console, __spreadArray(["\u001B[".concat(translate(color), "m%s\u001B[0m"), prefix, msg], __read(other), false)) : console.log.apply(console, __spreadArray([prefix, msg], __read(other), false));
    };
};
var Logger = /** @class */ (function () {
    function Logger(sPrefix) {
        if (sPrefix === void 0) { sPrefix = "wdi5"; }
        this.logLevel = "error";
        this.prefix = "[".concat(sPrefix, "]");
    }
    Logger.getInstance = function (sPrefix) {
        if (sPrefix === void 0) { sPrefix = "wdi5"; }
        if (Logger.instance === null || !Logger.instance[sPrefix]) {
            Logger.instance[sPrefix] = new Logger(sPrefix);
        }
        return Logger.instance[sPrefix];
    };
    Logger.prototype.getLogLevel = function () {
        return this.logLevel;
    };
    Logger.prototype.setLogLevel = function (level) {
        this.logLevel = level;
    };
    Logger.prototype.error = function (msg) {
        var _ = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _[_i - 1] = arguments[_i];
        }
        if (this.logLevel !== "silent") {
            colored("red").apply(void 0, __spreadArray([this.prefix, msg], __read(_), false));
        }
    };
    Logger.prototype.warn = function (msg) {
        var _ = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _[_i - 1] = arguments[_i];
        }
        if (this.logLevel !== "silent") {
            colored("yellow").apply(void 0, __spreadArray([this.prefix, msg], __read(_), false));
        }
    };
    Logger.prototype.info = function (msg) {
        var _ = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _[_i - 1] = arguments[_i];
        }
        if (this.logLevel === "verbose") {
            colored("blue").apply(void 0, __spreadArray([this.prefix, msg], __read(_), false));
        }
    };
    Logger.prototype.success = function (msg) {
        var _ = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _[_i - 1] = arguments[_i];
        }
        if (this.logLevel === "verbose") {
            colored("green").apply(void 0, __spreadArray([this.prefix, msg], __read(_), false));
        }
    };
    Logger.prototype.log = function (msg) {
        var _ = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _[_i - 1] = arguments[_i];
        }
        if (this.logLevel !== "silent") {
            colored("default").apply(void 0, __spreadArray([this.prefix, msg], __read(_), false));
        }
    };
    Logger.prototype.debug = function (msg) {
        var _ = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _[_i - 1] = arguments[_i];
        }
        if (this.logLevel === "verbose") {
            colored("magenta").apply(void 0, __spreadArray([this.prefix, msg], __read(_), false));
        }
    };
    Logger.instance = {};
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map