"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFlightModule = void 0;
const common_1 = require("@nestjs/common");
const save_flight_service_1 = require("./save_flight.service");
const save_flight_controller_1 = require("./save_flight.controller");
const mongoose_1 = require("@nestjs/mongoose");
const save_flight_entity_1 = require("./entities/save_flight.entity");
let SaveFlightModule = class SaveFlightModule {
};
exports.SaveFlightModule = SaveFlightModule;
exports.SaveFlightModule = SaveFlightModule = __decorate([
    (0, common_1.Module)({
        controllers: [save_flight_controller_1.SaveFlightController],
        providers: [save_flight_service_1.SaveFlightService],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: save_flight_entity_1.SaveFlight.name, schema: save_flight_entity_1.SaveFlightSchema }])]
    })
], SaveFlightModule);
//# sourceMappingURL=save_flight.module.js.map