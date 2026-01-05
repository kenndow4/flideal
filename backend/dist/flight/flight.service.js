"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("../utils/api");
const env_1 = __importDefault(require("../config/env"));
let FlightService = class FlightService {
    pagination;
    async findAll(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const res = await api_1.Api.get(`https://api.aviationstack.com/v1/flights` +
            `?access_key=${env_1.default.flight_api_key}` +
            `&limit=${limit}` +
            `&offset=${offset}`);
        return {
            page,
            limit,
            offset,
            data: res.data,
            total: res.data.pagination.total
        };
    }
    findOne(id) {
        return `This action returns a #${id} flight`;
    }
    update(id, updateFlightDto) {
        return `This action updates a #${id} flight`;
    }
    remove(id) {
        return `This action removes a #${id} flight`;
    }
};
exports.FlightService = FlightService;
exports.FlightService = FlightService = __decorate([
    (0, common_1.Injectable)()
], FlightService);
//# sourceMappingURL=flight.service.js.map