import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class SaveFlight extends Document {

  @Prop({ type: Types.ObjectId, ref: "Auth", required: true })
  userId: Types.ObjectId;

  @Prop({ type: Object, required: true })
  flightData: any;

}

export const SaveFlightSchema = SchemaFactory.createForClass(SaveFlight);
