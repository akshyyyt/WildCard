import { headers } from "next/headers"
import { getDomainData } from "@/lib/portfolio"
import { DomainLanding } from "@/components/domain-landing"
import { FallbackPage } from "@/components/fallback-page"

export default async function Page() {
  const headersList = await headers()
  const host = headersList.get("host") || ""
  
  const domainData = getDomainData(host)

  if (domainData) {
    return <DomainLanding data={domainData} />
  }

  return <FallbackPage />
}
