import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(data: SignupDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            background: string;
            token: string;
        };
    }>;
    signin(data: SigninDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            background: string;
            token: string;
        };
    }>;
}
