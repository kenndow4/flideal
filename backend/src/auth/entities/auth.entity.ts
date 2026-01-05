import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Auth extends Document {
    
    @Prop({
        required: true,
        type: String
    })
    readonly name: string;
    
    @Prop({
        unique: true,
        type: String,
        required: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"]
    })
   readonly email: string;


     @Prop({
        type: String,
        required: true,
    })
   readonly password: string;

     @Prop({
        type: String,
        required: true,
    })
   readonly background: string;
}

export const AuthSchema =  SchemaFactory.createForClass(Auth);