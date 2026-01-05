import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { FlightModule } from './flight/flight.module';
import { SaveFlightModule } from './save_flight/save_flight.module';
import env from './config/env';

@Module({
  imports: [
      ServeStaticModule.forRoot({ 
      rootPath: join(__dirname,'..','public'), 
    }) ,
    MongooseModule.forRoot(env.mongo_url as string),
    AuthModule,
    FlightModule,
    SaveFlightModule
  ],
})
export class AppModule {}
