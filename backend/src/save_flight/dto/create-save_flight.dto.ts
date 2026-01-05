import { IsNotEmpty } from "class-validator";

export class CreateSaveFlightDto {
    @IsNotEmpty()
    flightData: any;
}
