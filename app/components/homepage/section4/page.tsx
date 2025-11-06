const Section4 = () => {
  return (
    <section 
    className={`h-screen flex items-center`}
    >
      <div 
      className={`card py-10 px-8 w-[45%]`}
      >
        <div 
        className={`after:content-[' '] after:bg-white/5 afte:w-full after:mt-12 after:h-px after:block`}
        >
          <h4 
          className={`text-white md:text-[min(3vw,36px)] mb-4 font-bold leading-tight`}
          >Custom-made reports to make great decisions</h4>
          <p 
          className={`text-secondary leading-relaxed md\:text-[min(1.44vw,18px)] tracking-wider`}
          >Build tailored reports focusing on the metrics crucial for your business goals, enabling smarter, data-driven choices.
          </p>
        </div>
        <ul 
        className={`text-secondary flex pt-12`}
        >
          <li 
          className="flex-1"
          >
            <h5 
            className={`text-white text-4xl mb-1 font-semibold`}
            >40%</h5>
            <p>Increase in retention</p>
          </li>
          <li 
          className="flex-1"
          >
            <h5 
            className={`text-white text-4xl mb-1 font-semibold`}
            >2.5X</h5>
            <p>User base growth</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Section4
