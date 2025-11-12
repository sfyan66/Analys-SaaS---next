import FeatureCard from "@/components/feature/page"

const items = [
  {
    image: "/reports.svg",
    h3: "Automated reports"
  },
  {
    image: "/search.svg",
    h3: "AI data predictions"
  },
  {
    image: "/charts.svg",
    h3: "Advanced charts"
  },
  {
    image: "/pdf.svg",
    h3: "PDF reports"
  }
]

const Section23 = () => {
  return (
    <main className='h-screen flex items-center'>
      <FeatureCard
        title="Reports"
        text="Automated weekly and monthly reports"
        description="Receive detailed performance summaries. Schedule reports to keep your team informed about key trends and metrics."
        items={items}
      />
    </main>
  )
}

export default Section23
