import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './entities/auth.entity';
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Token } from 'src/utils/token';
import { Hash } from 'src/utils/hash';

@Injectable()
export class AuthService {

    constructor(@InjectModel(Auth.name) private readonly authModel: Model<Auth>){}

    async signup(data:SignupDto){
        const exist = await this.authModel.findOne({email: data.email});
        if(exist) throw new NotFoundException(`This email already exist`);
        const backgroundProfile: string[] = ["#1A73E8", "#D93025","#F9AB00", "#188038", "#9334E6", "#3C4043" ];
        const randomIndex = Math.floor(Math.random() * backgroundProfile.length);
        const hashedPassword = await Hash.hash(data.password);
        const {_id,name,email, background} = await this.authModel.create({...data, password:hashedPassword, background: backgroundProfile[randomIndex]});

        const token:string = Token.generate({id:_id.toString(), email});
      
     return {
      user:{
        id: _id.toString(),
        name,
        email,
        background,
        token

      }
     }
    }

    async signin({email, password}:SigninDto){
     const user = await this.authModel.findOne({email});
     if(!user) throw new NotFoundException(`The password or email is wrong`);
      const verifyPassword:boolean = await Hash.match(password, user.password);
      if(!verifyPassword) throw new NotFoundException(`The password or email is wrong`);
      const token:string = Token.generate({id: user._id.toString(), email:user.email});
      return {
        user:{
          id:user._id.toString(),
          name: user.name,
          email: user.email,
          background: user.background,
          token

        }
      }

    }
}
