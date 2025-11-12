import FeatureCard from "@/components/feature/page"

const items = [
  {
    image: "/first.svg",
    h3: "Realtime analytics"
  },
  {
    image: "/user.svg",
    h3: "User analytics"
  },
  {
    image: "/fourth.svg",
    h3: "Funnel optimization"
  },
  {
    image: "/fifth.svg",
    h3: "A/B testing"
  }
]

const Section22 = () => {
  return (
    <main className="h-screen flex items-center">
      <FeatureCard
        title="Analytics"
        text="All-in-one platform for advanced user analytics"
        description="Gain insights into user behavior with our analytics, tracking metrics and interactions across your platform."
        items={items}
      />
    </main>
  )
}

export default Section22
