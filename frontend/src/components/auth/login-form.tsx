"use client"

import type React from "react"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ClipLoader } from "react-spinners";

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError(res.error);
      return;
    }

    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs font-medium text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-9 rounded-[10px] border-[#ccc] bg-input text-xs"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-xs font-medium text-foreground">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-9 rounded-[10px] border-[#ccc] bg-input text-xs"
        />
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="h-9 w-full rounded-[10px] bg-primary text-xs font-medium text-primary-foreground hover:bg-primary/90 cursor-pointer"
      >
        {isLoading ? (
                <>
                  <ClipLoader size={15} color="#fff" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
      </Button>
    </form>
  )
}
