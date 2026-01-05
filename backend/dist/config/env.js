"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, MONGO_URL, JWT_SECRET, FLIGHT_API_KEY } = process.env;
exports.default = {
    port: PORT,
    mongo_url: MONGO_URL,
    jwt_secret: JWT_SECRET,
    flight_api_key: FLIGHT_API_KEY
};
//# sourceMappingURL=env.js.map