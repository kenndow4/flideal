
import { RegisterForm } from "@/src/components/auth/register-form"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-lg font-semibold text-foreground">Flight Deals</h1>
          <p className="mt-2 text-xs text-muted-foreground">Create your account</p>
        </div>
        <RegisterForm />
        <p className="text-center text-xs text-muted-foreground">
          {"Already have an account? "}
          <Link href="/login" className="font-medium text-foreground hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
