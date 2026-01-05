export declare class Hash {
    static hash(data: string): Promise<string>;
    static match(data: string, hashed: string): Promise<boolean>;
}
