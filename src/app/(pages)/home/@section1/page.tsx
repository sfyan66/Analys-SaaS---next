export default function Section1() {
  return (
    <section className="text-white cont h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start">
      <div
        className={`text-center lg:text-left ml-16`}
      >
        <h1
          className={`lg:text-[min(5.5vw,72px)] leading-[1.2] mb-5 font- text-h1`}
        >
          Unlock The Power<br/>of Web Analytics
        </h1>
        <p 
          className={`lg:text-lg mb-10 text-secondary text-pp`}
        >
          Understand audience behavior and website performance<br/>through analytics. Make decisions with clear data
        </p>
        <div
          className={`flex gap-7 justify-center lg:justify-self-start sm:flex-row flex-col`}
        >
          <button 
            className="btn-con"
          >
            GET STARTED 
          </button>
          <button 
            className="btn-out"
          >
            VIEW DASHBOARED
          </button>
        </div>
      </div>
    </section>
  )
}