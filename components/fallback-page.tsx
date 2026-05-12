import { Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FallbackPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
              <Globe className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Premium Domains
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted">
            <Globe className="h-10 w-10 text-muted-foreground" />
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Premium Digital Assets
          </h1>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-md text-pretty text-lg text-muted-foreground">
            This domain has either been sold or is currently parked. Contact us
            for inquiries about available domains.
          </p>

          {/* Contact Button */}
          <Button asChild size="lg" className="h-12 px-6">
            <a href="mailto:domains@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Premium Domains. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
