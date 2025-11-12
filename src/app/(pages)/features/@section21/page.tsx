"use client"

const Section21 = () => {
  return (
    <section className={`h-screen flex items-center`}>
      <div className={``}>
        <h1 className={`h1 leading-none`}>Features</h1>
        <p className={`pp`}>
          Discover powerful capabilities of our platform, designed to<br/>enhance your workflow, provide insights, and drive results.
        </p>
        <div className={`btn-div lg:justify-center`}>
          <button
            onClick={() => window.scrollBy(0, window.innerHeight) }
            className={`btn-out`}>
            ANALYTICS
          </button>
          <button
            onClick={() => window.scrollBy(0, window.innerHeight * 2) }
            className={`btn-out`}>
            REPORTS
          </button>
          <button
            onClick={() => window.scrollBy(0, window.innerHeight * 3) }
            className={`btn-out`}>
            INTEGRATIONS
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section21
