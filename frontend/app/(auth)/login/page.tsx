import { LoginForm } from "@/src/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-lg font-semibold text-foreground">Flight Deals</h1>
          <p className="mt-2 text-xs text-muted-foreground">Sign in to your account</p>
        </div>
        <LoginForm />
        <p className="text-center text-xs text-muted-foreground">
          {"Don't have an account? "}
          <Link href="/register" className="font-medium text-foreground hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
