export interface DomainData {
  brandName: string
  price: string
  tagline: string
  stripeLink: string
  logoText: string
}

export const portfolio: Record<string, DomainData> = {
  "https://wild-card-seven.vercel.app/": {
    brandName: "Pune Roofing",
    price: "₹10,000",
    tagline: "Premium domain for roofing services in Pune. Establish instant credibility in the local market.",
    stripeLink: "https://buy.stripe.com/example-pune-roofing",
    logoText: "PR",
  },
  "delhibakers.com": {
    brandName: "Delhi Bakers",
    price: "₹15,000",
    tagline: "The perfect domain for a bakery business targeting the Delhi NCR region.",
    stripeLink: "https://buy.stripe.com/example-delhi-bakers",
    logoText: "DB",
  },
  "mumbaitech.in": {
    brandName: "Mumbai Tech",
    price: "₹25,000",
    tagline: "A powerful tech-focused domain for startups and IT companies in Mumbai.",
    stripeLink: "https://buy.stripe.com/example-mumbai-tech",
    logoText: "MT",
  },
  "bangalorefitness.com": {
    brandName: "Bangalore Fitness",
    price: "₹12,000",
    tagline: "Capture the health-conscious Bangalore market with this premium fitness domain.",
    stripeLink: "https://buy.stripe.com/example-bangalore-fitness",
    logoText: "BF",
  },
  "chennaicars.in": {
    brandName: "Chennai Cars",
    price: "₹20,000",
    tagline: "Ideal for automotive dealerships and car services in Chennai.",
    stripeLink: "https://buy.stripe.com/example-chennai-cars",
    logoText: "CC",
  },
}

export function getDomainData(host: string): DomainData | null {
  // Clean the host: remove www., ports, and convert to lowercase
  const cleanHost = host
    .toLowerCase()
    .replace(/^www\./, "")
    .replace(/:\d+$/, "")
    .trim()

  return portfolio[cleanHost] || null
}
