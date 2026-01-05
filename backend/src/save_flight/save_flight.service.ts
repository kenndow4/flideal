import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaveFlightDto } from './dto/create-save_flight.dto';
import { UpdateSaveFlightDto } from './dto/update-save_flight.dto';
import { Model } from 'mongoose';
import { SaveFlight } from './entities/save_flight.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SaveFlightService {
 
  constructor(@InjectModel(SaveFlight.name) private readonly saveFlightModel: Model<SaveFlight>){}

 async create(userId:string, createSaveFlightDto: any) {
    console.log(createSaveFlightDto)
    const res = await this.saveFlightModel.create({ userId,flightData:createSaveFlightDto});
    console.log(res)
    return res;
  }

  async findAll(userId:string) {
    return await this.saveFlightModel.find({userId}).sort({createdAt: -1}).exec();
  }


 async remove(userId:string, id:string) {

    const deleted = await this.saveFlightModel.deleteOne({
      _id: id,
      userId
    });

       if (!deleted) {
      throw new NotFoundException(`Saved flight with id ${id} not found for this user`);
    }

    return { message: `Saved flight ${id} removed successfully` };
  }
}
