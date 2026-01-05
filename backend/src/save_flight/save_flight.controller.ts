import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { SaveFlightService } from './save_flight.service';
import { CreateSaveFlightDto } from './dto/create-save_flight.dto';
import { UpdateSaveFlightDto } from './dto/update-save_flight.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('save-flight')
export class SaveFlightController {
  constructor(private readonly saveFlightService: SaveFlightService) {}

  @Post()
  create(@Req() req, @Body() createSaveFlightDto: any) {
    const userId = req.user.id
    return this.saveFlightService.create(userId, createSaveFlightDto);
  }

  @Get()
  findAll(@Req() req) {
     const userId = req.user.id
    return this.saveFlightService.findAll(userId);
  }


  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
     const userId = req.user.id;
    return this.saveFlightService.remove(userId, id);
  }
}
