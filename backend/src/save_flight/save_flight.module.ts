import { Module } from '@nestjs/common';
import { SaveFlightService } from './save_flight.service';
import { SaveFlightController } from './save_flight.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SaveFlight, SaveFlightSchema } from './entities/save_flight.entity';

@Module({
  controllers: [SaveFlightController],
  providers: [SaveFlightService],
  imports: [MongooseModule.forFeature([{name: SaveFlight.name, schema: SaveFlightSchema}])]
})
export class SaveFlightModule {}
