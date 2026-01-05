"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Bookmark,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";
import { findAllFlights } from "@/app/api/flight";
import { api } from "@/lib/api"; // tu instancia axios

/* =========================
   TYPES
========================= */

interface AirportInfo {
  airport: string;
  iata: string;
  terminal?: string;
  gate?: string;
  baggage?: string;
  scheduled: string;
  timezone?: string;
  delay?: number | null;
  estimated?: string | null;
  actual?: string | null;
  estimated_runway?: string | null;
  actual_runway?: string | null;
}

interface Flight {
  flight_date: string;
  flight_status: string;
  departure: AirportInfo;
  arrival: AirportInfo;
  airline: {
    name: string;
    iata: string;
    icao?: string;
  };
  flight: {
    number: string;
    iata: string;
    icao?: string;
    codeshared?: object | null;
  };
  aircraft?: {
    registration?: string | null;
    iata?: string | null;
    icao?: string | null;
    icao24?: string | null;
  };
  live?: any;
}

/* =========================
   SAVE FLIGHT API
========================= */

const saveFlight = async (flight: Flight, token: string) => {
  return api.post(
    "/save-flight",
    flight, // enviamos el objeto completo como lo recibiste
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

/* =========================
   COMPONENT
========================= */

export function FlightResults() {
  const { data: session } = useSession();
  const token = session?.accessToken as string | undefined;

  const [flights, setFlights] = useState<Flight[]>([]);
  const [savedFlights, setSavedFlights] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(total / limit);

  /* =========================
     FETCH DATA
  ========================== */

  useEffect(() => {
    if (!token) return;

    setLoading(true);
    findAllFlights(page, limit, token)
      .then((res) => {
        setFlights(res.data.data);
        setTotal(res.data.pagination.total);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page, limit, token]);

  /* =========================
     SAVE FLIGHT
  ========================== */

  const toggleSaveFlight = async (flight: Flight) => {
    if (!token) return;

    try {
      await saveFlight(flight, token);
      setSavedFlights((prev) => [...prev, flight.flight.iata]);
    } catch (err) {
      console.error("Error saving flight:", err);
    }
  };

  /* =========================
     RENDER
  ========================== */

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Available Flights</h2>
        <span className="text-sm text-muted-foreground">
          {total.toLocaleString()} results
        </span>
      </div>

      {loading && <p className="text-sm">Loading flights…</p>}

      {/* Flights */}
      <div className="space-y-5">
        {flights.map((flight) => {
          const duration = calculateDuration(
            flight.departure.scheduled,
            flight.arrival.scheduled
          );

          return (
            <div
              key={flight.flight.iata}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{flight.airline.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Flight {flight.flight.iata}
                  </p>
                </div>

                <Button
                  variant={
                    savedFlights.includes(flight.flight.iata)
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => toggleSaveFlight(flight)}
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>

              {/* Date & Status */}
              <div className="mt-3 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(flight.flight_date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {flightStatusLabel(flight.flight_status)}
                </div>
              </div>

              {/* Route */}
              <div className="mt-6 flex items-center justify-between gap-6">
                <div className="flex-1">
                  <p className="text-3xl font-bold">
                    {formatTime(flight.departure.scheduled)}
                  </p>
                  <p className="font-semibold">{flight.departure.iata}</p>
                  <p className="text-xs text-muted-foreground">
                    {flight.departure.airport}
                  </p>
                  {flight.departure.terminal && (
                    <p className="text-xs">
                      Terminal {flight.departure.terminal}
                      {flight.departure.gate &&
                        ` · Gate ${flight.departure.gate}`}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs font-medium">{duration}</span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <span className="text-xs">Direct</span>
                </div>

                <div className="flex-1 text-right">
                  <p className="text-3xl font-bold">
                    {formatTime(flight.arrival.scheduled)}
                  </p>
                  <p className="font-semibold">{flight.arrival.iata}</p>
                  <p className="text-xs text-muted-foreground">
                    {flight.arrival.airport}
                  </p>
                  {flight.arrival.terminal && (
                    <p className="text-xs">
                      Terminal {flight.arrival.terminal}
                      {flight.arrival.baggage &&
                        ` · Baggage ${flight.arrival.baggage}`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-4">
        <Button
          disabled={page === 1 || loading}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Prev
        </Button>

        <span className="text-sm">
          Page {page} of {totalPages}
        </span>

        <Button
          disabled={page === totalPages || loading}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

/* =========================
   UTILS
========================= */

function calculateDuration(start: string, end: string) {
  const diff = new Date(end).getTime() - new Date(start).getTime();
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${h}h ${m}m`;
}

function formatTime(date: string) {
  return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

function flightStatusLabel(status: string) {
  switch (status) {
    case "active":
      return "In flight";
    case "landed":
      return "Landed";
    default:
      return "Scheduled";
  }
}
