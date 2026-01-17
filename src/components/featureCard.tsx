import Image from "next/image"

type Item = {
  image: string,
  h3: string,
}
type Infos = {
  title: string,
  text: string,
  description: string,
  items: Item[],
}

const FeatureCard = ({ title, text, description, items }: Infos) => {
  return (
    <main
      className={`card lg:w-[40%] pt-6 pb-12 px-8`}>
      <div
        className={`text-white/90 tracking-widest`}>
        {title}
      </div>
      <h2
        className={`text-white text-4xl mb-4 mt-6`}>
        {text}
      </h2>
      <p
        className={`text-secondary mb-12`}>
        {description}
      </p>
      <div className="after-line mb-12"></div>
      <div className={`grid grid-cols-2 gap-x-8 gap-y-10`}>
        {items.map((item , i) => (
          <div
            key={i}
            className={`flex gap-3`}>
            <Image
              width={25}
              height={25}
              className="opacity-80"
              src={item.image} alt={''} />
            <h3
              className={`text-white text-lg`}>
              {item.h3}
            </h3>
          </div>
        ))}
      </div>
    </main>
  )
}

export default FeatureCard
