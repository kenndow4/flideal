import { Navigation } from "@/src/components/navigation";


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-lg font-semibold text-foreground">Profile</h1>
          <div className="rounded-[10px] border border-border bg-card p-6 shadow-sm">
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Name</p>
                  <p className="mt-1 text-sm text-foreground">John Doe</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Email</p>
                  <p className="mt-1 text-sm text-foreground">john.doe@example.com</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Member since</p>
                  <p className="mt-1 text-sm text-foreground">January 2025</p>
                </div>
              </div>
              <div className="pt-4">
                <button  className="h-9 rounded-[10px] text-xs font-medium bg-transparent">
                  Edit profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
