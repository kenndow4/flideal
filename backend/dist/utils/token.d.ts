interface TokenPayload {
    id: string;
    email: string;
}
export declare class Token {
    static generate(payload: TokenPayload): any;
    static verify(token: string): {
        id: any;
        email: any;
    };
}
export {};
