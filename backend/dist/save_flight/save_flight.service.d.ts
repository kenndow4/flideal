import { Model } from 'mongoose';
import { SaveFlight } from './entities/save_flight.entity';
export declare class SaveFlightService {
    private readonly saveFlightModel;
    constructor(saveFlightModel: Model<SaveFlight>);
    create(userId: string, createSaveFlightDto: any): Promise<import("mongoose").Document<unknown, {}, SaveFlight, {}, import("mongoose").DefaultSchemaOptions> & SaveFlight & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, SaveFlight, {}, import("mongoose").DefaultSchemaOptions> & SaveFlight & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    remove(userId: string, id: string): Promise<{
        message: string;
    }>;
}
