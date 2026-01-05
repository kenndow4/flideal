"use server"

import { api } from "@/lib/api";


interface Auth {
    name:string,
    email:string,
    password:string
}

export const register = async (data: Auth) => {
  try {
    const res = await api.post("auth/signup", data);
    console.log({res})
    return { ok: true, data: res.data };
  } catch (error: any) {
    return {
      ok: false,
      message: error.response?.data?.message || "Unexpected error",
      status: error.response?.status,
    };
  }
};
