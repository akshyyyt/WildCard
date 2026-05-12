import { Shield, Zap, CheckCircle, ArrowRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { DomainData } from "@/lib/portfolio"

interface DomainLandingProps {
  data: DomainData
}

export function DomainLanding({ data }: DomainLandingProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background text-sm font-semibold">
              {data.logoText}
            </div>
            <span className="text-lg font-semibold tracking-tight">
              {data.brandName}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
        
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>Premium Domain Available</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
                {data.brandName}
              </span>
            </h1>

            {/* Tagline */}
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              {data.tagline}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-medium"
              >
                <a href={data.stripeLink}>
                  Acquire This Brand for {data.price}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <p className="mt-6 text-sm text-muted-foreground">
              Secure checkout powered by Stripe • Instant ownership transfer
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Why Acquire This Domain?
            </h2>
            <p className="text-muted-foreground">
              A premium domain is your first step to building a memorable brand.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Instant Authority"
              description="A strong domain name immediately establishes credibility and trust with your target audience."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="SEO Ready"
              description="Keyword-rich domains give you a head start in search engine rankings from day one."
            />
            <FeatureCard
              icon={<CheckCircle className="h-6 w-6" />}
              title="Secure Transfer"
              description="We handle the entire transfer process through a secure escrow, ensuring a smooth handover."
            />
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Ready to Own {data.brandName}?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Secure this premium domain before someone else does.
            </p>
            <Button
              asChild
              size="lg"
              className="h-12 px-6"
            >
              <a href={data.stripeLink}>
                Buy Now for {data.price}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {data.brandName}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Contact:{" "}
              <a
                href="mailto:domains@example.com"
                className="underline underline-offset-4 hover:text-foreground"
              >
                domains@example.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-background p-6 transition-colors hover:border-border">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-foreground text-background">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
