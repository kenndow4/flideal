"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, MapPin, ArrowLeftRight } from "lucide-react"

export function SearchFlights() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [departure, setDeparture] = useState("")
  const [returnDate, setReturnDate] = useState("")

  const handleSearch = () => {
    console.log({ from, to, departure, returnDate })
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor="from" className="text-xs font-semibold text-white flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            From
          </Label>
          <Input
            id="from"
            placeholder="New York (JFK)"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="h-11 text-sm bg-white/15 border-white/25 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/20 focus:border-white/40 rounded-[10px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="to" className="text-xs font-semibold text-white flex items-center gap-1.5">
            <ArrowLeftRight className="h-3.5 w-3.5" />
            To
          </Label>
          <Input
            id="to"
            placeholder="Los Angeles (LAX)"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="h-11 text-sm bg-white/15 border-white/25 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/20 focus:border-white/40 rounded-[10px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="departure" className="text-xs font-semibold text-white">
            Departure
          </Label>
          <Input
            id="departure"
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="h-11 text-sm bg-white/15 border-white/25 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/20 focus:border-white/40 rounded-[10px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="return" className="text-xs font-medium text-white/70">
            Return (optional)
          </Label>
          <Input
            id="return"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="h-11 text-sm bg-white/15 border-white/25 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/20 focus:border-white/40 rounded-[10px]"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleSearch}
          size="lg"
          className="h-11 px-6 text-sm font-semibold bg-cyan-500 hover:bg-cyan-600 text-white rounded-[10px] shadow-lg"
        >
          <Search className="mr-2 h-4 w-4" />
          Search Flights
        </Button>
      </div>
    </div>
  )
}
