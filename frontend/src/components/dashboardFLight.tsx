"use client";

import { useSession, signOut } from "next-auth/react";
import { FlightResults } from "@/src/components/flight-results";
import { SearchFlights } from "@/src/components/search-flights";
import { Plane, TrendingDown, Shield, Clock } from "lucide-react";
import Link from "next/link";

/* =======================
   UTIL: color por nombre
======================= */


export default function DashboardPage() {
  const { data: session } = useSession();

  const name = session?.user?.name || session?.user?.email || "User";
  console.log("fd",session)
  const initial = name.charAt(0).toUpperCase();

  return (
      
    <div className="min-h-screen bg-background">
      {/* ================= NAVBAR ================= */}
      <nav className="border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-base font-bold text-foreground">
                Flidea
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm font-semibold text-primary border-b-2 border-primary pb-0.5"
              >
                Dashboard
              </Link>

              <Link
                href="/saved"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Saved Flights
              </Link>

              {/* Profile Avatar */}
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: session?.user.background || "red" }}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white select-none"
                  title={name}
                >
                  {initial}
                </div>

                <button
                  onClick={() => signOut()}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1e3a8a] via-[#3b82f6] to-[#93c5fd] pb-12">
        <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2">
              <Plane className="h-4 w-4 text-white" />
              <span className="text-xs font-semibold text-white">
                Best Flight Deals Platform
              </span>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              Find Your Perfect Flight
            </h1>
            <p className="text-base text-white/90 max-w-3xl mx-auto">
              Compare prices from hundreds of airlines and save up to 40% on your
              next trip
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-8 text-sm text-white/90 font-medium">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Lowest Prices
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Secure Booking
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              24/7 Support
            </div>
          </div>

          {/* <div className="rounded-[10px] bg-white/10 backdrop-blur-sm border border-white/20 p-8 shadow-xl">
            <SearchFlights />
          </div> */}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 bg-background">
        <FlightResults />
      </main>
    </div>
  );
}
