"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
class Api {
    static async get(url) {
        try {
            return await axios_1.default.get(url);
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }
}
exports.Api = Api;
//# sourceMappingURL=api.js.map