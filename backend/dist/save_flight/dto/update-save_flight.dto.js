"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSaveFlightDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_save_flight_dto_1 = require("./create-save_flight.dto");
class UpdateSaveFlightDto extends (0, mapped_types_1.PartialType)(create_save_flight_dto_1.CreateSaveFlightDto) {
}
exports.UpdateSaveFlightDto = UpdateSaveFlightDto;
//# sourceMappingURL=update-save_flight.dto.js.map