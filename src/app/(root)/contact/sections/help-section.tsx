import Image from 'next/image';

const helpInfos = [
  {
    title: 'Support',
    text: 'Get help with technical issues or platform questions quickly.',
    img: '/support.svg',
    email: 'support@analyzer.com',
  },
  {
    title: 'Partners',
    text: 'Interested in collaborating? Reach out to discuss partnerships.',
    img: '/partners.svg',
    email: 'partners@analyzer.com',
  },
  {
    title: 'Billing',
    text: 'Have questions about invoices or payments? Contact billing.',
    img: '/billing.svg',
    email: 'billing@analyzer.com',
  },
];

export default function HelpSection() {
  return (
    <section
      className={`lg:h-screen lg:my-0 md:my-60 my-40 flex items-center flex-col justify-center `}
    >
      <div className={`w-full text-center mb-4`}>
        <h1 className={`text-white subhead`}>Need more help?</h1>
        <p
          className={`text-secondary text-pp text-[16px] mb-8 max-w-[600px] mx-auto`}
        >
          Explore our various support channels below for specific inquiries,
          whether you need technical assistance, partnership info, or billing
          support
        </p>
      </div>
      <div className={`flex gap-8 lg:flex-row flex-col`}>
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
              <h4 className={`text-white font-head2 text-2xl mb-3`}>
                {infos.title}
              </h4>
              <p className={`text-secondary text-pp text-[16px] mb-6`}>
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
  );
}
