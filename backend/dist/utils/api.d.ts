import { AxiosResponse } from "axios";
export declare class Api {
    static get<T>(url: string): Promise<AxiosResponse<T>>;
}
