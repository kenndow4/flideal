import * as bcrypt from "bcrypt";

export class Hash {

    static async hash(data:string):Promise<string> {
        return await bcrypt.hash(data, 10)
    }
   static async match(data:string, hashed:string){
     return await bcrypt.compare(data, hashed);
   }
}