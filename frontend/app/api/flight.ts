"use server"

import { api } from "@/lib/api";

export const findAllFlights = async (page = 1, limit = 10, token: string) => {
    if(!token) return;
  const res = await api.get("/flight", {
    params: {
      page,
      limit,
    },
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined,
  });
  return res.data;
};


export const getSavedFlights = async (token: string) => {
  if (!token) return [];
  try {
    const res = await api.get("/save-flight", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res)
    return res.data; // Array de vuelos guardados
  } catch (err) {
    console.error("Error fetching saved flights:", err);
    return [];
  }
};

export const saveFlight = async (flightData: any, token: string) => {
  if (!token) throw new Error("Unauthorized");
  try {
    const res = await api.post(
      "/save-flight",
      { flightData },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data; 
  } catch (err) {
    console.error("Error saving flight:", err);
    throw err;
  }
};

export const deleteSavedFlight = async (_id: string, token: string) => {
  if (!token) throw new Error("Unauthorized");
  try {
    const res = await api.delete(`/save-flight/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data; 
  } catch (err) {
    console.error("Error deleting flight:", err);
    throw err;
  }
};