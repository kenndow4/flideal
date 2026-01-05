import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { Auth } from './entities/auth.entity';
import { Model } from 'mongoose';
export declare class AuthService {
    private readonly authModel;
    constructor(authModel: Model<Auth>);
    signup(data: SignupDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            background: string;
            token: string;
        };
    }>;
    signin({ email, password }: SigninDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            background: string;
            token: string;
        };
    }>;
}
