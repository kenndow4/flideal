import { Document, Types } from "mongoose";
export declare class SaveFlight extends Document {
    userId: Types.ObjectId;
    flightData: any;
}
export declare const SaveFlightSchema: import("mongoose").Schema<SaveFlight, import("mongoose").Model<SaveFlight, any, any, any, (Document<unknown, any, SaveFlight, any, import("mongoose").DefaultSchemaOptions> & SaveFlight & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, SaveFlight, any, import("mongoose").DefaultSchemaOptions> & SaveFlight & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}), any, SaveFlight>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SaveFlight, Document<unknown, {}, SaveFlight, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SaveFlight & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SaveFlight, Document<unknown, {}, SaveFlight, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SaveFlight & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    flightData?: import("mongoose").SchemaDefinitionProperty<any, SaveFlight, Document<unknown, {}, SaveFlight, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SaveFlight & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, SaveFlight, Document<unknown, {}, SaveFlight, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SaveFlight & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SaveFlight>;
