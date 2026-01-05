"use client"

import { Navigation } from "@/src/components/navigation"
import { SavedFlightsList } from "@/src/components/saved-flights-list"
import { Providers } from "@/src/providers/providers"
import { Bookmark } from "lucide-react"

export default function SavedPage() {
  return (
    <Providers>

    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Bookmark className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Saved Flights
            </h1>
          </div>
          <SavedFlightsList />
        </div>
      </main>
    </div>
    </Providers>
  )
}
