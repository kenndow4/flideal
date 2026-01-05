"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { deleteSavedFlight, getSavedFlights } from "@/app/api/flight";

interface AirportInfo {
  airport: string;
  iata: string;
  terminal?: string;
  gate?: string;
  baggage?: string;
  scheduled: string;
}

interface Flight {
  flight_date: string;
  flight_status: string;
  departure: AirportInfo;
  arrival: AirportInfo;
  airline: { name: string; iata: string };
  flight: { number: string; iata: string };
}

interface SavedFlight {
  _id: string;
  userId: string;
  flightData: Flight;
  createdAt: string;
}

export function SavedFlightsList() {
  const { data: session } = useSession();
  const token = session?.accessToken as string | undefined;

  const [savedFlights, setSavedFlights] = useState<SavedFlight[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) return;
    setLoading(true);

    getSavedFlights(token)
      .then(setSavedFlights)
      .finally(() => setLoading(false));
  }, [token]);
  console.log(savedFlights)

  const removeFlight = async (_id: string) => {
    if (!token) return;

    try {
      await deleteSavedFlight(_id, token);
      setSavedFlights((prev) => prev.filter((f) => f._id !== _id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading saved flights…</p>;
  if (!savedFlights.length)
    return (
      <div className="rounded-[10px] border border-border bg-card p-12 text-center shadow-sm">
        <p>No saved flights yet. Start searching to save your favorite deals.</p>
      </div>
    );

  return (
    <div className="space-y-3">
      {savedFlights.map((saved) => {
        const flight = saved.flightData;
        return (
          <div
            key={saved._id}
            className="flex items-center justify-between rounded-[10px] border border-border bg-card p-5 shadow-sm"
          >
            <div className="space-y-1">
              <p className="text-xs font-medium">{flight.airline.name}</p>
              <p className="text-xs text-muted-foreground">
                Flight {flight.flight.iata} | {flight.departure.iata} → {flight.arrival.iata}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Departure</p>
                <p className="text-xs font-medium">
                  {new Date(flight.departure.scheduled).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Arrival</p>
                <p className="text-xs font-medium">
                  {new Date(flight.arrival.scheduled).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="text-xs font-medium">{new Date(flight.flight_date).toLocaleDateString()}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFlight(saved._id)}
                className="h-8 rounded-[10px] text-xs font-medium text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                Remove
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
