import jwt, {JwtPayload} from "jsonwebtoken";
import env from "../config/env";

interface TokenPayload {
    id: string;
    email: string;
}

const JWT_SECRET:string = env.jwt_secret as string;

export class Token {

 
    public static generate(payload:TokenPayload){
        return jwt.sign(payload, JWT_SECRET, {
            expiresIn: "1d",

        });
    }

    static verify(token:string){
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        return {
            id: decoded.id,
            email: decoded.email
        };
    }
}