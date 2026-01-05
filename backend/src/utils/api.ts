import axios, { AxiosResponse } from "axios";

export class Api {
    static async get<T>(url:string):Promise<AxiosResponse<T>>{
        try{ 
            return await axios.get<T>(url)
        }catch(e){
            console.error(e)
            throw e;
        }
    }
}