import { SaveFlightService } from './save_flight.service';
export declare class SaveFlightController {
    private readonly saveFlightService;
    constructor(saveFlightService: SaveFlightService);
    create(req: any, createSaveFlightDto: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/save_flight.entity").SaveFlight, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/save_flight.entity").SaveFlight & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(req: any): Promise<(import("mongoose").Document<unknown, {}, import("./entities/save_flight.entity").SaveFlight, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/save_flight.entity").SaveFlight & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    remove(req: any, id: string): Promise<{
        message: string;
    }>;
}
