"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Plane, LogOut, Sparkles } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/saved", label: "Saved Flights" },
    { href: "/profile", label: "Profile" },
  ]

  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" })
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold text-foreground group">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all group-hover:scale-105">
                <Plane className="h-6 w-6 text-white" />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Flight Deals
              </span>
            </Link>
            <div className="flex gap-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-all hover:text-primary relative py-1",
                    pathname === link.href ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <div className="absolute -bottom-[1.375rem] left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-all hover:bg-muted/50 hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </div>
    </nav>
  )
}
