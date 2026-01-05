import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Api } from 'src/utils/api';
import env from 'src/config/env';

@Injectable()
export class FlightService {
  private readonly pagination: any;
  
  async findAll(page:number = 1, limit:number = 10) {
    
    const offset:number = (page - 1) * limit

    const res = await Api.get<FlightService>(
      `https://api.aviationstack.com/v1/flights` +
    `?access_key=${env.flight_api_key}` +
    `&limit=${limit}` +
    `&offset=${offset}`
    ); 
    return {
      page,
      limit,
      offset,
      data:res.data,
      total: res.data.pagination.total
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
