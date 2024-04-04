import { wdi5LogLevel } from "../types/wdi5.types.js";
export declare class Logger {
    private static instance;
    private constructor();
    private prefix;
    private logLevel;
    static getInstance(sPrefix?: string): Logger;
    getLogLevel(): wdi5LogLevel;
    setLogLevel(level: wdi5LogLevel): void;
    error(msg: string, ..._: string[]): void;
    warn(msg: string, ..._: string[]): void;
    info(msg: string, ..._: string[]): void;
    success(msg: string, ..._: string[]): void;
    log(msg: string, ..._: string[]): void;
    debug(msg: string, ..._: string[]): void;
}
//# sourceMappingURL=Logger.d.ts.map