"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { register } from "@/app/api/register"
import { ClipLoader } from "react-spinners";

export function RegisterForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)
   const router = useRouter()

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const result = await register({ name, email, password });
      console.log(result)

      if (!result.ok) {
        setError(result.message);
        return;
      }

      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-xs font-medium text-foreground">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-9 rounded-[10px] border-[#ccc] bg-input text-xs"
        />
        
      </div>
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-9 rounded-[10px] border-[#ccc] bg-input text-xs"
        />

      </div>
         <div className="space-y-2">
        <Label htmlFor="password" className="text-xs font-medium text-foreground">
         Confirm Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="h-9 rounded-[10px] border-[#ccc] bg-input text-xs"
        />
        </div>
        {error && <p className="text-xs text-destructive">{error}</p>}
      <Button
        type="submit"
        disabled={isLoading}
        className="h-9 w-full rounded-[10px] bg-primary text-xs font-medium text-primary-foreground hover:bg-primary/90 cursor-pointer"
      >
         {isLoading ? (
                <>
                  <ClipLoader size={15} color="#000" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
      </Button>
    </form>
  )
}
