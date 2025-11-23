export default function Section1() {
  return (
    <section className="text-white cont my-40 sm:my-60 lg:my-0 lg:h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start">
      <div className={`text-center lg:text-left lg:ml-16 m-0 p-0`}>
        <h1 className={`head1 p-0 m-0 w-full`}>
          Unlock The Power of
          <br />
          Website Analytics
        </h1>
        <p
          className={`lg:text-lg mb-10 text-secondary text-pp text-[16px] max-w-[610px]`}
        >
          Understand audience behavior and website performance through
          analytics. Make decisions with clear data
        </p>
        <div
          className={`flex gap-7 sm:justify-center lg:justify-self-start sm:flex-row flex-col mx-auto sm:mx-0`}
        >
          <button className="btn-con md:px-6 md:py-3 px-4 py-2 w-fit mx-auto">
            GET STARTED
          </button>
          <button className="btn-out hidden md:block">VIEW DASHBOARED</button>
        </div>
      </div>
    </section>
  );
}
