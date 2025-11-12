import Image from "next/image";

const helpInfos = [
  {
    title: "Support",
    text: "Get help with technical issues or platform questions quickly.",
    img: "/support.svg",
    email: "support@analyzer.com"
  },
  {
    title: "Partners",
    text: "Interested in collaborating? Reach out to discuss partnerships.",
    img: "/partners.svg",
    email: "partners@analyzer.com"
  },
  {
    title: "Billing",
    text: "Have questions about invoices or payments? Contact billing.",
    img: "/billing.svg",
    email: "billing@analyzer.com"
  }
]

export default function Section32() {
  return (
    <section
      className={`h-screen flex flex-col justify-center rounded-bl-[50px] rounded-br-[50px] shadow-[1px_30px_10px_-12px_rgba(0,0,0,.3)] `}
    >
      <div
        className={`w-full text-center mb-4`}
      >
        <h1
          className={`h1 text-5xl`}
        >
          Need more help?
        </h1>
        <p
          className={`pp`}
        >
          Explore our various support channels below for specific inquiries, whether you<br/>need technical assistance, partnership info, or billing support
        </p>
      </div>
      <div
        className={`flex gap-8 `}
      >
        {helpInfos.map((infos) => (
          <a
            key={infos.title}
            href=""
            className={`group hover:scale-98 card p-4 pb-8 flex gap-4`}
          >
            <Image
              src={infos.img}
              alt={''}
              width={28}
              height={28}
              className={`max-h-7 opacity-80 mt-1.5`}
            />
            <div>
              <h4
                className={`h1 text-2xl mb-3`}
              >
                {infos.title}
              </h4>
              <p
                className={`pp mb-6`}
              >
                {infos.text}
              </p>
              <div
                className={`text-white/95 group-hover:text-[#ffffff] text-xl transition-all duration-300`}
              >
                {infos.email}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
} 