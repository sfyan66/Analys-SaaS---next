import FeatureCard from "@/components/feature/page"

const items = [
  {
    image: "/integrations.svg",
    h3: "20+ integrations"
  },
  {
    image: "/data.svg",
    h3: "Data enrichment"
  },
  {
    image: "/sync.svg",
    h3: "Seamless data sync"
  },
  {
    image: "/hooks.svg",
    h3: "Webhooks"
  }
]

const Section24 = () => {
  return (
    <main className="h-screen flex items-center">
      <FeatureCard
        title="Integrations"
        text="Native integrations with all your favorite tools"
        description="Connect Pixelcloud with your software stack. Our integrations streamline data flow between your tools."
        items={items}
      />
    </main>
  )
}

export default Section24
