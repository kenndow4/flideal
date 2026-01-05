"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFlightService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const save_flight_entity_1 = require("./entities/save_flight.entity");
const mongoose_2 = require("@nestjs/mongoose");
let SaveFlightService = class SaveFlightService {
    saveFlightModel;
    constructor(saveFlightModel) {
        this.saveFlightModel = saveFlightModel;
    }
    async create(userId, createSaveFlightDto) {
        console.log(createSaveFlightDto);
        const res = await this.saveFlightModel.create({ userId, flightData: createSaveFlightDto });
        console.log(res);
        return res;
    }
    async findAll(userId) {
        return await this.saveFlightModel.find({ userId }).sort({ createdAt: -1 }).exec();
    }
    async remove(userId, id) {
        const deleted = await this.saveFlightModel.deleteOne({
            _id: id,
            userId
        });
        if (!deleted) {
            throw new common_1.NotFoundException(`Saved flight with id ${id} not found for this user`);
        }
        return { message: `Saved flight ${id} removed successfully` };
    }
};
exports.SaveFlightService = SaveFlightService;
exports.SaveFlightService = SaveFlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(save_flight_entity_1.SaveFlight.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SaveFlightService);
//# sourceMappingURL=save_flight.service.js.map