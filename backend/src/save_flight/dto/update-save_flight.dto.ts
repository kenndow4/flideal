import { PartialType } from '@nestjs/mapped-types';
import { CreateSaveFlightDto } from './create-save_flight.dto';

export class UpdateSaveFlightDto extends PartialType(CreateSaveFlightDto) {}
