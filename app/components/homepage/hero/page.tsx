export default function Hero() {
  return (
    <section className="text-white cont h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start">
      <div className={`text-center lg:text-left`}>
        <h1 className={`md:text-[min(5.5vw,64px)] leading-[1.2] mb-5 font-bold`}>
          Unlock the power of<br/>website analytics
        </h1>
        <p 
        className={`opacity-50 md:text-[min(1.406vw,18px)] mb-10 leading-normal`}>
          Understand audience behavior and website performance<br/>through analytics. Make decisions with clear data
        </p>
        <div className={`flex gap-7 justify-center lg:justify-self-start`}>
          <button 
          className="btn-con">
            GET STARTED 
          </button>
          <button 
          className="btn-out">
            VIEW DASHBOARED
          </button>
        </div>
      </div>
    </section>
  )
}